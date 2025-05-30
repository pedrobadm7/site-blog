import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const segments = router.query.slug as string[]

  return <div>Post {segments?.join('/')}</div>
}
