'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/utils/cn'
import { ArrowLeft } from 'lucide-react'
import { Sora } from 'next/font/google'
import { useRouter } from 'next/navigation'

const sora = Sora({ subsets: ['latin'] })

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full flex-grow">
      <p className="dark:text-neutral-400 text-neutral-600 text-xl">404</p>
      <h1 className={cn('text-5xl font-medium', sora.className)}>
        Página não encontrada
      </h1>
      <p className="dark:text-neutral-400 text-neutral-600 text-lg">
        Oops! Parece que você saiu do caminho.
      </p>
      <Button
        variant="outline"
        size="lg"
        className="relative w-fit px-10 md:px-12 py-4 md:py-6 rounded-xl text-neutral-900 dark:text-neutral-200 text-sm md:text-md font-normal dark:font-light tracking-wider bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-900 border border-neutral-400 dark:border-neutral-700  hover:border-neutral-500 dark:hover:border-neutral-500 transition group drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_30px_rgba(255,255,255,0.20)]"
        onClick={() => router.back()}
      >
        <div className="flex items-center gap-3">
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition" />
          <span>Recalcular rota</span>
        </div>
      </Button>
    </div>
  )
}
