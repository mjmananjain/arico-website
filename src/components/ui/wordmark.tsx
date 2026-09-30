/**
 * TEMPORARY typographic wordmark. Replace with the official ARICO logo (SVG)
 * once supplied; every usage goes through this component.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-[1.375rem] font-semibold leading-none tracking-[0.28em] ${className}`}
    >
      {/* Negative margin cancels the trailing letter-spacing so the mark sits optically flush. */}
      <span className="-mr-[0.28em]">ARICO</span>
    </span>
  );
}
