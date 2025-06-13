
import Link from 'next/link'
import { ActiveLink } from '../active-link'
import { Logo } from '../logo'
import { Button } from '../ui/button'

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-gray-500 backdrop-blur supports-[backdrop-filters]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 ls:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="secondary" asChild><Link href="/comecar">Começar</Link></Button>
          </nav>

        </div>
      </div>
    </header>
  )
}
