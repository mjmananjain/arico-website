"use client";

import { useMediaQuery } from "./use-media-query";

/** True when the visitor has asked the OS/browser to reduce motion. */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
