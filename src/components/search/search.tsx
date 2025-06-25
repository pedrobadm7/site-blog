import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useCallback } from 'react'

import { cn } from '@/lib/utils'

export function Search() {
  const router = useRouter()
  const query = router.query.q as string

  const handleSearch = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`)
      }
    },
    [query, router],
  )

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
      shallow: true,
      scroll: false,
    })
  }

  return (
    <form onSubmit={handleSearch} className="group relative">
      <SearchIcon
        className={cn(
          'absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-300 transition-colors duration-200 group-focus-within:text-blue-300',
          query && 'text-blue-300',
        )}
      />

      <input
        placeholder="Buscar"
        type="text"
        onChange={handleQueryChange}
        className="h-10 w-72 rounded-md border border-gray-400 bg-transparent pl-9 text-body-sm text-gray-100 outline-none transition-all duration-200 placeholder:text-body-sm placeholder:text-gray-300 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300"
      />
    </form>
  )
}
