
import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1" title="Página inicial">
      <Image src="/logo.svg" alt="logo" width={32} height={32} />
      <span className="text-2xl font-bold grayscale text-white">Site.Set</span>
    </Link>
  )
}
