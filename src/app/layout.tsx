import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sơn Jotun Quang Tuyến',
  description: 'Chúng tôi tự hào giới thiệu đến bạn một nền tảng mua sắm trực tuyến hoàn hảo cho mọi nhu cầu sơn của bạn. Với hàng trăm loại sơn đa dạng và chất lượng từ các thương hiệu uy tín, chúng tôi cam kết mang đến cho bạn những sản phẩm tốt nhất để nâng tầm không gian sống và làm việc của bạn.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Navigation />
        <main className="min-h-[700px] pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
