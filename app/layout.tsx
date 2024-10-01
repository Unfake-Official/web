import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Sofia_Sans } from 'next/font/google'
import '@/styles/globals.css'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { cn } from '@/utils/cn'
import { ThemeProvider } from '@/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { baseUrl } from '@/data'

const family = Sofia_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Unfake',
    default: 'Unfake',
  },
  description: 'Unfake: Entre com uma Dúvida, saia com uma Pergunta',
  openGraph: {
    title: 'Unfake',
    description: 'Unfake: Entre com uma Dúvida, saia com uma Pergunta.',
    url: baseUrl,
    siteName: 'Unfake',
    images: [
      {
        url: '/images/opengraph-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(family.className, 'bg-background min-h-screen relative')}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col justify-between">
            <Header />
            {children}
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
