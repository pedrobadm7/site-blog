import { useRouter } from 'next/router'

import { Search } from '@/components/search'

import { PostCard } from './components/post-card'
import { PostGridCard } from './components/post-grid-card'

export function BlogList() {
  const router = useRouter()
  const query = router.query.q as string
  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : 'Dicas e estratégias para impulsionar o seu negócio'

  return (
    <div className="flex h-full flex-grow flex-col py-24">
      <header className="pb-14">
        <div className="container flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4">
            <span className="w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-body-tag text-cyan-100 md:text-left">
              BLOG
            </span>
            <h1 className="max-w-2xl text-balance text-start text-heading-lg text-gray-100 md:text-left md:text-heading-xl">
              {pageTitle}
            </h1>
          </div>
          <Search />
        </div>
      </header>

      <PostGridCard>
        <PostCard
          slug="transformando-seu-negocio-em-uma-loja-virtual"
          title="Transformando seu negócio em uma loja virtual"
          description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site..."
          image="/assets/post-01.svg"
          date="20/12/2024"
          author={{
            name: 'Aspen Dodiki',
            avatar: '/customer-02.png',
          }}
        />
      </PostGridCard>
    </div>
  )
}
