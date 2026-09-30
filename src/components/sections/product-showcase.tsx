import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { Reveal } from "@/components/ui/reveal";
import { copy } from "@/content/site";
import { products } from "@/content/products";

/**
 * Each product is a full-width "stage" (`data-product-stage`). Step 3 turns
 * these into the pinned, scroll-driven sequence on desktop.
 */
export function ProductShowcase() {
  return (
    <section id="products" aria-labelledby="products-heading" className="section-y bg-mist-100">
      <Container>
        <Reveal className="max-w-3xl">
          <Heading id="products-heading" size="md">
            {copy.products.heading}
          </Heading>
          <p className="mt-6 max-w-[48ch] text-lead text-mist-700">{copy.products.lead}</p>
        </Reveal>

        <ul className="mt-16 divide-y divide-mist-300 border-t border-mist-300 lg:mt-24">
          {products.map((product, index) => (
            <li
              key={product.slug}
              data-product-stage
              className="grid gap-8 py-12 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-24"
            >
              <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <PlaceholderFrame label={`${product.name} product image`} ratio="aspect-[4/3]" />
              </div>
              <div className="lg:col-span-5">
                <p className="text-caption text-mist-700">{product.category}</p>
                <Heading as="h3" size="title" className="mt-3">
                  {product.name}
                </Heading>
                <p className="mt-4 max-w-[40ch] text-body text-mist-700">{product.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
