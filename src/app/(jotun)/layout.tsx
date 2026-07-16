import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";
import Navigation from "@/components/navigation";
import { siteConfig } from "@/lib/seo";
import { localBusinessJsonLd } from "@/lib/structured-data";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from 'next/font/google';
import { Metadata, Viewport } from "next";
import '../globals.css';

const inter = Inter({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s`,
  },
  description: siteConfig.defaultDescription,
  applicationName: 'JotunLongHau',
  keywords: siteConfig.defaultKeywords.concat([
    'sơn jotun long hậu', 'sơn cần giuộc', 'jotun tough shield', 'jotun waterguard',
    'sơn lót jotun', 'bảng màu sơn jotun', 'giá sơn jotun',
  ]),
  robots: 'index, follow',
  alternates: {
    canonical: siteConfig.baseUrl,
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function JotunLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} relative`}>
        <JsonLd data={localBusinessJsonLd()} />
        <Navigation />
        <main className="min-h-[700px] pt-0 md:pt-[125px] bg-[#fbfbfb]">
          {children}
        </main>
        <Footer />
      </body>
      <Analytics />
    </html>
  )
}
