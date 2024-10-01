'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import Skeleton from './ui/skeleton'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted ? (
        <Button
          variant="outline"
          size="icon"
          className="border text-neutral-600 border-neutral-400 dark:border-neutral-500 dark:text-neutral-300"
          onClick={() =>
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }
        >
          {theme === 'dark' ? <Moon /> : <Sun />}
        </Button>
      ) : (
        <div>
          <Skeleton className="h-10 w-10 bg-neutral-300 dark:bg-neutral-400" />
        </div>
      )}
    </>
  )
}
