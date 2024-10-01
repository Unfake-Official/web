'use client'

import { aboutNavbarRoutes } from '@/data'
import { cn } from '@/utils/cn'
import { ComponentProps } from 'react'
import NavigationLink from './navigation-link'

type AboutSidebarNavProps = {
  className?: string
} & ComponentProps<'div'>

export default function AboutSidebarNav(props: AboutSidebarNavProps) {
  return (
    <aside {...props} className={cn('flex flex-col gap-4', props.className)}>
      {aboutNavbarRoutes.map((route) => {
        return (
          <NavigationLink
            href={route.destination}
            label={route.label}
            key={route.key}
            useInclude={false}
          />
        )
      })}
    </aside>
  )
}
