'use client';

import { useEffect, useState } from 'react';

export default function AnimatedProjectPreview({ src, poster, alt, className = '' }) {
  const [motionAllowed, setMotionAllowed] = useState(false);
  const showPoster = !motionAllowed;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setMotionAllowed(!preference.matches);

    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  return (
    <div className={`relative aspect-[8/5] w-full overflow-hidden bg-slate-950 ${className}`}>
      <img
        src={showPoster ? poster : src}
        alt={alt}
        width={1200}
        height={750}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
