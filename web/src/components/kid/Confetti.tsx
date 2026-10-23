"use client";

import { useEffect, useState } from "react";

const COLORS = ["#FFC531", "#2BB673", "#5B8DEF", "#FF6B5B", "#9B6BFF"];

export function Confetti({ count = 70 }: { count?: number }) {
  const [pieces, setPieces] = useState<{ left: number; delay: number; color: string; rotate: number }[]>([]);
  useEffect(() => {
    setPieces(
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 0.8,
        color: COLORS[i % COLORS.length],
        rotate: Math.random() * 360,
      })),
    );
  }, [count]);
  return (
    <div aria-hidden>
      {pieces.map((p, i) => (
        <span key={i} className="confetti-piece" style={{ left: `${p.left}vw`, background: p.color, animationDelay: `${p.delay}s`, transform: `rotate(${p.rotate}deg)` }} />
      ))}
    </div>
  );
}
