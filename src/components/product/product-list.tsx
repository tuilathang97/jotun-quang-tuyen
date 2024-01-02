import { Product } from "@/app/product/[id]/page";
import ProductCard from "./product-card";


function ProductList({ products } : { products: Product[] }) {

    if (!products) return <></>;

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4'>
            {
                products.map(product => <ProductCard key={product.id} product={product}/>)
            }
        </div>
    );
}

export default ProductList;