import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { copy } from "@/content/site";
import { products } from "@/content/products";

/** Editorial index of the range. Rows become links once product pages exist. */
export function Range() {
  return (
    <section id="range" aria-labelledby="range-heading" className="section-y bg-mist-100">
      <Container>
        <Heading id="range-heading" size="md">
          {copy.range.heading}
        </Heading>

        <ul className="mt-16 border-t border-mist-300 lg:mt-24">
          {products.map((product) => (
            <li
              key={product.slug}
              className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-mist-300 py-6 lg:py-8"
            >
              <span className="font-display text-title font-medium">{product.name}</span>
              <span className="text-caption text-mist-700">{product.category}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
