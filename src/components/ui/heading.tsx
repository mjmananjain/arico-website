import type { ReactNode } from "react";

const sizes = {
  xl: "text-display-xl",
  lg: "text-display-lg",
  md: "text-display-md",
  title: "text-title",
} as const;

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: keyof typeof sizes;
  id?: string;
  className?: string;
  children: ReactNode;
};

/** Semantic level (`as`) is independent from visual size (`size`). */
export function Heading({ as: Tag = "h2", size = "lg", id, className = "", children }: HeadingProps) {
  return (
    <Tag id={id} className={`font-display font-medium text-balance ${sizes[size]} ${className}`}>
      {children}
    </Tag>
  );
}
