import * as React from "react"
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Product } from "@/app/product/[id]/page";
import Link from "next/link";

export function ProductCard({ product } : { product : Product } ) {
  return (
    <Link className="flex" href={`product/${product.id}`}>
      <Card className="w-full text-left flex flex-col hover:shadow-xl">
          <Image className="mx-auto w-30 h-30 md:w-40 md:h-50" src={`/images/products/${product.desktopImage}`} alt='TODO' width={200} height={200}></Image>
          <CardHeader className="py-2 lg:my-4">
              <p className="font-light tracking-wide text-sm">{product.tag}</p>
              <h3 className="font-bold tracking-wide capitalize text-lg">{product.name}</h3>
          </CardHeader>
          <CardContent className="lg:block">
            <div className="text-sm">
                <p className="text-md">{product.shortDescription}</p>
                <ul className="mt-4 px-4 list-disc flex flex-col gap-2">
                  {
                    product.usq?.map(u => <li key={u}>{u}</li>)
                  }
                </ul>
            </div>
          </CardContent>
          <div className="px-6 pb-4 gap-2 md:text-right font-bold mt-auto">
              {product.price}
          </div>
      </Card>
    </Link>
  )
}

export default ProductCard;