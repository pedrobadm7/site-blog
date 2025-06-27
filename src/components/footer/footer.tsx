import Link from 'next/link'

import { Logo } from '../logo'

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-8 py-8 md:flex-row">
          <Logo />

          <nav className="flex flex-col items-center gap-4 text-sm text-blue-100 text-muted-foreground md:flex-row">
            <Link className="hover:text-blue-200" href="/termos-de-uso">
              Termos de uso
            </Link>
            <Link className="hover:text-blue-200" href="/politica-de-privacidade">
              Política de privacidade
            </Link>
            <Link className="hover:text-blue-200" href="/feedback">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
