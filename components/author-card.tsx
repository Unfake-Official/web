import Github from './icons/github'
import Link from 'next/link'
import Instagram from './icons/instagram'
import LinkedIn from './icons/linkedin'
import X from './icons/x'
import { ImageOff } from 'lucide-react'
import dynamic from 'next/dynamic'
import Skeleton from './ui/skeleton'

type SocialAccounts = Partial<{
  github: string
  linkedIn: string
  instagram: string
  x: string
}>

type AuthorCardProps = Partial<{
  image?: string
  description?: string
  social?: SocialAccounts
}> & { name: string }

const Image = dynamic(() => import('next/image'), {
  ssr: false,
  loading: () => (
    <Skeleton className="rounded-full bg-neutral-300 dark:bg-neutral-600 w-60 h-60 border-2 border-red-700" />
  ),
})

export default function AuthorCard(props: AuthorCardProps) {
  return (
    <div className="transition rounded-lg flex flex-col justify-center sm:flex-row items-center gap-4">
      {props.image === undefined ? (
        <div className="w-full h-[25rem] flex flex-col items-center justify-center gap-6">
          <ImageOff className="text-neutral-500 h-12 w-12" />
          <p className="text-neutral-500 font-medium text-xl">
            Nenhuma imagem foi fornecida
          </p>
        </div>
      ) : (
        <div className="relative flex-grow flex-shrink-0">
          <Image
            src={props.image}
            alt={props.name}
            width={240}
            height={240}
            className="rounded-full border-2 border-red-400 dark:border-red-700"
            placeholder="blur"
            blurDataURL="true"
            draggable="false"
          />
        </div>
      )}
      <div className="space-y-3 px-3 sm:w-full">
        <div className="space-y-0.5">
          <span className="block uppercase tracking-wider text-neutral-500 text-sm">
            Nome
          </span>
          <h4 className="text-neutral-800 dark:text-neutral-200 text-lg font-medium">
            {props.name}
          </h4>
        </div>
        {props.description !== null && (
          <div className="space-y-0.5">
            <span className="block uppercase tracking-wider text-neutral-500 text-sm">
              Descrição
            </span>
            <h4 className="text-neutral-800 dark:text-neutral-300 text-lg font-medium max-w-full">
              {props.description}
            </h4>
          </div>
        )}
        {props.social !== undefined ? (
          <div className="space-y-0.5">
            <span className="block uppercase tracking-wider text-neutral-500 text-sm">
              Social
            </span>
            <div className="flex items-center gap-2">
              {props.social.linkedIn !== undefined ? (
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-neutral-500 dark:border-neutral-600 hover:border-neutral-700 dark:hover:border-neutral-400 transition p-2 group">
                  <Link href={props.social.linkedIn}>
                    <LinkedIn className="h-5 w-5 text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-600 dark:group-hover:text-neutral-400 transition" />
                  </Link>
                </div>
              ) : (
                <></>
              )}

              {props.social.instagram !== undefined ? (
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-neutral-500 dark:border-neutral-600 hover:border-neutral-700 dark:hover:border-neutral-400 transition p-2 group">
                  <Link href={props.social.instagram}>
                    <Instagram className="h-5 w-5 text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-600 dark:group-hover:text-neutral-400 transition" />
                  </Link>
                </div>
              ) : (
                <></>
              )}

              {props.social.github !== undefined ? (
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-neutral-500 dark:border-neutral-600 hover:border-neutral-700 dark:hover:border-neutral-400 transition p-2 group">
                  <Link href={props.social.github}>
                    <Github className="h-5 w-5 text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-600 dark:group-hover:text-neutral-400 transition" />
                  </Link>
                </div>
              ) : (
                <></>
              )}

              {props.social.x !== undefined ? (
                <Link href={props.social.x}>
                  <X className="h-6 w-7 text-neutral-300" />
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
