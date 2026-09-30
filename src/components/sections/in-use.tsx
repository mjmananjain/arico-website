import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { Reveal } from "@/components/ui/reveal";
import { copy } from "@/content/site";

export function InUse() {
  return (
    <section id="in-use" aria-labelledby="in-use-heading" className="section-y">
      <Container size="wide">
        <Reveal className="max-w-3xl">
          <Heading id="in-use-heading" size="md">
            {copy.inUse.heading}
          </Heading>
          <p className="mt-6 max-w-[48ch] text-lead text-mist-700">{copy.inUse.lead}</p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <PlaceholderFrame label="In-use photography, wide" ratio="aspect-[16/10]" />
          </div>
          <div className="lg:col-span-4 lg:mt-32">
            <PlaceholderFrame label="In-use photography, portrait" ratio="aspect-[3/4]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
