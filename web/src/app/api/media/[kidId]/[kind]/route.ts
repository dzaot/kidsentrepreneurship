import { currentFamily } from "@/lib/auth";
import { getFile } from "@/lib/storage";

// Private preview of a kid's cover or product file, for the family only.
export async function GET(_: Request, { params }: { params: Promise<{ kidId: string; kind: string }> }) {
  const { kidId, kind } = await params;
  const family = await currentFamily();
  const kid = family?.kids.find((k) => k.id === kidId);
  const key = kind === "cover" ? kid?.shop.product.coverImageKey : kind === "file" ? kid?.shop.product.fileKey : undefined;
  const file = key ? await getFile(key) : null;
  if (!file) return new Response("Not found", { status: 404 });
  return new Response(file.data, {
    headers: {
      "Content-Type": file.meta.contentType,
      "Content-Disposition": `${kind === "file" ? "attachment" : "inline"}; filename="${encodeURIComponent(file.meta.name)}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
