import { Header } from '../header'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col dark">
      <Header />
      <main className="flex flex-1 flex-col mb-12">
        {children}
      </main>
    </div>
  )
}
