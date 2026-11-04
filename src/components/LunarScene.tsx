import { useEffect, useState } from "react";

const INK = "#16130F";
const CREAM = "#F4EDE1";
const MUSTARD = "#E3A72F";
const ORANGE = "#D9622B";
const TEAL = "#2E6B73";
const LUNAR = "#16202B";

const STARS: [number, number, number][] = [
  [30, 30, 1.2], [80, 70, 0.8], [120, 24, 1], [170, 92, 0.7], [218, 40, 1.3],
  [262, 108, 0.8], [300, 20, 1], [440, 150, 0.9], [460, 40, 1.1], [24, 140, 0.8],
  [90, 160, 1], [150, 130, 0.6], [330, 120, 0.7], [420, 190, 0.6], [60, 210, 0.7],
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/** Original illustration: a space-age lounge on the lunar surface, Earth rising behind it. */
export function LunarScene() {
  const reduced = useReducedMotion();
  const orbit = "M300 92 a72 20 -14 1 0 144 -36 a72 20 -14 1 0 -144 36";

  return (
    <svg viewBox="0 0 480 360" role="img" aria-labelledby="lunar-title" className="block h-auto w-full">
      <title id="lunar-title">A retro-futurist lounge building on the Moon with Earth rising behind it</title>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={LUNAR} />
          <stop offset="0.6" stopColor="#24384A" />
          <stop offset="0.92" stopColor="#7A4B3A" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={MUSTARD} stopOpacity="0.55" />
          <stop offset="1" stopColor={MUSTARD} stopOpacity="0" />
        </radialGradient>
        <clipPath id="earth">
          <circle cx="372" cy="74" r="30" />
        </clipPath>
      </defs>

      <rect width="480" height="360" fill="url(#sky)" />
      {STARS.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={CREAM} opacity={0.85}>
          {!reduced && (
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur={`${3 + (i % 5)}s`} repeatCount="indefinite" />
          )}
        </circle>
      ))}

      {/* Earth-rise */}
      <g clipPath="url(#earth)">
        <circle cx="372" cy="74" r="30" fill={TEAL} />
        <path d="M352 62 q10 -8 18 0 q6 8 -4 14 q-10 4 -14 -6z M376 84 q8 -6 16 2 q2 8 -8 10 q-10 -2 -8 -12z" fill="#5E9A86" />
        <circle cx="386" cy="66" r="30" fill={LUNAR} opacity="0.55" />
      </g>
      <circle cx="372" cy="74" r="30" fill="none" stroke={CREAM} strokeOpacity="0.5" />

      {/* Orbit + satellite */}
      <path d={orbit} fill="none" stroke={CREAM} strokeOpacity="0.35" strokeDasharray="3 5" />
      <g transform={reduced ? "translate(444 56)" : undefined}>
        <rect x="-5" y="-2" width="10" height="4" fill={MUSTARD} />
        <rect x="-11" y="-1" width="5" height="2" fill={CREAM} />
        <rect x="6" y="-1" width="5" height="2" fill={CREAM} />
        {!reduced && <animateMotion dur="14s" repeatCount="indefinite" path={orbit} />}
      </g>

      {/* Glow behind the lounge */}
      <ellipse cx="220" cy="230" rx="170" ry="70" fill="url(#glow)" />

      {/* Ground */}
      <path d="M0 252 Q110 238 230 248 T480 242 V360 H0 Z" fill="#CFC5B5" stroke={INK} strokeWidth="2" />
      <g stroke="#A99F8F" strokeWidth="1">
        {[-260, -150, -60, 20, 100, 180, 270, 380, 500, 640, 760].map((x) => (
          <line key={x} x1="240" y1="250" x2={x} y2="360" />
        ))}
        {[262, 280, 306, 340].map((y) => (
          <line key={y} x1="0" y1={y} x2="480" y2={y} />
        ))}
      </g>
      <g fill="#B8AE9E" stroke={INK} strokeWidth="1.5">
        <ellipse cx="64" cy="304" rx="30" ry="7" />
        <ellipse cx="420" cy="326" rx="38" ry="9" />
        <ellipse cx="318" cy="276" rx="14" ry="4" />
      </g>

      {/* Annex with arched windows */}
      <rect x="228" y="212" width="124" height="38" fill={CREAM} stroke={INK} strokeWidth="2" />
      {[240, 262, 284, 306, 328].map((x) => (
        <path key={x} d={`M${x} 244 v-14 a7 7 0 0 1 14 0 v14 z`} fill={MUSTARD} stroke={INK} strokeWidth="1.5" />
      ))}
      <rect x="224" y="206" width="132" height="7" fill={ORANGE} stroke={INK} strokeWidth="2" />

      {/* Side pod */}
      <rect x="100" y="222" width="54" height="28" rx="14" fill={CREAM} stroke={INK} strokeWidth="2" />
      <circle cx="116" cy="236" r="5" fill={MUSTARD} stroke={INK} strokeWidth="1.5" />
      <circle cx="138" cy="236" r="5" fill={MUSTARD} stroke={INK} strokeWidth="1.5" />

      {/* Saucer tower */}
      <path d="M190 250 L194 184 H214 L218 250 Z" fill={CREAM} stroke={INK} strokeWidth="2" />
      <path d="M174 168 a30 30 0 0 1 60 0 z" fill={TEAL} stroke={INK} strokeWidth="2" />
      <ellipse cx="204" cy="176" rx="82" ry="15" fill={CREAM} stroke={INK} strokeWidth="2" />
      {[138, 154, 170, 186, 202, 218, 234, 250, 266].map((x) => (
        <rect key={x} x={x} y="172" width="8" height="6" fill={MUSTARD} stroke={INK} strokeWidth="1" />
      ))}
      <line x1="204" y1="138" x2="204" y2="112" stroke={INK} strokeWidth="2" />
      <circle cx="204" cy="110" r="3.5" fill={ORANGE}>
        {!reduced && <animate attributeName="opacity" values="1;0.2;1" dur="1.6s" repeatCount="indefinite" />}
      </circle>

      {/* Sign */}
      <rect x="392" y="196" width="6" height="56" fill={INK} />
      <rect x="350" y="168" width="92" height="30" fill={LUNAR} stroke={MUSTARD} strokeWidth="2" />
      <text x="396" y="188" textAnchor="middle" fontFamily='"Pixelify Sans", monospace' fontSize="13" fill={MUSTARD}>
        DATA LOUNGE
      </text>
    </svg>
  );
}
