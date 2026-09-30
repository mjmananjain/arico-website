import type { ComponentPropsWithoutRef } from "react";

const sizes = {
  narrow: "max-w-[64rem]",
  default: "max-w-[90rem]",
  wide: "max-w-[120rem]",
} as const;

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  size?: keyof typeof sizes;
};

/** Centred page column with the fluid ARICO gutter. */
export function Container({ size = "default", className = "", ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-[var(--gutter)] ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
