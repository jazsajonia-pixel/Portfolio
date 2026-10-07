'use client';

import { useEffect, useState } from 'react';

export default function AnimatedProjectPreview({ src, poster, title, alt, className = '' }) {
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [paused, setPaused] = useState(false);
  const showPoster = !motionAllowed || paused;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setMotionAllowed(!preference.matches);

    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  const handleToggle = () => {
    if (showPoster) {
      setMotionAllowed(true);
      setPaused(false);
    } else {
      setPaused(true);
    }
  };

  return (
    <div className={`group/preview relative aspect-[8/5] w-full overflow-hidden bg-slate-950 ${className}`}>
      <img
        src={showPoster ? poster : src}
        alt={alt}
        width={1200}
        height={750}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={handleToggle}
        aria-label={`${showPoster ? 'Play' : 'Pause'} ${title} animation`}
        aria-pressed={showPoster}
        className="absolute bottom-3 right-3 inline-flex min-h-9 items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg backdrop-blur transition hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span aria-hidden="true">{showPoster ? '▶' : 'Ⅱ'}</span>
        {showPoster ? 'Play demo' : 'Pause motion'}
      </button>
    </div>
  );
}
