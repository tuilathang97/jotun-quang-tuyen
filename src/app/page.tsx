import Banner from "@/components/banner"
import BestSeller from "@/components/best-seller"
import ScrollIntoViewEffect from "@/components/effects/scroll-to-hash"
import Heading from "@/components/heading"
import { ProductList } from "@/components/product"
import PromoBanner from "@/components/promo"
import Section from "@/components/section"

export default function Home() {

  

  return (
    <>
      <ScrollIntoViewEffect/>
      <Banner />
      <PromoBanner/>
      <BestSeller />

      <Section>
          <Heading id="exterior">Sơn ngoại thất</Heading>
          <ProductList />
      </Section>

      <Section className="pb-10">
          <Heading id="interior">Sơn nội thất</Heading>
          <ProductList />
      </Section>
    </>
  )
}
