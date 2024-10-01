import Mdx from '@/components/mdx'
import { baseUrl } from '@/data'
import { openGraphImage } from '@/utils/shared-metadata'
import { allAboutPages, AboutPage } from 'contentlayer/generated'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Sobre o projeto | Unfake',
  openGraph: {
    title: 'Sobre o projeto | Unfake',
    url: baseUrl + '/about-project',
    ...openGraphImage,
  },
}

export default function Page() {
  const page = allAboutPages.find(
    (page: AboutPage) => page._raw.flattenedPath === 'what-is-it',
  )
  if (!page) notFound()

  return (
    <article className="mx-auto max-w-3xl">
      <div className="mb-12">
        <h1 className="text-3xl font-bold">{page.title}</h1>
      </div>
      <Mdx code={page.body.code} />
    </article>
  )
}
