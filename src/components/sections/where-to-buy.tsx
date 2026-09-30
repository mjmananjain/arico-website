import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { copy } from "@/content/site";

export function WhereToBuy() {
  return (
    <section id="where-to-buy" aria-labelledby="where-to-buy-heading" className="section-y">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Heading id="where-to-buy-heading" size="lg" className="lg:col-span-7">
            {copy.whereToBuy.heading}
          </Heading>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-[36ch] text-lead text-mist-700">{copy.whereToBuy.body}</p>
            <Button href="/#contact" className="mt-8" size="lg">
              {copy.whereToBuy.cta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
