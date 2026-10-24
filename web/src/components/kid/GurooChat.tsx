"use client";

import { useEffect, useRef, useState } from "react";
import { findPersonalInfo } from "@/lib/safety";
import { Guroo3D } from "../Guroo3D";

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
    <div className={`flex flex-col ${compact ? "card max-h-[28rem]" : "card-soft min-h-[60vh]"}`}>
      <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite" aria-label="Chat with Guroo">
        {turns.length === 0 && (
          <div className="flex items-start gap-3">
            <Guroo3D pose="avatar" size={52} decorative className="shrink-0 shadow-soft ring-2 ring-white" />
            <p className="rounded-3xl rounded-tl-md bg-cream px-4 py-3 font-semibold">
              G&apos;day! I&apos;m Guroo, your business helper. 🦘 Ask me for ideas, names, words, or help with any step.
              You&apos;re the boss, I just help you think!
            </p>
          </div>
        )}
        {turns.map((t, i) =>
          t.role === "user" ? (
            <p key={i} className="ml-auto max-w-[85%] whitespace-pre-line rounded-3xl rounded-tr-md bg-sky-100 px-4 py-3 font-semibold ring-2 ring-sky/40">
              {t.text}
            </p>
          ) : (
            <div key={i} className="flex items-start gap-3">
              <Guroo3D pose="avatar" size={40} decorative className="shrink-0 shadow-soft ring-2 ring-white" />
              <p className="max-w-[85%] whitespace-pre-line rounded-3xl rounded-tl-md bg-cream px-4 py-3">
                {t.text || (
                  <span className="inline-flex items-center gap-1 text-ink-soft" role="status">
                    <span className="sr-only">Guroo is thinking…</span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-ink-soft [animation-delay:-0.3s]" aria-hidden />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-ink-soft [animation-delay:-0.15s]" aria-hidden />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-ink-soft" aria-hidden />
                  </span>
                )}
              </p>
            </div>
          ),
        )}
        <div ref={end} />
      </div>
      {turns.length === 0 && !starter && (
        <div className="flex flex-wrap gap-2 px-4 pb-2">
          {IDEAS.map((idea) => (
            <button key={idea} type="button" onClick={() => send(idea)} className="squish min-h-12 rounded-full border-2 border-line bg-white px-4 py-2 text-left text-sm font-bold shadow-[0_3px_0_var(--color-line)] hover:border-sky-dark">
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
        {warn && <p className="mb-2 text-sm font-bold text-coral-dark" role="alert">That looks like {warn}. Keep personal info secret, even from Guroo!</p>}
        <div className="flex gap-2">
          <textarea
            aria-label="Message to Guroo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
            rows={input.length > 60 ? 3 : 2}
            maxLength={600}
            placeholder="Ask Guroo anything about your business…"
            className="input resize-none !rounded-3xl"
          />
          <button className="btn btn-sun btn-pill-sm shrink-0 self-end" disabled={busy || !input.trim() || Boolean(warn)}>
            {busy ? "…" : "Send"}
          </button>
        </div>
        <p className="mt-2 text-xs text-ink-soft">Guroo is an AI, not a person. AI can make mistakes, so check her ideas. Your grown-up can see your chats.</p>
      </form>
    </div>
  );
}
