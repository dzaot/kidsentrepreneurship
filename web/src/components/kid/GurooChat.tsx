"use client";

import { useEffect, useRef, useState } from "react";
import { findPersonalInfo } from "@/lib/safety";
import { Mascot } from "../Mascot";

type Turn = { role: "user" | "assistant"; text: string };

const IDEAS = [
  "Give me 5 business ideas for a kid who likes drawing",
  "Help me think of a cool shop name",
  "What should I put in my coloring pack?",
  "Help me write a description that sells",
];

export function GurooChat({
  kidId,
  lessonId,
  starter,
  compact = false,
  onReply,
}: {
  kidId: string;
  lessonId?: string;
  starter?: string;
  compact?: boolean;
  onReply?: () => void;
}) {
  const [turns, setTurns] = useState<Turn[]>([]);
  const [input, setInput] = useState(starter ?? "");
  const [busy, setBusy] = useState(false);
  const end = useRef<HTMLDivElement>(null);
  const warn = input ? findPersonalInfo(input) : null;

  useEffect(() => {
    if (turns.length) end.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [turns]);

  async function send(text: string) {
    const msg = text.trim();
    if (!msg || busy || warn) return;
    const history: Turn[] = [...turns, { role: "user", text: msg }];
    setTurns([...history, { role: "assistant", text: "" }]);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch(`/api/coach/${kidId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, lessonId }),
      });
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setTurns([...history, { role: "assistant", text: answer }]);
      }
      if (res.ok) onReply?.();
    } catch {
      setTurns([...history, { role: "assistant", text: "Oops, I couldn't hear you. Check the internet and try again!" }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={`card flex flex-col ${compact ? "max-h-[28rem]" : "min-h-[60vh]"}`}>
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {turns.length === 0 && (
          <div className="flex items-start gap-3">
            <Mascot size={48} className="shrink-0" />
            <p className="rounded-2xl rounded-tl-sm bg-cream px-4 py-3">
              G&apos;day! I&apos;m Guroo, your business helper. 🦘 Ask me for ideas, names, words, or help with any step.
              You&apos;re the boss, I just help you think!
            </p>
          </div>
        )}
        {turns.map((t, i) =>
          t.role === "user" ? (
            <p key={i} className="ml-auto max-w-[85%] whitespace-pre-line rounded-2xl rounded-tr-sm bg-sky/25 px-4 py-3 font-semibold">
              {t.text}
            </p>
          ) : (
            <div key={i} className="flex items-start gap-3">
              <Mascot size={36} className="shrink-0" />
              <p className="max-w-[85%] whitespace-pre-line rounded-2xl rounded-tl-sm bg-cream px-4 py-3">
                {t.text || <span className="animate-pulse text-ink-soft">Guroo is thinking…</span>}
              </p>
            </div>
          ),
        )}
        <div ref={end} />
      </div>
      {turns.length === 0 && !starter && (
        <div className="flex flex-wrap gap-2 px-4 pb-2">
          {IDEAS.map((idea) => (
            <button key={idea} type="button" onClick={() => send(idea)} className="rounded-full border-2 border-line bg-white px-3 py-1.5 text-sm font-bold hover:border-sky">
              {idea}
            </button>
          ))}
        </div>
      )}
      <form
        className="border-t-2 border-line p-3"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        {warn && <p className="mb-2 text-sm font-bold text-coral-dark">That looks like {warn}. Keep personal info secret, even from Guroo!</p>}
        <div className="flex gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
            rows={input.length > 60 ? 3 : 1}
            maxLength={600}
            placeholder="Ask Guroo anything about your business…"
            className="input resize-none"
          />
          <button className="btn btn-sun shrink-0" disabled={busy || !input.trim() || Boolean(warn)}>
            {busy ? "…" : "Send"}
          </button>
        </div>
        <p className="mt-2 text-xs text-ink-soft">Guroo is an AI helper. It can make mistakes, so check its ideas. Your grown-up can see your chats.</p>
      </form>
    </div>
  );
}
