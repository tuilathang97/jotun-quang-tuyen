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

      <TextAndTitle3 />
      <TextAndTitle2 />

      <Section >
        <TextAndTitle />
      </Section>

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

function TextAndTitle() {
  return(
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible mt-20 mb-20">
      <div className="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="image"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-75 rounded-xl">
              <h2 className="text-4xl font-bold text-center">Limited<br /> 
              <span className="text-red-600">50% OFF</span>
              </h2>
              
              </div>
          </div>
          <div className="p-6">
              <h4 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-red-500 uppercase">
                Khuyến Mãi
              </h4>
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Chào mừng quý khách
              </h4>
              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                Cửa hàng luôn có những chương trình khuyến mãi đặc biệt và bất ngờ dành cho quý khách hàng, hãy đến cửa hàng hoặc gọi ngay vào hotline: <a className="text-red-600" href="tel:0898271703">+84898271703</a> để nhận ngay.
              </p>
              <a className="inline-block" href="tel:0898271703">
                <button
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-red-600 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    Gọi ngay
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                    </svg>
                </button>
              </a>
          </div>
      </div>
  </div>
  )
}

function TextAndTitle2() {
  return(
    <div className="text-left mt-10 md:mt-20">
      <div className='sm:px-8'>
        <section className="relative flex items-center w-full">
          <div className="relative items-center w-full px-5 mx-auto max-w-7xl">
            <div className="relative flex-col items-start m-auto align-middle">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                  <div className="max-w-xl text-center lg:text-left">
                    <div>
                      <p className="text-yellow-700 text-3xl font-semibold tracking-tight sm:text-5xl">
                        Lựa chọn màu sắc đẹp cùng độ chính xác cao
                      </p>
                      <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                        Máy pha màu tự động của Jotun được thiết kế độc đáo để các nhà bán lẻ và phân phối có thể kết hợp hàng ngàn màu sắc theo ý muốn của khách hàng ngay tại cửa hàng và trung tâm phân phối. Khả năng pha màu chính xác, nhanh chóng và dễ dàng giúp máy pha màu Jotun dẫn đầu ngành công nghiệp sơn trên toàn thế giới.
                      </p>
                    </div>
                    {/* <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                      <a className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600" href="#">
                        <span> Đọc thêm &nbsp; → </span>
                      </a>
                    </div> */}
                  </div>
                </div>
                <div className="flex order-first block w-full mt-0 md:mt-12 aspect-square lg:mt-0">
                  <Image width={500} height={500} className="object-cover h-[100%] rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" src="/images/innovation-multicolor-colourcard.webp" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function TextAndTitle3() {
  return(
    <div className="text-left">
      <div className='sm:px-8'>
        <section className="relative flex items-center w-full">
          <div className="relative items-center w-full px-5 mx-auto max-w-7xl">
            <div className="relative flex-col items-start m-auto align-middle">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                <div className="flex order-first block w-full mt-12 aspect-square lg:mt-0">
                  <Image width={500} height={500} className="object-cover rounded-3xl h-[100%] object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" src="/images/testing-for-the-extreme.webp" />
                </div>
                <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                  <div className="max-w-xl text-center lg:text-left">
                    <div>
                      <p className="text-3xl font-semibold tracking-tight text-yellow-700 sm:text-5xl">
                        Bảo vệ an toàn cho các công trình
                      </p>
                      <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                        Tất nhiên, thời tiết khắc nghiệt không phải là mối đe dọa duy nhất đối với độ bền của sơn và sơn phủ Jotun. Đó là lý do tại sao chúng tôi cũng tiến hành một loạt các thử nghiệm cơ học để đánh giá độ cứng, độ bền và khả năng chống lại các mối đe dọa như va đập, mài mòn và trầy xước.
                      </p>
                    </div>
                    {/* <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                      <a className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600" href="#">
                        <span> Đọc thêm &nbsp; → </span>
                      </a>
                    </div>   */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}