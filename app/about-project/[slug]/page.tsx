import Mdx from '@/components/mdx'
import { baseUrl, aboutProjectMetadata } from '@/data'
import { openGraphImage } from '@/utils/shared-metadata'
import { allAboutPages, AboutPage } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps) {
  const slug = params.slug

  if (slug in aboutProjectMetadata) {
    const pageMetadata =
      aboutProjectMetadata[slug as keyof typeof aboutProjectMetadata]
    return {
      title: pageMetadata.title,
      openGraph: {
        title: `${pageMetadata.title} | Unfake`,
        url: baseUrl + '/about-project/' + slug,
        ...openGraphImage,
      },
    }
  }
}

export default function Page({ params }: PageProps) {
  const page = allAboutPages.find(
    (page: AboutPage) => page._raw.flattenedPath === params.slug,
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
