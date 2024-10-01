'use client'

import Link from 'next/link'
import Github from '../icons/github'
import { Clipboard } from 'lucide-react'
import Image from 'next/image'
import { routes, github, huggingFace, gmail } from '@/data'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import Skeleton from '../ui/skeleton'

export default function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="w-full py-8 border-t border-neutral-500 bg-transparent">
      <div className="flex flex-col justify-start items-start gap-12 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-start items-start gap-6 md:gap-12">
          <h3 className="text-neutral-800 dark:text-neutral-200 font-medium text-lg uppercase select-none">
            Unfake
          </h3>
          <div className="flex flex-row gap-12">
            <div className="space-y-2">
              <h3 className="text-neutral-900 dark:text-neutral-200 font-medium text-md">
                Páginas
              </h3>
              <div className="flex flex-col gap-2">
                {routes.map((route) => {
                  return (
                    <Link
                      href={route.destination}
                      key={route.key}
                      className="text-neutral-500 dark:text-neutral-400 text-md font-medium hover:text-neutral-900 dark:hover:text-neutral-200 transition"
                    >
                      {route.label}
                    </Link>
                  )
                })}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-neutral-900 dark:text-neutral-200 font-medium text-md">
                Social
              </h3>
              <Link href={github} target="_blank" className="group block">
                <div className="flex items-center gap-2">
                  <Github className="h-6 w-6 text-neutral-800 dark:text-neutral-200" />
                  <span className="text-neutral-500 dark:text-neutral-400 text-md font-medium group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition">
                    GitHub
                  </span>
                </div>
              </Link>
              <Link href={huggingFace} target="_blank" className="group block">
                <div className="flex items-center gap-2">
                  <Image
                    src="/huggingface-logo.svg"
                    alt="HuggingFace Logo"
                    width={25}
                    height={25}
                  />
                  <span className="text-neutral-500 dark:text-neutral-400 text-md font-medium group-hover:text-neutral-900 dark:group-hover:text-neutral-200  transition">
                    HuggingFace
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-neutral-900 dark:text-neutral-200 font-medium text-md">
              Contato
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-md font-medium max-w-sm">
              Nos conte algo que quer saber ou relate algum problema que
              encontrou
            </p>
            <div className="flex flex-row gap-2">
              <div className="flex items-center h-10 w-full rounded-md border border-neutral-400 dark:border-neutral-500 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                {gmail}
              </div>
              {mounted ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="border text-neutral-500 border-neutral-400 dark:text-neutral-400 dark:border-neutral-500 h-10"
                  onClick={() => {
                    navigator.clipboard.writeText(gmail)
                  }}
                >
                  <Clipboard className="h-5 w-5" />
                </Button>
              ) : (
                <div>
                  <Skeleton className="h-10 w-10 bg-neutral-300 dark:bg-neutral-400" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-neutral-600 dark:text-neutral-400 text-md font-medium">
            &copy; 2024 Unfake
          </p>
        </div>
      </div>
    </footer>
  )
}
