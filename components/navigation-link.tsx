import { cn } from '@/utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

type NavigationLinkProps = {
  href: string
  label: string
  className?: string
  useInclude?: boolean
} & ComponentProps<'a'>

export default function NavigationLink({
  useInclude: useinclude = false,
  ...props
}: NavigationLinkProps) {
  const path = usePathname()

  return (
    <Link
      {...props}
      href={props.href}
      className={cn(
        'text-neutral-500 text-md font-medium hover:text-foreground transition',
        props.className,
        useinclude
          ? path.includes(props.href) &&
              'text-red-300 dark:text-red-400 font-semibold'
          : path === props.href &&
              'text-red-300 dark:text-red-400 font-semibold',
      )}
    >
      <span>{props.label}</span>
    </Link>
  )
}
