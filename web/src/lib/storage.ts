import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import { getStore } from "@netlify/blobs";

// Tiny storage layer: Netlify Blobs in production, the local .data folder in dev.

type FileMeta = { contentType: string; name: string };

const onNetlify = Boolean(process.env.NETLIFY_BLOBS_CONTEXT || process.env.NETLIFY);
const LOCAL_ROOT = path.join(process.cwd(), ".data");

function localPath(store: string, key: string) {
  return path.join(LOCAL_ROOT, store, ...key.split("/").map(encodeURIComponent));
}

function blobs(name: string) {
  return getStore({ name, consistency: "strong" });
}

export async function getJSON<T>(key: string): Promise<T | null> {
  if (onNetlify) return (await blobs("data").get(key, { type: "json" })) as T | null;
  try {
    return JSON.parse(await fs.readFile(localPath("data", key), "utf8")) as T;
  } catch {
    return null;
  }
}

export async function setJSON(key: string, value: unknown) {
  if (onNetlify) {
    await blobs("data").setJSON(key, value);
    return;
  }
  const file = localPath("data", key);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(value, null, 2));
}

export async function deleteKey(key: string) {
  if (onNetlify) return blobs("data").delete(key);
  await fs.rm(localPath("data", key), { force: true });
}

export async function putFile(key: string, data: ArrayBuffer, meta: FileMeta) {
  if (onNetlify) {
    await blobs("files").set(key, data, { metadata: meta });
    return;
  }
  const file = localPath("files", key);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, Buffer.from(data));
  await fs.writeFile(file + ".meta.json", JSON.stringify(meta));
}

export async function getFile(key: string): Promise<{ data: ArrayBuffer; meta: FileMeta } | null> {
  if (onNetlify) {
    const res = await blobs("files").getWithMetadata(key, { type: "arrayBuffer" });
    if (!res) return null;
    return { data: res.data, meta: res.metadata as FileMeta };
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
  if (onNetlify) return blobs("files").delete(key);
  const file = localPath("files", key);
  await fs.rm(file, { force: true });
  await fs.rm(file + ".meta.json", { force: true });
}
