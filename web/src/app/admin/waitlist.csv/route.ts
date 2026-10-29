import { isAdmin } from "@/lib/auth";
import { pilotMetrics, waitlistCsv } from "@/lib/metrics";

export async function GET() {
  if (!(await isAdmin())) return new Response("Not found", { status: 404 });
  const { waitlist } = await pilotMetrics();
  return new Response(waitlistCsv(waitlist), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="venturoo-waitlist-${new Date().toISOString().slice(0, 10)}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
