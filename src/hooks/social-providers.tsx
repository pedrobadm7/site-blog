import { AtSign, Facebook, Linkedin, Slack, Twitter } from 'lucide-react'

export type ShareConfig = {
  url: string
  title?: string
  text?: string
}

export type SocialProvider = keyof typeof SOCIAL_PROVIDERS

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: 'Linkedin',
    icon: <Linkedin className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite?url=${encodeURIComponent(config.url)}`,
  },
  facebook: {
    name: 'Facebook',
    icon: <Facebook className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`,
  },
  slack: {
    name: 'Slack',
    icon: <Slack className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.text || '')}`,
  },
  twitter: {
    name: 'Twitter',
    icon: <Twitter className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.text || '')}`,
  },
  threads: {
    name: 'Threads',
    icon: <AtSign className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://threads.net/intent/post?text=${encodeURIComponent(config.text || '')}`,
  },
}
