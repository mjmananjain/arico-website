import { HeroStage } from "@/components/sections/hero-stage";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { copy } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      data-header-hero
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-glass-950 text-mist-50"
    >
      <HeroStage />

      <Container size="wide" className="mt-auto pb-[max(3rem,6svh)] pt-40">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Heading as="h1" size="xl" id="hero-heading" className="lg:col-span-8">
            {copy.hero.headline}
          </Heading>

          <div className="lg:col-span-4">
            <p className="max-w-[34ch] text-lead text-mist-300">{copy.hero.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/#products" tone="dark" size="lg">
                {copy.hero.primaryCta}
              </Button>
              <Button href="/#where-to-buy" variant="secondary" tone="dark" size="lg">
                {copy.hero.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
