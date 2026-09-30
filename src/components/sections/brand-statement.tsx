import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { copy } from "@/content/site";

export function BrandStatement() {
  return (
    <section id="about" aria-label={copy.about.label} className="section-y">
      <Container>
        <Reveal>
          <Eyebrow>{copy.about.label}</Eyebrow>
          <p className="mt-10 max-w-[24ch] font-display text-display-lg font-medium text-balance">
            {copy.about.statement}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
