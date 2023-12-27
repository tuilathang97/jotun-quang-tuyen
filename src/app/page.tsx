import Banner from "@/components/banner"
import BestSeller from "@/components/best-seller"
import ScrollIntoViewEffect from "@/components/effects/scroll-to-hash"
import Heading from "@/components/heading"
import { ProductList } from "@/components/product"
import PromoBanner from "@/components/promo"
import Section from "@/components/section"
import { fetchArrayJson } from "@/utils/utils"
import { Product } from "./product/[id]/page"

function getProducts(type : 'exterior' | 'interior') : Product[] | null | undefined {
    const products = fetchArrayJson<Product>('products');
    return products?.filter((product) => product?.type === type);
}

export default function Home() {

  // TODO: perf considerations
  const exteriorProducts = getProducts('exterior') || [];
  const interiorProducts = getProducts('interior') || [];

  return (
    <>
      <ScrollIntoViewEffect/>
      <Banner />
      <PromoBanner/>
      <BestSeller />

      <Section>
          <Heading id="exterior">Sơn ngoại thất</Heading>
          <ProductList products={exteriorProducts}/>
      </Section>

      <Section className="pb-10">
          <Heading id="interior">Sơn nội thất</Heading>
          <ProductList products={interiorProducts}/>
      </Section>
    </>
  )
}
