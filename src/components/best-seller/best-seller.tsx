import { ProductList } from "../product"
import Section from "@/components/section";
import Heading from "@/components/heading";
import { fetchArrayJson } from "@/utils/utils";
import { Product } from "@/app/(jotun)/product/[id]/page";

const BestSeller = () => {
    const products = fetchArrayJson<Product>('best-seller') || [];
    return(
        <Section>
            <Heading id="best-seller" className="text-yellow-700">
                Bán chạy nhất
            </Heading>
            <ProductList products={products}/>
        </Section>
    )
}

export default BestSeller;