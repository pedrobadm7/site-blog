import Image from 'next/image'
import Link from 'next/link'

export const PostCard = () => {
  return (
    <Link
      href={`/blog/`}
      className="w-full max-w-2xl overflow-hidden rounded-3xl border-[1px] border-gray-400 bg-gray-600 transition-all duration-300 hover:border-[1px] hover:border-blue-300"
    >
      <div className="overflow-hidden rounded-md p-2">
        <div className="relative">
          <div className="absolute right-0 top-0 px-3">
            <span className="text-body-xs text-gray-300">20/12/2024</span>
          </div>
          <Image
            src={`/assets/post-01.svg`}
            alt=""
            width={288}
            height={144}
            className="h-40 w-full object-cover object-center"
          />
        </div>

        <div className="mt-4 space-y-4 px-2">
          <h2 className="line-clamp-3 text-heading-sm text-gray-100">
            Transformando seu negócio em uma loja virtual
          </h2>

          <p className="line-clamp-3 text-body-sm text-gray-300">
            Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o
            Site...
          </p>

          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div className="relative h-5 w-5 overflow-hidden rounded-full border-[1px] border-blue-200 md:h-6 md:w-6">
              <Image src={`/customer-01.png`} alt="" fill className="rounded-md object-cover" />
            </div>

            <span className="text-body-xs text-gray-300">Aspen Dodiki</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
