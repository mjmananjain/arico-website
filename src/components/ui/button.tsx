import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "link";
/** `tone` is the surface the button sits on: "dark" surface or "light" surface. */
type Tone = "dark" | "light";
type Size = "md" | "lg";

type Base = {
  variant?: Variant;
  tone?: Tone;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = Base & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, keyof Base | "href">;
type ButtonAsButton = Base & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, keyof Base>;
export type ButtonProps = ButtonAsLink | ButtonAsButton;

const root =
  "inline-flex items-center justify-center whitespace-nowrap font-medium rounded-xs select-none transition-colors duration-300 ease-standard";

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-small",
  lg: "h-14 px-8 text-body",
};

const variants: Record<Variant, Record<Tone, string>> = {
  primary: {
    dark: "bg-mist-50 text-glass-950 hover:bg-signal-300",
    light: "bg-glass-950 text-mist-50 hover:bg-signal-700",
  },
  secondary: {
    dark: "border border-mist-50/30 text-mist-50 hover:border-mist-50 hover:bg-mist-50/10",
    light: "border border-graphite-900/25 text-graphite-900 hover:border-graphite-900 hover:bg-graphite-900/5",
  },
  link: {
    dark: "border-b border-mist-50/40 text-mist-50 hover:border-mist-50",
    light: "border-b border-graphite-900/40 text-graphite-900 hover:border-graphite-900",
  },
};

export function buttonClasses({
  variant = "primary",
  tone = "light",
  size = "md",
  className = "",
}: Pick<Base, "variant" | "tone" | "size" | "className">) {
  const sizing = variant === "link" ? "py-1 text-small rounded-none" : sizes[size];
  return `${root} ${sizing} ${variants[variant][tone]} ${className}`;
}

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant, tone, size, className, children, ...linkProps } = props;
    return (
      <Link className={buttonClasses({ variant, tone, size, className })} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { variant, tone, size, className, children, type = "button", ...buttonProps } = props;
  return (
    <button type={type} className={buttonClasses({ variant, tone, size, className })} {...buttonProps}>
      {children}
    </button>
  );
}
