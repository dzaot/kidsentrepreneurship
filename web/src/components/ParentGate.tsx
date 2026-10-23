"use client";

import { useEffect, useState } from "react";
import { exitKidMode } from "@/app/actions";
import { Mascot } from "./Mascot";

// A light "grown-ups only" check, the usual pattern in kids apps on shared devices.
export function ParentGate({ backHref }: { backHref: string }) {
  // Picked after mount so the server and client render the same first frame.
  const [[a, b], setPair] = useState([7, 8]);
  useEffect(() => setPair([6 + Math.floor(Math.random() * 4), 7 + Math.floor(Math.random() * 3)]), []);
  const [value, setValue] = useState("");
  const [wrong, setWrong] = useState(false);
  return (
    <main className="mx-auto flex min-h-dvh max-w-sm flex-col items-center justify-center px-4 text-center">
      <Mascot size={90} />
      <h1 className="mt-4 text-3xl font-bold">Grown-ups only</h1>
      <p className="mt-2 text-ink-soft">To open the parent zone, answer this:</p>
      <form
        className="mt-6 w-full space-y-3"
        action={async () => {
          if (Number(value) === a * b) await exitKidMode();
          else setWrong(true);
        }}
      >
        <label className="font-display text-4xl font-bold" htmlFor="gate">
          {a} × {b} = ?
        </label>
        <input
          id="gate"
          inputMode="numeric"
          className="input text-center text-2xl"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setWrong(false);
          }}
          autoFocus
        />
        {wrong && <p className="font-bold text-coral-dark">Not quite. Try again.</p>}
        <button className="btn btn-honey w-full">Open parent zone</button>
        <a href={backHref} className="btn btn-ghost w-full">Back to lessons</a>
      </form>
    </main>
  );
}
