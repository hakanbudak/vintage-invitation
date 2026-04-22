"use client";

import { forwardRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "outline" | "filled";
  className?: string;
  ariaLabel?: string;
  download?: string;
};

const base =
  "group inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 " +
  "text-[0.72rem] uppercase tracking-[0.35em] font-serif font-light " +
  "transition-all duration-500 ease-out select-none " +
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ivory/70 focus-visible:ring-offset-0";

const variants = {
  outline:
    "border border-ivory/40 text-ivory/85 hover:border-ivory/80 hover:text-ivory " +
    "hover:bg-ivory/5 active:bg-ivory/10",
  filled:
    "bg-ivory/90 text-ink hover:bg-ivory",
} as const;

const LuxuryButton = forwardRef<HTMLAnchorElement & HTMLButtonElement, Props>(
  function LuxuryButton(
    { children, href, onClick, variant = "outline", className = "", ariaLabel, download },
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
