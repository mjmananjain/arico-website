import { PlaceholderFrame } from "@/components/ui/placeholder-frame";

/**
 * Background stage of the hero. STEP 1: static placeholder only.
 *
 * STEP 2 replaces this component with the wipe-reveal interaction. It fills the
 * hero (`absolute inset-0`, behind the content at -z-10) and is decorative
 * (`aria-hidden`), so the real headline and CTAs in <Hero /> stay the LCP and
 * the accessible content regardless of what renders here.
 */
export function HeroStage() {
  return (
    <div aria-hidden data-hero-stage className="absolute inset-0 -z-10">
      {/* Single soft key light to give the dark surface some depth */}
      <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_75%_20%,var(--color-glass-700),transparent_70%)] opacity-70" />
      <div className="absolute right-[var(--gutter)] top-[20svh] hidden w-[min(34vw,30rem)] lg:block">
        <PlaceholderFrame label="Hero product / glass surface" ratio="aspect-[4/5]" tone="dark" />
      </div>
    </div>
  );
}
