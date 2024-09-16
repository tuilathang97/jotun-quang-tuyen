'use client'

import { Product, Price } from "@/app/product/[id]/page";
import React from "react";
import { Button } from "../ui/button";

const Price = ({ product } : { product: Product }) => {
    const [unit, setUnit] = React.useState(product?.price[0]?.unit); // TODO: Thang
    const [price, setPrice] = React.useState(product?.price[0]?.price); // TODO: Thang
    const [originalPrice, setOrignalPrice] = React.useState(product?.price[0]?.orginalPrice); // TODO: Thang
    const onPriceChange = (p: Price) => {
        return (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            setUnit(p.unit);
            setPrice(p.price);
            setOrignalPrice(p.orginalPrice);
        }
    }

    const calculateDiscountPercentage = (price: string, originalPrice: string): number => {
        const priceNumber = parseFloat(price.replace(/\./g, '').replace(',', '.'));
        const originalPriceNumber = parseFloat(originalPrice.replace(/\./g, '').replace(',', '.'));
        const discount = ((originalPriceNumber - priceNumber) / originalPriceNumber) * 100;
        return Math.ceil(discount);
    }

    return (
        <>
            <div className="flex gap-2">
                {
                    product?.price?.map(p => {
                    return(
                        <Button key={p.orginalPrice + p.price + p.unit}
                            onClick={onPriceChange(p)}
                            className={`tracking-widest bg-transparent text-black shadow-none border-gray-500 rounded-sm border ${unit === p.unit ? 'border-gray-500 border-2' : ''} hover:shadow-md hover:bg-transparent`}
                        >
                            {p.unit}
                        </Button>
                    )
                    })
                }
            </div>
            <div className="h-16 flex gap-2 w-full flex-col mt-2 items-start rounded-md font-bold justify-start">
                <span className=" flex flex-row">
                    <span className="line-through text-gray-500 font-light">{originalPrice}</span>
                    <span className="border ml-[14px] no-underline bg-[#fff0e9] text-sm text-[#eb5757] w-fit h-[24px] p-[3px] flex justify-center items-center text-white rounded-md">
                        -{calculateDiscountPercentage(price, originalPrice)}%
                    </span>
                </span>
                <span className="text-red-600"> {price}</span>
            </div>
        </>
    )
}

export default Price;