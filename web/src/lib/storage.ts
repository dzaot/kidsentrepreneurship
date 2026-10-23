import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import postgres from "postgres";

// Tiny storage layer: Postgres (Neon on Vercel) when a database URL is set,
// the local .data folder otherwise (development).

type FileMeta = { contentType: string; name: string };

const DB_URL = process.env.DATABASE_URL || process.env.POSTGRES_URL;
const LOCAL_ROOT = path.join(process.cwd(), ".data");

// One client per server instance; serverless functions reuse it across requests.
const globalDb = globalThis as unknown as { __sql?: postgres.Sql; __schema?: Promise<void> };

function db() {
  if (!DB_URL) return null;
  globalDb.__sql ??= postgres(DB_URL, { max: 5, idle_timeout: 20, prepare: false });
  globalDb.__schema ??= ensureSchema(globalDb.__sql);
  return { sql: globalDb.__sql, ready: globalDb.__schema };
}

async function ensureSchema(sql: postgres.Sql) {
  await sql`
    create table if not exists kv (
      key text primary key,
      value jsonb not null,
      updated_at timestamptz not null default now()
    )`;
  await sql`
    create table if not exists files (
      key text primary key,
      content_type text not null,
      name text not null,
      data bytea not null,
      created_at timestamptz not null default now()
    )`;
}

function localPath(store: string, key: string) {
  return path.join(LOCAL_ROOT, store, ...key.split("/").map(encodeURIComponent));
}

export async function getJSON<T>(key: string): Promise<T | null> {
  const d = db();
  if (d) {
    await d.ready;
    const rows = await d.sql<{ value: T }[]>`select value from kv where key = ${key}`;
    return rows[0]?.value ?? null;
  }
  try {
    return JSON.parse(await fs.readFile(localPath("data", key), "utf8")) as T;
  } catch {
    return null;
  }
}

export async function setJSON(key: string, value: unknown) {
  const d = db();
  if (d) {
    await d.ready;
    const json = d.sql.json(value as postgres.JSONValue);
    await d.sql`
      insert into kv (key, value) values (${key}, ${json})
      on conflict (key) do update set value = excluded.value, updated_at = now()`;
    return;
  }
  const file = localPath("data", key);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(value, null, 2));
}

export async function deleteKey(key: string) {
  const d = db();
  if (d) {
    await d.ready;
    await d.sql`delete from kv where key = ${key}`;
    return;
  }
  await fs.rm(localPath("data", key), { force: true });
}

export async function putFile(key: string, data: ArrayBuffer, meta: FileMeta) {
  const d = db();
  if (d) {
    await d.ready;
    await d.sql`
      insert into files (key, content_type, name, data)
      values (${key}, ${meta.contentType}, ${meta.name}, ${Buffer.from(data)})
      on conflict (key) do update set content_type = excluded.content_type, name = excluded.name, data = excluded.data`;
    return;
  }
  const file = localPath("files", key);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, Buffer.from(data));
  await fs.writeFile(file + ".meta.json", JSON.stringify(meta));
}

export async function getFile(key: string): Promise<{ data: ArrayBuffer; meta: FileMeta } | null> {
  const d = db();
  if (d) {
    await d.ready;
    const rows = await d.sql<{ data: Buffer; content_type: string; name: string }[]>`
      select data, content_type, name from files where key = ${key}`;
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
  const d = db();
  if (d) {
    await d.ready;
    await d.sql`delete from files where key = ${key}`;
    return;
  }
  const file = localPath("files", key);
  await fs.rm(file, { force: true });
  await fs.rm(file + ".meta.json", { force: true });
}
