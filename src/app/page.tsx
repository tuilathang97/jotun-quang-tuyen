import Banner from "@/components/banner"
import BestSeller from "@/components/best-seller"
import PromoBanner from "@/components/promo"
import QuickLinks from "@/components/quick-links"

export default function Home() {
  return (
    <>
      <Banner />
      <PromoBanner/>
      <BestSeller />
      <QuickLinks/>
    </>
  )
}
