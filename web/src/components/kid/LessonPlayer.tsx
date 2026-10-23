"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { completeLesson } from "@/app/actions";
import type { Shop } from "@/lib/model";
import { findPersonalInfo } from "@/lib/safety";
import type { Lesson, Step } from "@/content/types";
import { Mascot } from "../Mascot";
import { WatchAndLearn } from "../Videos";
import { BUILDERS, builderDone } from "./Builders";
import { Confetti } from "./Confetti";
import { GurooChat } from "./GurooChat";

// Explanations often open with "Yes!" or "Exactly right"; the headline already says that,
// and it reads wrong after a miss, so drop the opener.
function tidyExplain(text: string) {
  const t = text.replace(/^(yes|yep|exactly|correct|right|you got it|nailed it|that's right)( right)?[!.,]*\s*/i, "");
  return t ? t[0].toUpperCase() + t.slice(1) : text;
}

function localDay() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// A tiny "haptic" tap on phones that support it. Silently does nothing elsewhere.
function buzz(pattern: number | number[]) {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    navigator.vibrate?.(pattern);
  } catch {}
}

const KIND_LABEL: Record<Step["kind"], { text: string; cls: string } | null> = {
  learn: null,
  quiz: { text: "❓ Quick quiz", cls: "text-sky-ink" },
  mission: { text: "🎯 Real-world mission", cls: "text-coral-dark" },
  build: { text: "🛠 Build your shop", cls: "text-sky-ink" },
  reflect: { text: "📓 My private journal", cls: "text-leaf-dark" },
  "ask-guroo": { text: "🦘 Ask Guroo", cls: "text-sun-ink" },
};

const CHEERS = ["Small hops, big leaps.", "Hop-tastic!", "Boss move!", "You did the work!", "Big brain!"];

function CountUp({ to }: { to: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setN(to);
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / 700);
      setN(Math.round(to * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{n}</>;
}

export function LessonPlayer({
  kidId,
  lesson,
  shop,
  color,
  aiOn,
  backHref,
  nextHref,
}: {
  kidId: string;
  lesson: Lesson;
  shop: Shop;
  color: string;
  aiOn: boolean;
  backHref: string;
  nextHref?: string;
}) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [checks, setChecks] = useState<Record<number, boolean>>({});
  const [notes, setNotes] = useState<Record<number, string>>({});
  const [builtHere, setBuiltHere] = useState(false);
  const [result, setResult] = useState<{ xp: number; streak: number } | null>(null);
  const [error, setError] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [pending, start] = useTransition();
  const continueRef = useRef<HTMLButtonElement>(null);

  const step: Step | undefined = lesson.steps[i];
  const total = lesson.steps.length;
  const last = i === total - 1;

  const next = useCallback(() => {
    if (!last) {
      setI((x) => x + 1);
      setPicked(null);
      setChecks({});
      setBuiltHere(false);
      window.scrollTo({ top: 0 });
      return;
    }
    const journal = Object.values(notes).filter(Boolean).join("\n\n") || null;
    setError(false);
    start(async () => {
      try {
        setResult(await completeLesson(kidId, lesson.id, localDay(), journal));
        buzz([20, 60, 20, 60, 40]);
      } catch {
        setError(true);
      }
    });
  }, [last, notes, kidId, lesson.id]);

  const pick = useCallback(
    (k: number) => {
      if (picked !== null || step?.kind !== "quiz") return;
      setPicked(k);
      buzz(k === step.answer ? 18 : [40, 60, 40]);
      // Move focus to the Continue button so keyboard and switch users can go on right away.
      setTimeout(() => continueRef.current?.focus(), 50);
    },
    [picked, step],
  );

  // Keyboard: 1 to 4 pick a quiz answer.
  useEffect(() => {
    if (step?.kind !== "quiz") return;
    const onKey = (e: KeyboardEvent) => {
      const n = Number(e.key);
      if (n >= 1 && n <= step.options.length) pick(n - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, pick]);

  if (result) {
    const cheer = CHEERS[lesson.id.length % CHEERS.length];
    return (
      <div className="flex flex-1 flex-col items-center pb-10 pt-6 text-center">
        <Confetti />
        <Mascot size={120} mood="wow" className="animate-pop" />
        <p className="mt-4 font-display text-lg font-bold text-sun-ink">{cheer}</p>
        <h1 className="text-4xl font-bold sm:text-5xl">Lesson complete!</h1>
        <p className="mt-1 font-bold text-ink-soft">
          {lesson.emoji} {lesson.title}
        </p>
        <div className="mt-6 grid w-full max-w-md grid-cols-3 gap-2 sm:gap-3" role="list">
          <div className="card animate-pop px-2 py-4" role="listitem">
            <p className="text-xs font-extrabold uppercase tracking-wide text-ink-soft">XP</p>
            <p className="font-display text-3xl font-bold text-sun-ink">
              +<CountUp to={lesson.xp} />
            </p>
          </div>
          <div className="card animate-pop px-2 py-4 [animation-delay:120ms]" role="listitem">
            <p className="text-xs font-extrabold uppercase tracking-wide text-ink-soft">Streak</p>
            <p className="font-display text-3xl font-bold text-coral-dark">
              <span className="animate-flame" aria-hidden>
                🔥
              </span>{" "}
              {result.streak}
            </p>
          </div>
          <div className="card animate-pop px-2 py-4 [animation-delay:240ms]" role="listitem">
            <p className="text-xs font-extrabold uppercase tracking-wide text-ink-soft">Today</p>
            <p className="font-display text-3xl font-bold text-leaf-dark">✓</p>
            <p className="sr-only">Daily goal done</p>
          </div>
        </div>
        <p className="mt-4 max-w-md rounded-2xl bg-white/70 px-4 py-3 font-semibold">
          🦘 Daily goal done! Come back tomorrow to keep your streak hopping.
        </p>

        <div className="mt-6 flex w-full max-w-md flex-col gap-3">
          {nextHref ? (
            <>
              <Link href={backHref} className="btn btn-leaf w-full text-lg">
                Continue
              </Link>
              <Link href={nextHref} className="btn btn-ghost w-full">
                One more lesson ▶
              </Link>
            </>
          ) : (
            <Link href={backHref} className="btn btn-leaf w-full text-lg">
              Continue
            </Link>
          )}
        </div>

        {lesson.videos?.length ? (
          <div className="mt-10 w-full max-w-xl">
            <WatchAndLearn videos={lesson.videos} forKids />
          </div>
        ) : null}
      </div>
    );
  }

  if (!step) return null;

  let canContinue = true;
  let body: React.ReactNode = null;
  let feedback: React.ReactNode = null;
  let feedbackTone: "good" | "try" | null = null;

  switch (step.kind) {
    case "learn":
      body = (
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          {step.emoji ? (
            <span className="animate-pop text-7xl sm:text-8xl" aria-hidden>
              {step.emoji}
            </span>
          ) : (
            <Mascot size={110} className="animate-pop" />
          )}
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">{step.title}</h2>
          <p className="mt-4 max-w-xl whitespace-pre-line text-xl leading-relaxed sm:text-2xl sm:leading-relaxed">{step.body}</p>
        </div>
      );
      break;
    case "quiz": {
      canContinue = picked !== null;
      const right = picked === step.answer;
      if (picked !== null) {
        feedbackTone = right ? "good" : "try";
        feedback = (
          <>
            <p className="font-display text-xl font-bold">{right ? "🎉 Yes!" : "💡 Almost!"}</p>
            <p className="mt-1 font-semibold">{tidyExplain(step.explain)}</p>
          </>
        );
      }
      body = (
        <div>
          <div className="flex items-start gap-3">
            <Mascot size={56} className="shrink-0" />
            <h2 id={`q-${i}`} className="text-2xl font-bold sm:text-3xl">
              {step.question}
            </h2>
          </div>
          <div className="mt-6 space-y-3" role="group" aria-labelledby={`q-${i}`}>
            {step.options.map((o, k) => {
              const isAnswer = k === step.answer;
              const isPicked = k === picked;
              const state =
                picked === null
                  ? "hover:border-sky-dark hover:bg-sky/5"
                  : isAnswer
                    ? `border-leaf-dark bg-leaf/15 ${isPicked ? "animate-pop" : ""}`
                    : isPicked
                      ? "animate-shake border-coral-dark bg-coral/10"
                      : "opacity-50";
              return (
                <button
                  key={o}
                  type="button"
                  data-quiz-option
                  aria-pressed={isPicked}
                  disabled={picked !== null}
                  onClick={() => pick(k)}
                  className={`card flex min-h-14 w-full items-center gap-3 px-4 py-3 text-left text-lg font-bold transition disabled:cursor-default ${state}`}
                >
                  <span
                    aria-hidden
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border-2 text-base ${
                      picked !== null && isAnswer
                        ? "border-leaf-dark bg-leaf-dark text-white"
                        : picked !== null && isPicked
                          ? "border-coral-dark bg-coral-dark text-white"
                          : "border-line text-ink-soft"
                    }`}
                  >
                    {picked !== null && isAnswer ? "✓" : picked !== null && isPicked ? "✕" : k + 1}
                  </span>
                  <span className="flex-1">{o}</span>
                </button>
              );
            })}
          </div>
          {picked === null && <p className="mt-4 hidden text-sm text-ink-soft sm:block">Tip: press 1 to {step.options.length} on your keyboard.</p>}
        </div>
      );
      break;
    }
    case "mission": {
      const doneCount = step.checklist.filter((_, k) => checks[k]).length;
      const all = doneCount === step.checklist.length;
      body = (
        <div>
          <h2 className="mt-1 text-3xl font-bold">{step.title}</h2>
          <p className="mt-3 text-lg">{step.body}</p>
          <div className="mt-5 space-y-3">
            {step.checklist.map((c, k) => (
              <label
                key={c}
                className={`card flex min-h-14 cursor-pointer items-center gap-3 px-4 py-3 text-lg transition ${checks[k] ? "border-leaf-dark bg-leaf/10" : "hover:border-sky-dark"}`}
              >
                <input
                  type="checkbox"
                  className="h-7 w-7 shrink-0 accent-[#1f7a67]"
                  checked={!!checks[k]}
                  onChange={(e) => {
                    setChecks({ ...checks, [k]: e.target.checked });
                    if (e.target.checked) buzz(12);
                  }}
                />
                <span className={`font-semibold ${checks[k] ? "line-through decoration-2 opacity-70" : ""}`}>{c}</span>
              </label>
            ))}
          </div>
          <p className="mt-3 text-sm font-bold text-ink-soft" aria-live="polite">
            {all ? "🎉 Mission complete!" : `${doneCount} of ${step.checklist.length} done. Not done yet? That's okay. Keep going and finish the mission later.`}
          </p>
        </div>
      );
      break;
    }
    case "build": {
      const Builder = BUILDERS[step.action];
      canContinue = builtHere || builderDone(step.action, shop);
      body = (
        <div>
          <h2 className="mt-1 text-3xl font-bold">{step.title}</h2>
          <p className="mt-3 text-lg">{step.body}</p>
          <div className="mt-5">
            <Builder kidId={kidId} shop={shop} onDone={() => setBuiltHere(true)} />
          </div>
        </div>
      );
      break;
    }
    case "ask-guroo": {
      // Optional by design: the lesson never blocks on the AI.
      body = (
        <div>
          <h2 className="mt-1 text-3xl font-bold">{step.title}</h2>
          <p className="mt-3 text-lg">{step.body}</p>
          <div className="mt-5">
            {aiOn ? (
              <GurooChat key={i} kidId={kidId} lessonId={lesson.id} starter={step.starter} compact />
            ) : (
              <div className="card flex items-center gap-3 p-4">
                <Mascot size={52} className="shrink-0" />
                <p className="font-semibold">
                  Guroo is resting right now. Try your own ideas first, you&apos;re the boss! Your grown-up can turn her on in the parent zone.
                </p>
              </div>
            )}
          </div>
          <p className="mt-3 text-sm text-ink-soft">This step is optional. You can continue anytime.</p>
        </div>
      );
      break;
    }
    case "reflect": {
      const warn = notes[i] ? findPersonalInfo(notes[i]) : null;
      canContinue = Boolean(notes[i]?.trim());
      body = (
        <div>
          <label htmlFor={`note-${i}`} className="mt-1 block font-display text-2xl font-bold sm:text-3xl">
            {step.prompt}
          </label>
          <textarea
            id={`note-${i}`}
            className="input mt-5 min-h-36 text-lg"
            value={notes[i] ?? ""}
            maxLength={300}
            placeholder={step.placeholder ?? "Write your answer…"}
            onChange={(e) => setNotes({ ...notes, [i]: e.target.value })}
          />
          <div className="mt-2 flex justify-between gap-3 text-sm text-ink-soft">
            <p>🔒 Only you and your grown-up can see this.</p>
            <p aria-hidden>{(notes[i] ?? "").length}/300</p>
          </div>
          {warn && (
            <p className="mt-2 text-sm font-bold text-coral-dark" role="alert">
              Psst, that looks like {warn}. Keep personal info out, even here.
            </p>
          )}
        </div>
      );
      break;
    }
  }

  const label = KIND_LABEL[step.kind];
  const pct = ((i + (canContinue ? 1 : 0.5)) / total) * 100;

  return (
    <div className="flex flex-1 flex-col">
      <div className="sticky top-0 z-10 -mx-4 flex items-center gap-3 bg-cream/95 px-4 py-3 backdrop-blur">
        <button
          type="button"
          onClick={() => (i === 0 ? (window.location.href = backHref) : setLeaving(true))}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-2xl text-ink-soft hover:bg-white"
          aria-label="Close lesson"
        >
          ✕
        </button>
        <div
          className="h-5 flex-1 overflow-hidden rounded-full bg-white ring-2 ring-line"
          role="progressbar"
          aria-label="Lesson progress"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={i + 1}
          aria-valuetext={`Step ${i + 1} of ${total}`}
        >
          <div className="progress-shine h-full rounded-full" style={{ width: `${Math.max(pct, 8)}%`, background: color }} />
        </div>
        <span className="w-10 shrink-0 text-right text-sm font-extrabold text-ink-soft">
          {i + 1}/{total}
        </span>
      </div>

      <div className="flex flex-1 flex-col py-6 sm:py-10" key={i}>
        <div className="animate-slide-up flex flex-1 flex-col">
          {label && <p className={`text-sm font-extrabold uppercase tracking-wide ${label.cls}`}>{label.text}</p>}
          {body}
        </div>
      </div>

      <div
        className={`sticky bottom-0 -mx-4 border-t-2 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 transition-colors ${
          feedbackTone === "good"
            ? "border-leaf/40 bg-[#dff3ec] text-leaf-dark"
            : feedbackTone === "try"
              ? "border-sun/50 bg-[#ffe6cc] text-ink"
              : "border-line bg-cream/95 backdrop-blur"
        }`}
      >
        <div aria-live="polite" className={feedback ? "animate-slide-up mb-3 max-h-[35vh] overflow-y-auto" : "sr-only"}>
          {feedback}
        </div>
        {error && (
          <p className="mb-3 rounded-xl bg-coral/10 px-3 py-2 text-sm font-bold text-coral-dark" role="alert">
            Hmm, we couldn&apos;t save. Check the internet and tap again.
          </p>
        )}
        <button
          ref={continueRef}
          type="button"
          className={`btn w-full text-lg ${feedbackTone === "try" ? "btn-sun" : "btn-leaf"}`}
          disabled={!canContinue || pending}
          onClick={next}
        >
          {pending ? "Saving…" : last ? "Finish lesson" : "Continue"}
        </button>
        {!canContinue && step.kind === "quiz" && <p className="mt-2 text-center text-sm font-bold text-ink-soft">Pick an answer to continue</p>}
        {!canContinue && step.kind === "reflect" && <p className="mt-2 text-center text-sm font-bold text-ink-soft">Write a few words to continue</p>}
        {!canContinue && step.kind === "build" && <p className="mt-2 text-center text-sm font-bold text-ink-soft">Save this step to continue</p>}
      </div>

      {leaving && (
        <div
          className="fixed inset-0 z-50 grid place-items-end bg-ink/40 p-4 sm:place-items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="leave-title"
          onKeyDown={(e) => e.key === "Escape" && setLeaving(false)}
          onClick={(e) => e.target === e.currentTarget && setLeaving(false)}
        >
          <div className="card animate-slide-up w-full max-w-sm p-6 text-center">
            <Mascot size={72} mood="wow" className="mx-auto" />
            <h2 id="leave-title" className="mt-3 text-2xl font-bold">
              Leave this lesson?
            </h2>
            <p className="mt-1 text-ink-soft">You&apos;re doing great! If you leave now, this lesson starts over next time.</p>
            <div className="mt-5 grid gap-2">
              <button type="button" className="btn btn-leaf w-full" onClick={() => setLeaving(false)} autoFocus>
                Keep going
              </button>
              <Link href={backHref} className="btn btn-ghost w-full">
                Leave lesson
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
