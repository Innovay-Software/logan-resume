import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] })

export const metadata: Metadata = {
  title: 'Logan Dai',
  description: 'Online resume of Logan Dai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
