import * as React from "react"
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

export function ProductCard() {
  return (
    <Card className="w-full text-center md:text-left">
        <Image className="mx-auto w-30 h-30 md:w-40 md:h-40" src='/banner.jpg' alt='TODO' width={200} height={200}></Image>
        <CardHeader className="py-2 lg:my-4">
            <p className="font-light tracking-wide">Sơn phủ</p>
            <h3 className="font-bold tracking-wide capitalize text-lg">Majestic sang trọng</h3>
        </CardHeader>
        <CardContent className="hidden lg:block">
          <div className="text-sm">
              <p className="">Nhà sang trọng, sống trong lành</p>
              <ul className="mt-4 px-4 list-disc flex flex-col gap-2">
                  <li>Làm sạch không khí</li>
                  <li>Siệu nhẹ mùi</li>
                  <li>Siêu láng mịn</li>
                  <li>Che phủ vết nứt</li>
              </ul>
          </div>
        </CardContent>
        <div className="px-6 pb-4 gap-2 md:text-right font-bold">
            Liên hệ
        </div>
    </Card>
  )
}

export default ProductCard;