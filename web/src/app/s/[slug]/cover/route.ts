import { findShop } from "@/lib/model";
import { getFile } from "@/lib/storage";

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const found = await findShop((await params).slug);
  const key = found?.kid.shop.status === "published" ? found.kid.shop.product.coverImageKey : undefined;
  const file = key ? await getFile(key) : null;
  if (!file) return new Response("Not found", { status: 404 });
  return new Response(file.data, {
    headers: { "Content-Type": file.meta.contentType, "Cache-Control": "public, max-age=300" },
  });
}
