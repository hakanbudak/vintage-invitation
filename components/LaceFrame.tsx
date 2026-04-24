"use client";

// Decorative scalloped-lace frame SVG used around the main invitation card.
// Drawn programmatically so it scales cleanly with the card.
export default function LaceFrame({ className = "" }: { className?: string }) {
  const W = 400;
  const H = 500;
  const scallopR = 9; // scallop radius

  const topCount = Math.floor(W / (scallopR * 2));
  const sideCount = Math.floor(H / (scallopR * 2));

  const topScallops = Array.from({ length: topCount }, (_, i) => (
    <circle
      key={`t-${i}`}
      cx={scallopR + i * scallopR * 2}
      cy={scallopR}
      r={scallopR}
      fill="none"
      stroke="rgba(250,245,224,0.92)"
      strokeWidth="0.9"
    />
  ));
  const bottomScallops = Array.from({ length: topCount }, (_, i) => (
    <circle
      key={`b-${i}`}
      cx={scallopR + i * scallopR * 2}
      cy={H - scallopR}
      r={scallopR}
      fill="none"
      stroke="rgba(250,245,224,0.92)"
      strokeWidth="0.9"
    />
  ));
  const leftScallops = Array.from({ length: sideCount }, (_, i) => (
    <circle
      key={`l-${i}`}
      cx={scallopR}
      cy={scallopR + i * scallopR * 2}
      r={scallopR}
      fill="none"
      stroke="rgba(250,245,224,0.92)"
      strokeWidth="0.9"
    />
  ));
  const rightScallops = Array.from({ length: sideCount }, (_, i) => (
    <circle
      key={`r-${i}`}
      cx={W - scallopR}
      cy={scallopR + i * scallopR * 2}
      r={scallopR}
      fill="none"
      stroke="rgba(250,245,224,0.92)"
      strokeWidth="0.9"
    />
  ));

  // Criss-cross mesh between outer scallops and inner band
  const meshLines: JSX.Element[] = [];
  const step = 12;
  const bandW = scallopR * 3; // how far inward the lace band extends
  // Top band
  for (let x = -H; x < W + H; x += step) {
    meshLines.push(
      <line
        key={`mt1-${x}`}
        x1={x}
        y1={0}
        x2={x + bandW}
        y2={bandW}
        stroke="rgba(250,245,224,0.35)"
        strokeWidth="0.35"
      />
    );
    meshLines.push(
      <line
        key={`mt2-${x}`}
        x1={x}
        y1={bandW}
        x2={x + bandW}
        y2={0}
        stroke="rgba(250,245,224,0.35)"
        strokeWidth="0.35"
      />
    );
  }
  // Bottom band
  for (let x = -H; x < W + H; x += step) {
    meshLines.push(
      <line
        key={`mb1-${x}`}
        x1={x}
        y1={H - bandW}
        x2={x + bandW}
        y2={H}
        stroke="rgba(250,245,224,0.35)"
        strokeWidth="0.35"
      />
    );
    meshLines.push(
      <line
        key={`mb2-${x}`}
        x1={x}
        y1={H}
        x2={x + bandW}
        y2={H - bandW}
        stroke="rgba(250,245,224,0.35)"
        strokeWidth="0.35"
      />
    );
  }
  // Left band
  for (let y = -W; y < H + W; y += step) {
    meshLines.push(
      <line
        key={`ml1-${y}`}
        x1={0}
        y1={y}
        x2={bandW}
        y2={y + bandW}
        stroke="rgba(250,245,224,0.35)"
        strokeWidth="0.35"
      />
    );
    meshLines.push(
      <line
        key={`ml2-${y}`}
        x1={bandW}
        y1={y}
        x2={0}
        y2={y + bandW}
        stroke="rgba(250,245,224,0.35)"
        strokeWidth="0.35"
      />
    );
  }
  // Right band
  for (let y = -W; y < H + W; y += step) {
    meshLines.push(
      <line
        key={`mr1-${y}`}
        x1={W - bandW}
        y1={y}
        x2={W}
        y2={y + bandW}
        stroke="rgba(250,245,224,0.35)"
        strokeWidth="0.35"
      />
    );
    meshLines.push(
      <line
        key={`mr2-${y}`}
        x1={W}
        y1={y}
        x2={W - bandW}
        y2={y + bandW}
        stroke="rgba(250,245,224,0.35)"
        strokeWidth="0.35"
      />
    );
  }

  // Inner rectangle border
  const innerInset = bandW + 2;

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <clipPath id="lace-band-clip">
          <path
            d={`M 0 0 H ${W} V ${H} H 0 Z M ${innerInset} ${innerInset} H ${W - innerInset} V ${H - innerInset} H ${innerInset} Z`}
            fillRule="evenodd"
          />
        </clipPath>
      </defs>

      {/* Mesh clipped to the band region only */}
      <g clipPath="url(#lace-band-clip)">{meshLines}</g>

      {/* Outer scalloped edges */}
      <g>
        {topScallops}
        {bottomScallops}
        {leftScallops}
        {rightScallops}
      </g>

      {/* Inner scalloped edge — smaller, facing outward */}
      {Array.from({ length: Math.floor((W - innerInset * 2) / 10) }, (_, i) => (
        <circle
          key={`it-${i}`}
          cx={innerInset + 5 + i * 10}
          cy={innerInset}
          r="3"
          fill="none"
          stroke="rgba(250,245,224,0.85)"
          strokeWidth="0.6"
        />
      ))}
      {Array.from({ length: Math.floor((W - innerInset * 2) / 10) }, (_, i) => (
        <circle
          key={`ib-${i}`}
          cx={innerInset + 5 + i * 10}
          cy={H - innerInset}
          r="3"
          fill="none"
          stroke="rgba(250,245,224,0.85)"
          strokeWidth="0.6"
        />
      ))}
      {Array.from({ length: Math.floor((H - innerInset * 2) / 10) }, (_, i) => (
        <circle
          key={`il-${i}`}
          cx={innerInset}
          cy={innerInset + 5 + i * 10}
          r="3"
          fill="none"
          stroke="rgba(250,245,224,0.85)"
          strokeWidth="0.6"
        />
      ))}
      {Array.from({ length: Math.floor((H - innerInset * 2) / 10) }, (_, i) => (
        <circle
          key={`ir-${i}`}
          cx={W - innerInset}
          cy={innerInset + 5 + i * 10}
          r="3"
          fill="none"
          stroke="rgba(250,245,224,0.85)"
          strokeWidth="0.6"
        />
      ))}

      {/* Inner frame line */}
      <rect
        x={innerInset}
        y={innerInset}
        width={W - innerInset * 2}
        height={H - innerInset * 2}
        fill="none"
        stroke="rgba(250,245,224,0.55)"
        strokeWidth="0.6"
      />
    </svg>
  );
}

// A small ornamental divider used in section headings.
export function TinyOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 12"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <path d="M2,6 L50,6" />
      <path d="M70,6 L118,6" />
      <circle cx="60" cy="6" r="1.5" fill="currentColor" stroke="none" />
      <path d="M50,6 Q55,2 60,6 Q65,10 70,6" />
    </svg>
  );
}
