import { BrandStatement } from "@/components/sections/brand-statement";
import { Detail } from "@/components/sections/detail";
import { Hero } from "@/components/sections/hero";
import { InUse } from "@/components/sections/in-use";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Range } from "@/components/sections/range";
import { WhereToBuy } from "@/components/sections/where-to-buy";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <ProductShowcase />
      <Detail />
      <InUse />
      <Range />
      <WhereToBuy />
    </>
  );
}
