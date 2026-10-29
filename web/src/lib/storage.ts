import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import { neonConfig, Pool, type PoolClient } from "@neondatabase/serverless";

// Tiny storage layer: Neon Postgres (serverless driver over WebSocket) when a database
// URL is set, the local .data folder otherwise (development).

type FileMeta = { contentType: string; name: string };

const DB_URL = process.env.DATABASE_URL || process.env.POSTGRES_URL;
const LOCAL_ROOT = path.join(process.cwd(), ".data");

// Lets tests point the driver at a local Postgres through a plain WebSocket bridge.
if (process.env.NEON_WS_PROXY) {
  neonConfig.wsProxy = () => process.env.NEON_WS_PROXY!;
  neonConfig.useSecureWebSocket = false;
  neonConfig.pipelineConnect = false;
  neonConfig.pipelineTLS = false;
}

let schemaReady = false;

// Serverless functions can't keep a WebSocket between requests, so each call opens
// and closes its own pool, as the Neon driver docs require.
async function withDb<T>(fn: (db: PoolClient) => Promise<T>): Promise<T> {
  const pool = new Pool({ connectionString: DB_URL });
  const db = await pool.connect();
  try {
    if (!schemaReady) {
      await db.query(`
        create table if not exists kv (
          key text primary key,
          value jsonb not null,
          updated_at timestamptz not null default now()
        );
        create table if not exists files (
          key text primary key,
          content_type text not null,
          name text not null,
          data bytea not null,
          created_at timestamptz not null default now()
        );`);
      schemaReady = true;
    }
    return await fn(db);
  } finally {
    db.release();
    await pool.end();
  }
}

function localPath(store: string, key: string) {
  return path.join(LOCAL_ROOT, store, ...key.split("/").map(encodeURIComponent));
}

export async function getJSON<T>(key: string): Promise<T | null> {
  if (DB_URL) {
    const { rows } = await withDb((db) => db.query<{ value: T }>("select value from kv where key = $1", [key]));
    return rows[0]?.value ?? null;
  }
  try {
    return JSON.parse(await fs.readFile(localPath("data", key), "utf8")) as T;
  } catch {
    return null;
  }
}

export async function setJSON(key: string, value: unknown) {
  if (DB_URL) {
    await withDb((db) =>
      db.query(
        `insert into kv (key, value) values ($1, $2::jsonb)
         on conflict (key) do update set value = excluded.value, updated_at = now()`,
        [key, JSON.stringify(value)],
      ),
    );
    return;
  }
  const file = localPath("data", key);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(value, null, 2));
}

export async function deleteKey(key: string) {
  if (DB_URL) {
    await withDb((db) => db.query("delete from kv where key = $1", [key]));
    return;
  }
  await fs.rm(localPath("data", key), { force: true });
}

export async function putFile(key: string, data: ArrayBuffer, meta: FileMeta) {
  if (DB_URL) {
    await withDb((db) =>
      db.query(
        `insert into files (key, content_type, name, data) values ($1, $2, $3, $4)
         on conflict (key) do update set content_type = excluded.content_type, name = excluded.name, data = excluded.data`,
        [key, meta.contentType, meta.name, Buffer.from(data)],
      ),
    );
    return;
  }
  const file = localPath("files", key);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, Buffer.from(data));
  await fs.writeFile(file + ".meta.json", JSON.stringify(meta));
}

export async function getFile(key: string): Promise<{ data: ArrayBuffer; meta: FileMeta } | null> {
  if (DB_URL) {
    const { rows } = await withDb((db) =>
      db.query<{ data: Buffer; content_type: string; name: string }>(
        "select data, content_type, name from files where key = $1",
        [key],
      ),
    );
    const row = rows[0];
    if (!row) return null;
    const buf = row.data;
    return {
      data: buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer,
      meta: { contentType: row.content_type, name: row.name },
    };
  }
  try {
    const file = localPath("files", key);
    const buf = await fs.readFile(file);
    const meta = JSON.parse(await fs.readFile(file + ".meta.json", "utf8")) as FileMeta;
    return { data: buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), meta };
  } catch {
    return null;
  }
}

export async function deleteFile(key: string) {
  if (DB_URL) {
    await withDb((db) => db.query("delete from files where key = $1", [key]));
    return;
  }
  const file = localPath("files", key);
  await fs.rm(file, { force: true });
  await fs.rm(file + ".meta.json", { force: true });
}

// Every document whose key starts with `prefix`, for founder-side reports (pilot scale only).
export async function listJSON<T>(prefix: string): Promise<{ key: string; value: T }[]> {
  if (DB_URL) {
    const { rows } = await withDb((db) =>
      db.query<{ key: string; value: T }>("select key, value from kv where key like $1 escape '\\' order by key", [
        likePrefix(prefix),
      ]),
    );
    return rows;
  }
  const parts = prefix.split("/");
  const dir = path.join(LOCAL_ROOT, "data", ...parts.slice(0, -1).map(encodeURIComponent));
  const out: { key: string; value: T }[] = [];
  async function walk(folder: string, keyParts: string[]) {
    let entries;
    try {
      entries = await fs.readdir(folder, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const parts2 = [...keyParts, decodeURIComponent(e.name)];
      const full = path.join(folder, e.name);
      if (e.isDirectory()) await walk(full, parts2);
      else {
        const key = parts2.join("/");
        if (!key.startsWith(prefix)) continue;
        try {
          out.push({ key, value: JSON.parse(await fs.readFile(full, "utf8")) as T });
        } catch {
          // A file being written right now; skip it.
        }
      }
    }
  }
  await walk(dir, parts.slice(0, -1));
  return out.sort((a, b) => (a.key < b.key ? -1 : 1));
}

// Removes every document under a folder-like prefix such as "events/f/<familyId>/".
export async function deletePrefix(prefix: string) {
  if (!prefix.endsWith("/")) throw new Error("deletePrefix needs a prefix ending in /");
  if (DB_URL) {
    await withDb((db) => db.query("delete from kv where key like $1 escape '\\'", [likePrefix(prefix)]));
    return;
  }
  await fs.rm(path.join(LOCAL_ROOT, "data", ...prefix.slice(0, -1).split("/").map(encodeURIComponent)), {
    recursive: true,
    force: true,
  });
}

const likePrefix = (prefix: string) => prefix.replace(/[\\%_]/g, (c) => "\\" + c) + "%";
