import { Sora } from 'next/font/google'
import { authors, baseUrl } from '@/data'
import { Metadata } from 'next'
import AuthorCard from '@/components/author-card'
import { openGraphImage } from '@/utils/shared-metadata'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Autores',
  description: 'Conheça o time que ajudou a construir o projeto.',
  openGraph: {
    title: 'Autores | Unfake',
    url: baseUrl + '/authors',
    ...openGraphImage,
  },
}

export default function Authors() {
  return (
    <main className="lg:max-w-7xl lg:mx-auto px-6 flex justify-center flex-grow w-full">
      <div className="w-full pt-8 pb-16 mx-auto">
        <div className="flex flex-col gap-8">
          <h2
            className={`${sora.className} max-w-4xl text-3xl md:text-4xl font-medium text-neutral-800 dark:text-neutral-200`}
          >
            Participantes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-8">
            {authors.map((author, index) => {
              return (
                <AuthorCard
                  key={index}
                  image={author.image}
                  name={author.name}
                  description={author.description}
                  social={author.social}
                />
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
