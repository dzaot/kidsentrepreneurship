"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { completeLesson } from "@/app/actions";
import type { Shop } from "@/lib/model";
import { findPersonalInfo } from "@/lib/safety";
import type { Lesson, Step } from "@/content/types";
import { Mascot } from "../Mascot";
import { BUILDERS, builderDone } from "./Builders";
import { Confetti } from "./Confetti";
import { RooChat } from "./RooChat";

function localDay() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function LessonPlayer({ kidId, lesson, shop, color, aiOn }: { kidId: string; lesson: Lesson; shop: Shop; color: string; aiOn: boolean }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [checks, setChecks] = useState<Record<number, boolean>>({});
  const [notes, setNotes] = useState<Record<number, string>>({});
  const [builtHere, setBuiltHere] = useState(false);
  const [result, setResult] = useState<{ xp: number; streak: number } | null>(null);
  const [pending, start] = useTransition();

  const step: Step | undefined = lesson.steps[i];
  const last = i === lesson.steps.length - 1;

  const next = () => {
    if (!last) {
      setI(i + 1);
      setPicked(null);
      setChecks({});
      setBuiltHere(false);
      return;
    }
    const journal = Object.values(notes).filter(Boolean).join("\n\n") || null;
    start(async () => setResult(await completeLesson(kidId, lesson.id, localDay(), journal)));
  };

  if (result)
    return (
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <Confetti />
        <Mascot size={130} className="animate-pop" />
        <h1 className="mt-6 text-4xl font-bold">Lesson complete!</h1>
        <div className="mt-6 flex gap-3">
          <div className="card animate-pop px-6 py-4">
            <p className="text-sm font-bold text-ink-soft">XP</p>
            <p className="font-display text-3xl font-bold text-sun-dark">+{lesson.xp}</p>
          </div>
          <div className="card animate-pop px-6 py-4">
            <p className="text-sm font-bold text-ink-soft">Streak</p>
            <p className="font-display text-3xl font-bold text-coral">🔥 {result.streak}</p>
          </div>
        </div>
        <Link href={`/kid/${kidId}`} className="btn btn-leaf mt-10 w-full max-w-sm text-lg">Continue</Link>
      </div>
    );

  if (!step) return null;

  let canContinue = true;
  let body: React.ReactNode = null;

  switch (step.kind) {
    case "learn":
      body = (
        <div className="flex flex-col items-center text-center">
          {step.emoji ? <span className="text-7xl animate-pop" key={i}>{step.emoji}</span> : <Mascot size={110} className="animate-pop" />}
          <h2 className="mt-5 text-3xl font-bold">{step.title}</h2>
          <p className="mt-4 max-w-lg whitespace-pre-line text-xl leading-relaxed">{step.body}</p>
        </div>
      );
      break;
    case "quiz": {
      canContinue = picked !== null;
      const right = picked === step.answer;
      body = (
        <div>
          <div className="flex items-start gap-3">
            <Mascot size={56} className="shrink-0" />
            <h2 className="text-2xl font-bold">{step.question}</h2>
          </div>
          <div className="mt-6 space-y-3">
            {step.options.map((o, k) => {
              const state = picked === null ? "" : k === step.answer ? "border-leaf bg-leaf/10" : k === picked ? "border-coral bg-coral/10" : "opacity-60";
              return (
                <button key={o} type="button" disabled={picked !== null} onClick={() => setPicked(k)}
                  className={`card w-full px-5 py-4 text-left text-lg font-bold transition ${state} ${picked === null ? "hover:border-sky" : ""}`}>
                  {o}
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <p className={`mt-5 rounded-2xl p-4 text-lg font-bold animate-pop ${right ? "bg-leaf/15 text-leaf-dark" : "bg-sun/25 text-ink"}`}>
              {right ? "🎉 Yes! " : "💡 Almost! "}
              <span className="font-semibold">{step.explain}</span>
            </p>
          )}
        </div>
      );
      break;
    }
    case "mission": {
      const all = step.checklist.every((_, k) => checks[k]);
      canContinue = true;
      body = (
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-coral">🎯 Real-world mission</p>
          <h2 className="mt-1 text-3xl font-bold">{step.title}</h2>
          <p className="mt-3 text-lg">{step.body}</p>
          <div className="mt-5 space-y-3">
            {step.checklist.map((c, k) => (
              <label key={c} className={`card flex cursor-pointer items-center gap-3 px-5 py-4 text-lg ${checks[k] ? "border-leaf bg-leaf/10" : ""}`}>
                <input type="checkbox" className="h-6 w-6 accent-[#2FA58C]" checked={!!checks[k]} onChange={(e) => setChecks({ ...checks, [k]: e.target.checked })} />
                <span className="font-semibold">{c}</span>
              </label>
            ))}
          </div>
          {!all && <p className="mt-3 text-sm text-ink-soft">Not done yet? No problem, you can continue and finish it later today.</p>}
        </div>
      );
      break;
    }
    case "build": {
      const Builder = BUILDERS[step.action];
      canContinue = builtHere || builderDone(step.action, shop);
      body = (
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-sky">🛠 Build your shop</p>
          <h2 className="mt-1 text-3xl font-bold">{step.title}</h2>
          <p className="mt-3 text-lg">{step.body}</p>
          <div className="mt-5">
            <Builder kidId={kidId} shop={shop} onDone={() => setBuiltHere(true)} />
          </div>
        </div>
      );
      break;
    }
    case "ask-roo": {
      // Optional by design: the lesson never blocks on the AI.
      body = (
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-sun-dark">🦘 Ask Roo</p>
          <h2 className="mt-1 text-3xl font-bold">{step.title}</h2>
          <p className="mt-3 text-lg">{step.body}</p>
          <div className="mt-5">
            {aiOn ? (
              <RooChat key={i} kidId={kidId} lessonId={lesson.id} starter={step.starter} compact />
            ) : (
              <p className="card p-4 font-semibold">
                Roo is resting right now. Think of your own ideas, or ask your grown-up to turn Roo on in the parent zone. 🦘
              </p>
            )}
          </div>
        </div>
      );
      break;
    }
    case "reflect": {
      const warn = notes[i] ? findPersonalInfo(notes[i]) : null;
      canContinue = Boolean(notes[i]?.trim());
      body = (
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-leaf-dark">📓 My private journal</p>
          <h2 className="mt-1 text-2xl font-bold">{step.prompt}</h2>
          <textarea className="input mt-5 min-h-36 text-lg" value={notes[i] ?? ""} maxLength={300}
            placeholder={step.placeholder ?? "Write your answer…"} onChange={(e) => setNotes({ ...notes, [i]: e.target.value })} />
          {warn && <p className="mt-2 text-sm font-bold text-coral-dark">Psst, that looks like {warn}. Keep personal info out, even here.</p>}
          <p className="mt-2 text-sm text-ink-soft">Only you and your grown-up can see this.</p>
        </div>
      );
      break;
    }
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center gap-3">
        <Link href={`/kid/${kidId}`} className="text-2xl text-ink-soft" aria-label="Close lesson">✕</Link>
        <div className="h-4 flex-1 overflow-hidden rounded-full bg-white ring-2 ring-line">
          <div className="h-full rounded-full transition-all" style={{ width: `${((i + 1) / lesson.steps.length) * 100}%`, background: color }} />
        </div>
      </div>
      <div className="flex-1 py-8" key={i}>{body}</div>
      <div className="sticky bottom-0 -mx-4 border-t-2 border-line bg-cream/95 px-4 py-4 backdrop-blur">
        <button type="button" className="btn btn-leaf w-full text-lg" disabled={!canContinue || pending} onClick={next}>
          {pending ? "Saving…" : last ? "Finish lesson" : "Continue"}
        </button>
      </div>
    </div>
  );
}
