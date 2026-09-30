"use client";

import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/ui/wordmark";
import { ctaItem, navItems } from "@/content/site";

/**
 * Full-screen mobile menu built on a native modal <dialog>: the browser
 * provides the focus trap, Escape-to-close, inert background and top-layer
 * stacking, so no extra JS or dependency is needed. Page scroll is locked in
 * globals.css via :has(dialog[open]).
 */
export function MobileNav({ overHero }: { overHero: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-controls="mobile-menu"
        onClick={() => dialogRef.current?.showModal()}
        className={`-mr-3 flex size-12 items-center justify-center lg:hidden ${
          overHero ? "text-mist-50" : "text-graphite-900"
        }`}
      >
        <span className="sr-only">Open menu</span>
        <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 8h18M3 16h18" />
        </svg>
      </button>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        aria-label="Main menu"
        className="menu-panel fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 bg-glass-950 p-0 text-mist-50 backdrop:bg-transparent lg:hidden"
      >
        <div className="flex min-h-full flex-col px-[var(--gutter)] pb-10">
          <div className="flex h-[var(--header-h)] items-center justify-between">
            <Link href="/" onClick={close} aria-label="ARICO home">
              <Wordmark />
            </Link>
            <button type="button" onClick={close} className="-mr-3 flex size-12 items-center justify-center">
              <span className="sr-only">Close menu</span>
              <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
          </div>

          <nav aria-label="Main" className="mt-10">
            <ul className="border-t border-glass-700">
              {navItems.map((item) => (
                <li key={item.href} className="border-b border-glass-700">
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block py-5 font-display text-display-md font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-12">
            <Button href={ctaItem.href} tone="dark" size="lg" onClick={close} className="w-full">
              {ctaItem.label}
            </Button>
          </div>
        </div>
      </dialog>
    </>
  );
}
