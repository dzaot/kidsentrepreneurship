// Removes metadata (GPS location, camera, dates, author) from JPEG and PNG
// uploads, because photos from a parent's phone can carry where they were taken.

const PNG_DROP = new Set(["eXIf", "tEXt", "zTXt", "iTXt", "tIME"]);

function stripJpeg(src: Uint8Array): Uint8Array {
  const out: Uint8Array[] = [src.subarray(0, 2)];
  let i = 2;
  while (i + 4 <= src.length && src[i] === 0xff) {
    const marker = src[i + 1];
    if (marker === 0xda) break; // start of scan: the rest is image data
    const len = (src[i + 2] << 8) | src[i + 3];
    const end = i + 2 + len;
    // APP1 (EXIF/XMP), APP13 (Photoshop/IPTC) and COM (comments) carry metadata.
    if (marker !== 0xe1 && marker !== 0xed && marker !== 0xfe) out.push(src.subarray(i, end));
    i = end;
  }
  out.push(src.subarray(i));
  return concat(out);
}

function stripPng(src: Uint8Array): Uint8Array {
  const out: Uint8Array[] = [src.subarray(0, 8)];
  const view = new DataView(src.buffer, src.byteOffset, src.byteLength);
  let i = 8;
  while (i + 12 <= src.length) {
    const len = view.getUint32(i);
    const type = String.fromCharCode(...src.subarray(i + 4, i + 8));
    const end = i + 12 + len;
    if (!PNG_DROP.has(type)) out.push(src.subarray(i, end));
    i = end;
    if (type === "IEND") break;
  }
  return concat(out);
}

function concat(parts: Uint8Array[]) {
  const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
  let o = 0;
  for (const p of parts) {
    out.set(p, o);
    o += p.length;
  }
  return out;
}

export function stripMetadata(data: ArrayBuffer, contentType: string): ArrayBuffer {
  const bytes = new Uint8Array(data);
  try {
    let clean: Uint8Array = bytes;
    if (contentType === "image/jpeg" && bytes[0] === 0xff && bytes[1] === 0xd8) clean = stripJpeg(bytes);
    else if (contentType === "image/png" && bytes[0] === 0x89 && bytes[1] === 0x50) clean = stripPng(bytes);
    return clean.slice().buffer;
  } catch {
    return data; // malformed file: keep as is rather than corrupt it
  }
}
