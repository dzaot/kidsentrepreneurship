import { timingSafeEqual } from "node:crypto";
import { findShop } from "@/lib/model";
import { getFile } from "@/lib/storage";

// The product file, only with the secret token from the parent's download link.
export async function GET(_: Request, { params }: { params: Promise<{ slug: string; token: string }> }) {
  const { slug, token } = await params;
  const found = await findShop(slug);
  const p = found?.kid.shop.product;
  const ok =
    found?.kid.shop.status === "published" &&
    p?.fileKey &&
    token.length === p.downloadToken.length &&
    timingSafeEqual(Buffer.from(token), Buffer.from(p.downloadToken));
  const file = ok && p?.fileKey ? await getFile(p.fileKey) : null;
  if (!file) return new Response("This download link isn't active.", { status: 404 });
  return new Response(file.data, {
    headers: {
      "Content-Type": file.meta.contentType,
      "Content-Disposition": `attachment; filename="${encodeURIComponent(file.meta.name)}"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
