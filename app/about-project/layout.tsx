import { Inter } from 'next/font/google'

import AboutSidebarNav from '@/components/about-sidebar-nav'

import { cn } from '@/utils/cn'

const family = Inter({ subsets: ['latin'] })

export default function AboutProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="lg:max-w-7xl lg:mx-auto px-6 flex justify-center flex-grow w-full gap-4 py-8">
      <AboutSidebarNav className="max-sm:hidden flex-shrink-0" />
      <div className={cn(family.className, 'w-full flex-shrink')}>
        {children}
      </div>
    </main>
  )
}
