import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Playfair_Display as PlayfairDisplay } from 'next/font/google'
import './globals.css';
import { Analytics } from "@vercel/analytics/react"

const playfairDisplay = Inter({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: 'Sơn Jotun Long Hậu',
  description: 'Chúng tôi tự hào giới thiệu đến bạn một nền tảng mua sắm trực tuyến hoàn hảo cho mọi nhu cầu sơn của bạn. Với hàng trăm loại sơn đa dạng và chất lượng từ các thương hiệu uy tín, chúng tôi cam kết mang đến cho bạn những sản phẩm tốt nhất để nâng tầm không gian sống và làm việc của bạn.',
  applicationName: 'JotunLongHau',
  keywords: ['sơn, sơn nội thất, sơn ngoại thất, jotun, sơn jotun, jotashield, majestic, sơn long hậu, sơn cần giờ, sơn quận 1',
    'sơn quận 2', 'sơn quận 3', 'sơn quận 4', 'sơn quận 5', 'sơn quận 6', 'sơn quận 7', 'sơn quận 8', 'sơn quận 9', 'sơn quận gò vấp',
    'sơn quận phú nhuận', 'sơn quận tân phú', 'sơn quận tân bình'
  ],
  viewport: "width=device-width, initial-scale=1",
  robots: 'index, follow',
  bookmarks: "https://jotunlonghau.com"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.className} relative`}>
        <Navigation />
        <main className="min-h-[700px] pt-0 md:pt-[80px] bg-[#fbfbfb]">
          {children}
        </main>
        <Footer />
      </body>
      <Analytics />
    </html>
  )
}
