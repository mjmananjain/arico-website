import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { Reveal } from "@/components/ui/reveal";
import { copy } from "@/content/site";

export function Detail() {
  return (
    <section id="detail" aria-labelledby="detail-heading" className="section-y bg-white">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="self-start lg:sticky lg:top-32 lg:col-span-5">
            <Eyebrow>Craft and function</Eyebrow>
            <Heading id="detail-heading" size="md" className="mt-8">
              {copy.detail.heading}
            </Heading>
            <p className="mt-6 max-w-[40ch] text-lead text-mist-700">{copy.detail.lead}</p>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <PlaceholderFrame label="Close-up detail image" ratio="aspect-[5/4]" />
            <ul className="mt-12 border-t border-mist-300">
              {copy.detail.items.map((item) => (
                <li key={item} className="border-b border-mist-300 py-6 text-body text-mist-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
