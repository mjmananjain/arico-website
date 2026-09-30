/**
 * Shared motion tokens for JS (Motion / GSAP).
 * Keep in sync with --dur-* and --ease-* in globals.css.
 */
export const duration = {
  fast: 0.18,
  base: 0.32,
  slow: 0.7,
  cinematic: 1.2,
} as const;

/** Cubic-bezier arrays, usable directly as Motion `ease` values. */
export const ease = {
  outExpo: [0.16, 1, 0.3, 1],
  inOutQuart: [0.76, 0, 0.24, 1],
  standard: [0.2, 0, 0, 1],
} as const;

/** Closest built-in GSAP eases, so no CustomEase plugin is needed. */
export const gsapEase = {
  outExpo: "expo.out",
  inOutQuart: "power4.inOut",
  standard: "power2.out",
} as const;
