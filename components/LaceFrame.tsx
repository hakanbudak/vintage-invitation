"use client";

type Props = {
  className?: string;
};

// A decorative lace-style border rendered as inline SVG. Sits behind
// invitation content to create the translucent embroidered card feel.
export default function LaceFrame({ className = "" }: Props) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 800"
      preserveAspectRatio="none"
      className={`absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <pattern
          id="lace-scallop"
          x="0"
          y="0"
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="15" cy="15" r="6" fill="none" stroke="rgba(243,234,216,0.45)" strokeWidth="0.6" />
          <circle cx="15" cy="15" r="2" fill="rgba(243,234,216,0.3)" />
        </pattern>
        <linearGradient id="lace-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(243,234,216,0.7)" />
          <stop offset="100%" stopColor="rgba(182,154,107,0.5)" />
        </linearGradient>
      </defs>

      {/* Outer thin frame */}
      <rect
        x="6"
        y="6"
        width="588"
        height="788"
        rx="4"
        fill="none"
        stroke="url(#lace-edge)"
        strokeWidth="0.8"
      />

      {/* Inner lace scallop band */}
      <rect
        x="14"
        y="14"
        width="572"
        height="772"
        rx="2"
        fill="url(#lace-scallop)"
        opacity="0.9"
      />

      {/* Inner solid frame */}
      <rect
        x="34"
        y="34"
        width="532"
        height="732"
        fill="none"
        stroke="rgba(243,234,216,0.55)"
        strokeWidth="0.7"
      />

      {/* Corner florets */}
      {[
        [40, 40],
        [560, 40],
        [40, 760],
        [560, 760],
      ].map(([cx, cy], i) => (
        <g key={i} transform={`translate(${cx} ${cy})`}>
          <circle r="7" fill="none" stroke="rgba(243,234,216,0.7)" strokeWidth="0.6" />
          <circle r="3" fill="rgba(182,154,107,0.7)" />
          <g stroke="rgba(243,234,216,0.55)" strokeWidth="0.5" fill="none">
            <path d="M-14,0 Q-8,-6 0,-3" />
            <path d="M14,0 Q8,-6 0,-3" />
            <path d="M0,-14 Q6,-8 3,0" />
            <path d="M0,14 Q6,8 3,0" />
          </g>
        </g>
      ))}

      {/* Top and bottom ornament bands */}
      <g stroke="rgba(243,234,216,0.55)" strokeWidth="0.5" fill="none">
        <path d="M80,50 Q300,30 520,50" />
        <path d="M80,750 Q300,770 520,750" />
      </g>
    </svg>
  );
}
