import { ThemeProvider } from '@/components/providers'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="blog-theme">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
