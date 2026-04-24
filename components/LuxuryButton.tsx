"use client";

import { forwardRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "outline-light" | "outline-dark";
  className?: string;
  ariaLabel?: string;
  download?: string;
};

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 px-8 py-3.5 " +
  "text-[0.82rem] uppercase tracking-[0.3em] font-serif font-normal " +
  "transition-all duration-500 ease-out select-none " +
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0";

const variants = {
  "outline-light":
    "border border-ivory/70 text-ivory/95 hover:bg-ivory hover:text-ink " +
    "focus-visible:ring-ivory/70",
  "outline-dark":
    "border border-ink/60 text-ink hover:bg-ink hover:text-ivory " +
    "focus-visible:ring-ink/70",
} as const;

const LuxuryButton = forwardRef<HTMLAnchorElement & HTMLButtonElement, Props>(
  function LuxuryButton(
    { children, href, onClick, variant = "outline-light", className = "", ariaLabel, download },
    ref
  ) {
    const classes = `${base} ${variants[variant]} ${className}`;

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          onClick={onClick}
          className={classes}
          aria-label={ariaLabel}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
          download={download}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={onClick}
        className={classes}
        aria-label={ariaLabel}
        type="button"
      >
        {children}
      </button>
    );
  }
);

export default LuxuryButton;
