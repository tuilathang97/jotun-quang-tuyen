import { ProductList } from "../product"
import Section from "@/components/section";
import Heading from "@/components/heading";

const BestSeller = () => {
    return(
        <Section>
            <Heading>
                Bán chạy nhất
            </Heading>
            <ProductList />
        </Section>
    )
}

export default BestSeller;