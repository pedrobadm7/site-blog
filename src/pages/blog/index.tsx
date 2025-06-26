import Head from 'next/head'

import { BlogList } from '@/templates/blog'

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Site.set</title>
        <meta name="description" content="Artigos sobre desenvolvimento, design e negócios" />
      </Head>
      <BlogList />
    </>
  )
}
