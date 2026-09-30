import type { ReactNode } from "react";

type EyebrowProps = {
  tone?: "dark" | "light";
  className?: string;
  children: ReactNode;
};

/** Small section label with a hairline. Use sparingly, only where it names something. */
export function Eyebrow({ tone = "light", className = "", children }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-3 text-caption font-medium ${
        tone === "dark" ? "text-mist-300" : "text-mist-700"
      } ${className}`}
    >
      <span aria-hidden className="h-px w-8 bg-current opacity-60" />
      {children}
    </p>
  );
}
