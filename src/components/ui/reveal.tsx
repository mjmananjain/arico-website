"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in ms, for staggering siblings. */
  delay?: number;
  className?: string;
};

/**
 * One-shot scroll reveal. Uses a single IntersectionObserver per instance and
 * flips a data attribute directly on the element, so there is no React state,
 * no re-render, and no scroll listener. The visual effect lives in globals.css
 * and animates opacity/transform only.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.dataset.revealed = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.dataset.revealed = "true";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined;

  return (
    <div ref={ref} data-reveal className={className} style={style}>
      {children}
    </div>
  );
}
