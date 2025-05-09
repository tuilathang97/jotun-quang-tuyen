export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body id="outstatic">{children}</body>
    </html>
  )
}