"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/ui/wordmark";
import { ctaItem, navItems } from "@/content/site";

/** Matches --header-h (4.5rem) in globals.css. */
const HEADER_HEIGHT_PX = 72;

const linkClasses =
  "relative py-2 text-small font-medium after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-out-expo hover:after:scale-x-100 focus-visible:after:scale-x-100";

/**
 * Fixed header. Transparent with light text while the hero (any element marked
 * `data-header-hero`) sits behind it; solid light with dark text afterwards.
 * The switch is driven by one IntersectionObserver, not a scroll listener.
 */
export function Header() {
  const isHome = usePathname() === "/";
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const hero = document.querySelector("[data-header-hero]");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const latest = entries[entries.length - 1];
        setPastHero(!latest.isIntersecting);
      },
      { rootMargin: `-${HEADER_HEIGHT_PX}px 0px 0px 0px` },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  const overHero = isHome && !pastHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[var(--header-h)] border-b transition-colors duration-500 ease-standard ${
        overHero
          ? "border-transparent bg-mist-50/0 text-mist-50"
          : "border-mist-200 bg-mist-50 text-graphite-900"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-[120rem] items-center justify-between px-[var(--gutter)]">
        <Link href="/" aria-label="ARICO home" className="flex items-center">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClasses}>
              {item.label}
            </Link>
          ))}
          <Button href={ctaItem.href} tone={overHero ? "dark" : "light"}>
            {ctaItem.label}
          </Button>
        </nav>

        <MobileNav overHero={overHero} />
      </div>
    </header>
  );
}
