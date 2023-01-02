import '@/styles/globals.css'
import { Montserrat } from '@next/font/google'
import { ReactNode } from 'react'
import { LayoutContent } from './LayoutContent'

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
