import { Inter } from 'next/font/google'

import { Footer } from '../footer'
import { Header } from '../header'

type LayoutProps = {
  children: React.ReactNode
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`dark relative flex min-h-screen flex-col ${inter.className}`}>
      <Header />
      <main className="flex flex-1 flex-col bg-black">{children}</main>
      <Footer />
    </div>
  )
}
