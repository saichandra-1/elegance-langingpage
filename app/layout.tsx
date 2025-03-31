import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ELEGANCE',
  description: 'fast fasion brand ',
  generator: 'chandra.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >{children}</body>
    </html>
  )
}
