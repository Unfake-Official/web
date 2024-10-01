'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { routes } from '@/data'
import { ThemeSwitcher } from '../theme-switcher'
import { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'
import MobileNav from './mobile-nav'
import NavigationLink from '../navigation-link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={cn(
        'sticky top-0 left-0 z-50 w-full py-2 backdrop-blur-lg border-b border-transparent transition',
        scrolled && 'border-muted border-neutral-500',
      )}
    >
      <div className="flex justify-between items-center max-xl lg:max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 md:gap-12">
          <div className="w-fit">
            <Link
              href="/"
              className="text-lg font-semibold tracking-wider text-foreground"
            >
              <h2 className="">Unfake</h2>
            </Link>
          </div>
          <div className="max-sm:hidden space-x-6">
            {routes
              .filter((route) => route.destination !== '/')
              .map((route) => {
                return (
                  <NavigationLink
                    href={route.destination}
                    key={route.key}
                    label={route.label}
                    useInclude
                  />
                )
              })}
          </div>
        </div>
        <div className="flex gap-2">
          <ThemeSwitcher />
          <div className="hidden sm:block">
            <Link href="/classify">
              <Button
                variant="default"
                className="text-foreground bg-red-300/50 border border-red-300 dark:border-red-500 hover:bg-red-300/70 group px-4 h-10"
                size="sm"
              >
                <div className="flex items-center gap-2">
                  <span>Classificar</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
                </div>
              </Button>
            </Link>
          </div>
          <div className="max-sm:block hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  )
}
