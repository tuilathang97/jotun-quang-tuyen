import Price from "@/components/product/price";
import Section from "@/components/section";
import { fetchArrayJson, getProduct } from "@/utils/utils";
import Image from "next/image";

export interface Product {
  id: number;
  name: string;
  desktopImage: string;
  mobileImage: string;
  highlights: string[];
  description: string;
  linkUrl: string;
  cardImages: string[];
  cardTitle: string;
  cardDescription: string;
  price: PriceProps[];
  usq: string[];
  stat: {
    dryTime: string,
    finish: string,
    coverage: string,
    coats: string
  },
  type: "interior" | 'exterior',
  shortDescription: string,
  tag: string
}

export interface PriceProps {
    orginalPrice: string,
    price: string,
    unit: string
}

function ProductDetail({ params } : { params: { id: string } }) {
    const product = getProduct(params.id);
    if (!product) {
        return <></>;
    }
    return(
        <div className="">
            <Section className="md:mt-0">
                <div className="flex justify-center flex-col md:flex-row items-center text-center md:max-w-[720px] md:mx-auto md:text-left md:gap-8 py-10 lg:py-20" >
                    <Image height={180} width={140} src={`/images/products/${product.desktopImage}`} alt={""} />
                    <div className="md:py-10">
                        <h1 className="my-6 lg:my-0 lg:mb-4 font-semibold text-2xl leading-8">{product.name}</h1>
                        <p className="leading-6 mb-4">{product.description}</p>
                        <Price product={product}/>
                    </div>
                </div>
            </Section>
            <Section className="px-0 md:mt-8 lg:mt-8 lg:pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 md:shadow-sm shadow-slate-400 bg-white">
                    <div className="">
                        {/* TODO: slider here */}
                        <Image className="md:max-h-[500px]" height='300' width={'500'} style={{ width: '100%', height: 'auto'}} src={`/images/covers/${product.cardImages[0]}`} alt=''/>
                    </div>
                    <div className="px-4 pt-6">
                        <div className="flex gap-4 justify-center flex-wrap">
                            {product.highlights?.map((highlight) => {
                                return(
                                    <div key={highlight} className="p-3 bg-amber-50 w-fit font-sans font-thin text-sm text-black">
                                        {highlight}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex flex-col text-center items-center">
                            <h3 className="my-6 font-medium text-2xl leading-10">{product.cardTitle}</h3>
                            <p className="leading-6">{product.cardDescription}</p>
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="pb-20">
                    <h3 className="my-6 font-medium text-center text-2xl leading-10">Thông Tin Sản Phẩm</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {
                            product?.stat?.dryTime &&
                            <div className="flex flex-col border-2 text-center py-8 px-4 rounded-s2 min-w-[200px] lg:min-w-[300px] lg:min-h-[200px] items-center justify-center ">
                                <div className="text-xl text-gray-400 font-serif font-thin">Thời Gian Khô</div>
                                <div className="mt-2 text-lg">{product.stat.dryTime}</div>
                            </div>
                        }

                        {
                            product?.stat?.finish &&
                            <div className="flex flex-col border-2 text-center py-8 px-4 rounded-sm min-w-[200px] lg:min-w-[300px] lg:min-h-[200px] items-center justify-center ">
                                <div className="text-xl text-gray-400 font-serif font-thin">Bề Mặt Hoàn Thiện</div>
                                <div className="mt-2 text-lg">{product.stat.finish}</div>
                            </div>
                        }

                        {
                            product?.stat?.coverage &&
                            <div className="flex flex-col border-2 text-center py-8 px-4 rounded-sm min-w-[200px] lg:min-w-[300px] lg:min-h-[200px] items-center justify-center ">
                                <div className="text-xl text-gray-400 font-serif font-thin">Độ Che Phủ</div>
                                <div className="mt-2 text-lg">{product.stat.coverage}</div>
                            </div>
                        }

                        {
                            product?.stat?.coats &&
                            <div className="flex flex-col border-2 text-center py-8 px-4 rounded-sm min-w-[200px] lg:min-w-[300px] lg:min-h-[200px] items-center justify-center ">
                                <div className="text-xl text-gray-400 font-serif font-thin">Lớp Phủ</div>
                                <div className="mt-2 text-lg">{product.stat.coats}</div>
                            </div>
                        }
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default ProductDetail;

