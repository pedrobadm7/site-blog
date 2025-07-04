import { ArrowRight, Store } from 'lucide-react'
import Link from 'next/link'

import { Button } from '../ui/button'

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-cyan-950 to-gray-500 py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="w-fit rounded-full bg-cyan-300 p-4">
            <Store className="text-cyan-100" />
          </div>

          <h2 className="text-balance text-heading-xl text-gray-100">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button variant="primary" asChild className="mt-6">
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
