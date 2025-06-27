import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Avatar } from '@/components/avatar'
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
  const post = allPosts.find((post) => post.slug.toLowerCase() === slug.toLowerCase())

  const publishedDate = new Date(post?.date ?? '').toLocaleDateString('pt-BR')

  if (!post) return null

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
            <Image src={post.image ?? ''} alt={post.title ?? ''} width={1000} height={1000} />
          </figure>

          <header className="p-4 pb-0 md:p-6 lg:p-12">
            <h1 className="mb-6 text-balance text-heading-lg text-gray-100 md:text-heading-xl lg:text-heading-xl">
              {post.title}
            </h1>

            <Avatar.Container>
              <Avatar.Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <Avatar.Content>
                <Avatar.Title>{post?.author.name}</Avatar.Title>
                <Avatar.Description>
                  publicado em <time dateTime={post.date}>{publishedDate}</time>
                </Avatar.Description>
              </Avatar.Content>
            </Avatar.Container>
          </header>
        </article>
      </div>
    </div>
  )
}
