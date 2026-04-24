"use client";

type Props = {
  className?: string;
  darkness?: number;
};

// Lambdin calla lily painting backdrop. Uses a plain <img> so stacking
// behaves identically across browsers (no next/image quirks).
export default function FloralBackground({
  className = "",
  darkness = 0.3,
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <img
        src="/calla-lily.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "saturate(1.05) brightness(0.95)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,${darkness * 0.55}) 0%, rgba(0,0,0,${darkness}) 50%, rgba(0,0,0,${Math.min(
            darkness + 0.3,
            0.85
          )}) 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_85%,rgba(0,0,0,0.9)_100%)]" />
    </div>
  );
}
