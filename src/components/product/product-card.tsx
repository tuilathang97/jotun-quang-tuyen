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
            <Button asChild className="w-1/2 bg-white border-none underline text-black h-16 uppercase leading-4 tracking-wider hover:bg-yellow-600 shadow-none" variant={'outline'}>
              <Link className="flex gap-2" href={productDetailHref}>
                Chi tiết
              </Link>
            </Button>
            <Link href='tel:0898271703' className="h-16 flex gap-2 justify-center items-center w-1/2  rounded-md text-yellow-700 hover:text-black hover:bg-yellow-600 font-bold">
              <span>{product.price}</span>
            </Link>
          </div>
      </Card>
    </Link>
  )
}

export default ProductCard;