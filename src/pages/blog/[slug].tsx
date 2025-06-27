import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function PostPage() {
  const router = useRouter()
  const slug = router.query.slug as string
  const post = allPosts.find((post) => post.slug.toLowerCase().includes(slug.toLowerCase()))

  return (
    <div className="mt-32">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="text-action-sm text-gray-100">
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <span className="text-action-sm text-blue-200">{post?.title}</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
        <article className="overflow-hidden rounded-lg border-[1px] border-gray-400 bg-gray-600">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            <Image src={post?.image ?? ''} alt={post?.title ?? ''} width={1000} height={1000} />
          </figure>
        </article>
      </div>
    </div>
  )
}
