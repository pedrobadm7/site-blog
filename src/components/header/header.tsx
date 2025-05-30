
import Image from 'next/image'
import Link from 'next/link'
import { ActiveLink } from '../active-link'
import { Button } from '../ui/button'

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            <span className="text-2xl font-bold grayscale">Site.Set</span>
          </Link>

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button asChild><Link href="/comecar">Começar</Link></Button>
          </nav>

        </div>
      </div>
    </header>
  )
}
