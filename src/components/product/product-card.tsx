import * as React from "react"
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Product } from "@/app/product/[id]/page";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export function ProductCard({ product } : { product : Product } ) {
  const productDetailHref = `product/${product.id}`;
  return (
    <Link className="flex" href={productDetailHref}>
      <Card className="w-full text-left flex flex-col shadow-none hover:border-yellow-700 hover:shadow-sm hover:shadow-yellow-700">
          <Image className="mx-auto w-30 h-30 md:w-40 md:h-50" src={`/images/products/${product.desktopImage}`} alt='TODO' width={200} height={200}></Image>
          <CardHeader className="py-2 lg:my-4">
              <p className="font-light tracking-wide text-sm">{product.tag}</p>
              <h3 className="font-bold tracking-wide capitalize text-lg">{product.name}</h3>
          </CardHeader>
          <CardContent className="lg:block font-sans">
            <div className="text-sm">
                <p className="text-md">{product.shortDescription}</p>
                <ul className="mt-4 px-4 list-disc flex flex-col gap-2">
                  {
                    product.usq?.map(u => <li key={u}>{u}</li>)
                  }
                </ul>
            </div>
          </CardContent>
          <div className="px-6 pb-4 gap-2 mt-auto flex justify-between font-serif">
            <div>
              {/* placeholder */}
            </div>
            <div className="h-16 flex gap-2 justify-center items-center w-1/2  rounded-md text-yellow-700 font-bold">
              {product.price}
            </div>
          </div>
      </Card>
    </Link>
  )
}

export default ProductCard;