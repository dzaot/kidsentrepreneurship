import Anthropic from "@anthropic-ai/sdk";
import { currentFamily } from "@/lib/auth";
import { appendTranscript, cleanHistory, coachConfigured, DAILY_LIMIT, streamCoach } from "@/lib/coach";
import { saveFamily } from "@/lib/model";
import { findPersonalInfo } from "@/lib/safety";

const say = (text: string, status = 200) =>
  new Response(text, { status, headers: { "Content-Type": "text/plain; charset=utf-8" } });

// Streams Roo's answer as plain text. Every check runs before anything reaches the model.
export async function POST(req: Request, { params }: { params: Promise<{ kidId: string }> }) {
  const { kidId } = await params;
  const family = await currentFamily();
  const kid = family?.kids.find((k) => k.id === kidId);
  if (!family || !kid) return say("Not allowed", 401);
  if (!coachConfigured()) return say("Roo is still getting ready. Try again soon! 🦘", 503);
  if (!kid.ai?.enabled) return say("Roo is resting. Ask your grown-up to turn Roo on in the parent zone. 🦘", 403);

  const body = await req.json().catch(() => null);
  const turns = cleanHistory(body?.messages);
  const last = turns[turns.length - 1];
  if (!last || last.role !== "user") return say("Type a message for Roo first.", 400);
  const pii = findPersonalInfo(last.text);
  if (pii) return say(`Psst! That looks like ${pii}. Let's keep personal info secret, even from me. Try asking again without it. 🦘`, 422);

  const today = new Date().toISOString().slice(0, 10);
  const used = kid.ai.day === today ? kid.ai.count : 0;
  if (used >= DAILY_LIMIT) return say("We've done lots of thinking today! Let's hop back tomorrow. 🦘", 429);
  kid.ai = { enabled: true, day: today, count: used + 1 };
  await saveFamily(family);

  const lessonId = typeof body?.lessonId === "string" ? body.lessonId : undefined;
  const stream = streamCoach(kid, turns, lessonId);
  const encoder = new TextEncoder();

  return new Response(
    new ReadableStream({
      async start(controller) {
        let answer = "";
        try {
          for await (const event of stream) {
            if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
              answer += event.delta.text;
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          const final = await stream.finalMessage();
          if (final.stop_reason === "refusal" || !answer.trim()) {
            const nudge = "Hmm, let's try a different question! Ask me about your business, your product, or your shop. 🦘";
            answer += (answer ? "\n\n" : "") + nudge;
            controller.enqueue(encoder.encode((answer === nudge ? "" : "\n\n") + nudge));
          }
        } catch (error) {
          const msg =
            error instanceof Anthropic.RateLimitError
              ? "Lots of kangaroos are hopping around right now. Try again in a minute!"
              : "Oops, Roo tripped over her tail. Please try again!";
          console.error("coach error", error instanceof Anthropic.APIError ? error.status : error);
          controller.enqueue(encoder.encode(msg));
          answer = "";
        } finally {
          controller.close();
          if (answer) await appendTranscript(family.id, kid.id, [last, { role: "assistant", text: answer }]).catch(() => {});
        }
      },
    }),
    { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } },
  );
}
