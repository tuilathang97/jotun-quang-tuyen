import Banner from "@/components/banner"
import BestSeller from "@/components/best-seller"
import ScrollIntoViewEffect from "@/components/effects/scroll-to-hash"
import Heading from "@/components/heading"
import { ProductList } from "@/components/product"
import PromoBanner from "@/components/promo"
import Section from "@/components/section"
import { fetchArrayJson } from "@/utils/utils"
import { Product } from "./product/[id]/page"
import Image from 'next/image';
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

function getProducts(type: 'exterior' | 'interior'): Product[] | null | undefined {
  const products = fetchArrayJson<Product>('products');
  return products?.filter((product) => product?.type === type);
}

export default function Home() {

  // TODO: perf considerations
  const exteriorProducts = getProducts('exterior') || [];
  const interiorProducts = getProducts('interior') || [];

  return (
    <>
      <ScrollIntoViewEffect />
      <Banner />
      <PromoBanner />


      <Section >
        <TextAndTitle3 />
        <TextAndTitle2 />
      </Section>

      <BestSeller />

      <Section>
        <Heading id="exterior">Sơn ngoại thất</Heading>
        <ProductList products={exteriorProducts} />
      </Section>

      <Section className="pb-10">
        <Heading id="interior">Sơn nội thất</Heading>
        <ProductList products={interiorProducts} />
      </Section>
    </>
  )
}

function TextAndTitle2() {
  return (
    <div className="py-4 sm:py-4">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 ring-1 ring-white/10 sm:rounded-3xl lg:mx-0 lg:max-w-none lg:flex-row lg:items-center xl:gap-x-20">
            <Image width={500} height={500} className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm" alt="hero" src="/images/innovation-multicolor-colourcard.webp" />

            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-yellow-700 sm:text-4xl">Lựa chọn màu sắc đẹp cùng độ chính xác cao</h2>
              <p className="mt-6 text-lg leading-8 text-black">
                Máy pha màu tự động của Jotun được thiết kế độc đáo để các nhà bán lẻ và phân phối có thể kết hợp hàng ngàn màu sắc theo ý muốn của khách hàng ngay tại cửa hàng và trung tâm phân phối. Khả năng pha màu chính xác, nhanh chóng và dễ dàng giúp máy pha màu Jotun dẫn đầu ngành công nghiệp sơn trên toàn thế giới.
              </p>
              <div className="mt-6 flex">
                <a href="#best-seller" className="text-sm font-semibold leading-6 text-red-600">
                  Mua ngay <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </div>
  )
}

function TextAndTitle3() {
  return (
    <div className="py-4 sm:py-4">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 ring-1 ring-white/10 sm:rounded-3xl lg:mx-0 lg:max-w-none lg:flex-row lg:items-center xl:gap-x-20">
            <Image width={500} height={500} className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm" alt="hero" src="/images/testing-for-the-extreme.webp" />

            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-yellow-700 sm:text-4xl">Bảo vệ an toàn cho các công trình</h2>
              <p className="mt-6 text-lg leading-8 text-black">
                Tất nhiên, thời tiết khắc nghiệt không phải là mối đe dọa duy nhất đối với độ bền của sơn và sơn phủ Jotun. Đó là lý do tại sao chúng tôi cũng tiến hành một loạt các thử nghiệm cơ học để đánh giá độ cứng, độ bền và khả năng chống lại các mối đe dọa như va đập, mài mòn và trầy xước.
              </p>
              <div className="mt-6 flex"></div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </div>
  )
}