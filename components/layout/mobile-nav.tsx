'use client'

import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
  SheetHeader,
} from '../ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { aboutNavbarRoutes, github, huggingFace, routes } from '@/data'
import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import NavigationLink from '../navigation-link'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border text-neutral-600 border-neutral-400 dark:border-neutral-500 dark:text-neutral-300"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="backdrop-blur-xl border-l-neutral-400 dark:border-l-neutral-600">
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold tracking-wider text-neutral-200 dark:text-foreground">
            Unfake
          </SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col gap-6 py-12">
            {routes
              .filter((route) => route.destination !== '/about-project')
              .map((route) => {
                return (
                  <NavigationLink
                    href={route.destination}
                    key={route.key}
                    label={route.label}
                    onClick={() => setOpen(false)}
                    className="text-lg text-neutral-400 dark:text-neutral-600"
                  />
                )
              })}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-neutral-400 dark:text-neutral-600 text-lg font-medium pt-0">
                  Sobre o projeto
                </AccordionTrigger>
                <AccordionContent className="px-4 flex flex-col gap-4">
                  {aboutNavbarRoutes.map((route) => {
                    return (
                      <NavigationLink
                        href={route.destination}
                        key={route.key}
                        label={route.label}
                        useInclude={false}
                        onClick={() => setOpen(false)}
                        className="text-lg text-neutral-400 dark:text-neutral-600"
                      />
                    )
                  })}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <SheetFooter className="flex flex-row items-center gap-6 py-8">
            <>
              <Link href={github} target="_blank" className="group block">
                <span className="text-neutral-400 dark:text-neutral-600 text-md font-normal group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition">
                  GitHub
                </span>
              </Link>
            </>
            <>
              <Link href={huggingFace} target="_blank" className="group block">
                <span className="text-neutral-400 dark:text-neutral-600 text-md font-normal group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition">
                  HuggingFace
                </span>
              </Link>
            </>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}
