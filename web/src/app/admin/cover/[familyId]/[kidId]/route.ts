import { isAdmin } from "@/lib/auth";
import { getFamily } from "@/lib/model";
import { getFile } from "@/lib/storage";

// Lets the founder see every uploaded cover, including ones not public yet.
export async function GET(_: Request, { params }: { params: Promise<{ familyId: string; kidId: string }> }) {
  if (!(await isAdmin())) return new Response("Not found", { status: 404 });
  const { familyId, kidId } = await params;
  const key = (await getFamily(familyId))?.kids.find((k) => k.id === kidId)?.shop.product.coverImageKey;
  const file = key ? await getFile(key) : null;
  if (!file) return new Response("Not found", { status: 404 });
  return new Response(file.data, { headers: { "Content-Type": file.meta.contentType, "Cache-Control": "private, no-store" } });
}
