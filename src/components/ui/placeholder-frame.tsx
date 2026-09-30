type PlaceholderFrameProps = {
  /** What asset belongs here, e.g. "Hero product image". */
  label: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-[4/3]". */
  ratio?: string;
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Clearly marked stand-in for a missing ARICO asset. Renders a crossed frame,
 * the standard "image goes here" convention, so nothing can be mistaken for
 * final imagery. Replace with next/image once assets exist.
 */
export function PlaceholderFrame({
  label,
  ratio = "aspect-[4/3]",
  tone = "light",
  className = "",
}: PlaceholderFrameProps) {
  const palette =
    tone === "dark"
      ? "bg-glass-900 text-mist-300 border-glass-700"
      : "bg-mist-200 text-mist-700 border-mist-300";

  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`relative w-full overflow-hidden border ${ratio} ${palette} ${className}`}
    >
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      <p className="absolute bottom-3 left-4 right-4 text-caption">Asset pending: {label}</p>
    </div>
  );
}
