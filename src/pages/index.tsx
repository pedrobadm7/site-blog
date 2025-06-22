import { allPosts } from 'contentlayer/generated'

import { LandingPage } from '@/templates/landing-page'

export default function Home() {
  const posts = allPosts

  console.log(posts)

  return <LandingPage />
}
