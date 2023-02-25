import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'
import { LayoutContent } from './LayoutContent'

export const metadata = {
  twitter: {
    card: 'summary_large_image',
  },
}

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${montserrat.variable} font-sans`}>
      <body>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  )
}
