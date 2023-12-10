import ProductCard from "./product-card";


function ProductList() {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
}

export default ProductList;