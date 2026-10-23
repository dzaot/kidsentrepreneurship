"use client";

import { useState } from "react";
import type { VideoResource } from "@/content/types";

// Privacy-first YouTube embed: nothing loads from YouTube until someone taps play,
// and the player is the privacy-enhanced (no cookies) one. Never autoplays.
export function VideoCard({ video, compact = false }: { video: VideoResource; compact?: boolean }) {
  const [on, setOn] = useState(false);
  const [thumb, setThumb] = useState(true);
  const id = encodeURIComponent(video.youtubeId);
  return (
    <figure className="overflow-hidden rounded-2xl border-2 border-line bg-white text-left">
      <div className="relative aspect-video w-full bg-ink">
        {on ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
            title={video.title}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setOn(true)}
            className="group absolute inset-0 grid h-full w-full place-items-center"
            aria-label={`Play video: ${video.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {thumb && <img
              onError={() => setThumb(false)}
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
            />}
            {!thumb && <span className="absolute left-4 top-3 text-sm font-bold text-white/80" aria-hidden>▶ YouTube</span>}
            <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white text-ink shadow-[0_4px_0_rgba(0,0,0,0.25)] transition group-hover:scale-110 group-active:scale-95">
              <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" fill="currentColor" />
              </svg>
            </span>
            {video.minutes ? (
              <span className="absolute bottom-2 right-2 rounded-lg bg-ink/85 px-2 py-0.5 text-xs font-bold text-white">
                {video.minutes} min
              </span>
            ) : null}
          </button>
        )}
      </div>
      <figcaption className={compact ? "p-3" : "p-4"}>
        <p className="font-bold leading-snug">{video.title}</p>
        <p className="text-xs font-bold text-ink-soft">{video.channel}</p>
        <p className="mt-1 text-sm">{video.why}</p>
      </figcaption>
    </figure>
  );
}

// The optional "Watch and learn" block. `forKids` adds the ask-a-grown-up line.
export function WatchAndLearn({ videos, forKids = false, compact = false }: { videos?: VideoResource[]; forKids?: boolean; compact?: boolean }) {
  if (!videos?.length) return null;
  return (
    <section aria-labelledby="watch-and-learn" className="w-full text-left">
      <h2 id="watch-and-learn" className="flex items-center gap-2 font-display text-xl font-bold">
        <span aria-hidden>🎬</span> Watch and learn <span className="text-sm font-bold text-ink-soft">(optional)</span>
      </h2>
      {forKids && <p className="mt-1 text-sm font-bold text-ink-soft">Watching on YouTube? Ask your grown-up first.</p>}
      <div className={`mt-3 grid gap-3 ${videos.length > 1 && !compact ? "sm:grid-cols-2" : ""}`}>
        {videos.map((v) => (
          <VideoCard key={v.youtubeId} video={v} compact={compact} />
        ))}
      </div>
    </section>
  );
}
