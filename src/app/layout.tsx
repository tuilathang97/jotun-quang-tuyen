import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { metadata as defaultMetadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

// Use the default metadata from our centralized configuration
export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 