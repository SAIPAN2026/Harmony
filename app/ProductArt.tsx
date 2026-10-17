// ภาพวาดสินค้าแบบเวกเตอร์ (ไม่ใช้รูปจากเว็บอื่น) — สีมาจาก globals.css

export type ArtKind =
  | "lipstick"
  | "tint"
  | "cushion"
  | "palette"
  | "blush"
  | "mascara"
  | "serum"
  | "cream";

export function ProductArt({ kind, className = "h-24 w-24" }: { kind: ArtKind; className?: string }) {
  const svg = { className, viewBox: "0 0 100 100", "aria-hidden": true };
  switch (kind) {
    case "lipstick":
      return (
        <svg {...svg}>
          <rect x="36" y="58" width="28" height="32" rx="4" className="fill-ink" />
          <rect x="38" y="46" width="24" height="14" rx="2" className="fill-petal" />
          <path d="M41 46V24c0-4 18-12 18-6v28Z" className="fill-rose" />
          <rect x="36" y="58" width="28" height="4" className="fill-rose-dark" />
        </svg>
      );
    case "tint":
      return (
        <svg {...svg}>
          <rect x="38" y="10" width="24" height="26" rx="5" className="fill-ink" />
          <rect x="34" y="36" width="32" height="54" rx="10" className="fill-rose" />
          <rect x="40" y="44" width="8" height="36" rx="4" className="fill-white opacity-40" />
        </svg>
      );
    case "cushion":
      return (
        <svg {...svg}>
          <ellipse cx="50" cy="66" rx="36" ry="14" className="fill-rose-dark" />
          <rect x="14" y="52" width="72" height="14" className="fill-rose-dark" />
          <ellipse cx="50" cy="52" rx="36" ry="14" className="fill-rose" />
          <ellipse cx="50" cy="52" rx="26" ry="9" className="fill-blush" />
          <ellipse cx="44" cy="50" rx="8" ry="3" className="fill-white opacity-70" />
        </svg>
      );
    case "palette":
      return (
        <svg {...svg}>
          <rect x="12" y="24" width="76" height="54" rx="10" className="fill-ink" />
          <circle cx="32" cy="42" r="9" className="fill-petal" />
          <circle cx="50" cy="42" r="9" className="fill-rose" />
          <circle cx="68" cy="42" r="9" className="fill-rose-dark" />
          <circle cx="32" cy="62" r="9" className="fill-blush" />
          <circle cx="50" cy="62" r="9" className="fill-nude" />
          <circle cx="68" cy="62" r="9" className="fill-bronze" />
        </svg>
      );
    case "blush":
      return (
        <svg {...svg}>
          <circle cx="44" cy="58" r="28" className="fill-ink" />
          <circle cx="44" cy="58" r="21" className="fill-rose" />
          <path d="M34 52c6-6 14-6 20 0" className="stroke-white opacity-60" strokeWidth="3" fill="none" strokeLinecap="round" />
          <rect x="70" y="14" width="9" height="40" rx="4" transform="rotate(25 74 34)" className="fill-wood" />
          <ellipse cx="66" cy="16" rx="10" ry="12" transform="rotate(25 66 16)" className="fill-petal" />
        </svg>
      );
    case "mascara":
      return (
        <svg {...svg}>
          <rect x="22" y="40" width="44" height="20" rx="8" className="fill-ink" />
          <rect x="60" y="44" width="10" height="12" className="fill-rose" />
          <rect x="70" y="48" width="12" height="4" className="fill-ink-soft" />
          <rect x="80" y="44" width="10" height="12" rx="3" className="fill-ink" />
          <rect x="28" y="44" width="16" height="4" rx="2" className="fill-white opacity-30" />
        </svg>
      );
    case "serum":
      return (
        <svg {...svg}>
          <ellipse cx="50" cy="14" rx="8" ry="7" className="fill-ink" />
          <rect x="43" y="18" width="14" height="14" className="fill-ink" />
          <rect x="30" y="32" width="40" height="58" rx="10" className="fill-petal" />
          <rect x="30" y="56" width="40" height="34" rx="10" className="fill-rose" />
          <rect x="36" y="38" width="6" height="40" rx="3" className="fill-white opacity-50" />
        </svg>
      );
    case "cream":
      return (
        <svg {...svg}>
          <rect x="18" y="32" width="64" height="16" rx="6" className="fill-rose-dark" />
          <rect x="20" y="46" width="60" height="38" rx="10" className="fill-blush" />
          <rect x="34" y="58" width="32" height="12" rx="6" className="fill-rose" />
          <path d="M44 32c0-8 12-8 12 0" className="fill-white" />
        </svg>
      );
  }
}
