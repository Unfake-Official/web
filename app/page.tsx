import { Sora } from 'next/font/google'
import { audios, github, huggingFace } from '@/data'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LinkPreview } from '@/components/ui/link-preview'
import { ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import AudioCardSkeleton from '@/components/skeletons/audio-card-skeleton'
import GlobleImplementationSkeleton from '@/components/skeletons/globe-implementation-skeleton'

const sora = Sora({ subsets: ['latin'] })

const AudioCard = dynamic(() => import('@/components/audio-card'), {
  ssr: false,
  loading: () => <AudioCardSkeleton />,
})

const GlobeImplementation = dynamic(
  () => import('@/components/globe-implementation'),
  {
    ssr: false,
    loading: () => <GlobleImplementationSkeleton />,
  },
)

export default function Home() {
  return (
    <main>
      <section className="relative w-full flex justify-center">
        <div className="z-10 h-full w-full dark:bg-background bg-background dark:bg-grid-white/[0.05] bg-grid-black/[0.09] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        </div>

        <div className="z-20 relative py-32 mx-auto">
          <div className="flex flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-4 md:gap-2 px-6 lg:px-0">
              <h3 className="uppercase tracking-widest text-xs text-neutral-700 dark:text-neutral-300 bg-neutral-200/80 dark:bg-neutral-200/20 border border-neutral-400 rounded-full py-1 px-4">
                Unfake
              </h3>
              <h1
                className={`${sora.className} md:leading-[4rem] lg:leading-[5.25rem] max-w-5xl text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight text-foreground text-center`}
              >
                Entre com uma dúvida, saia com uma{' '}
                <span className="bg-gradient-to-r from-red-300 via-pink-300 to-purple-300 text-transparent bg-clip-text bg-repeat font-medium relative">
                  Resposta
                  <span className="absolute inset-x-0 max-md:bottom-[4px] max-lg:bottom-[7px] max-xl:bottom-[10px] xl:bottom-[10px] max-md:h-[2px] h-[3px] bg-gradient-to-r from-red-300 via-pink-300 to-purple-300" />
                </span>
              </h1>
              <p className="max-w-lg md:max-w-2xl leading-5 md:leading-7 text-sm md:text-lg font-medium text-neutral-600 dark:text-neutral-400 text-center">
                Com o avanço das tecnologias e uma maior facilidade para a
                criação de criação de áudios falsos, o Unfake surge como uma
                esperança de deixar o mundo um lugar um pouco mais confiável.
              </p>
            </div>
            <div className="relative">
              <Link href="/classify">
                <Button
                  variant="outline"
                  size="lg"
                  className="relative w-fit px-10 md:px-12 py-4 md:py-6 rounded-xl dark:text-neutral-200 text-neutral-900 text-sm md:text-md dark:font-light font-normal tracking-wider animate-shimmer bg-[linear-gradient(110deg,#e3e5e8,45%,#ba5b5b,55%,#e3e5e8)] dark:bg-[linear-gradient(110deg,#000103,45%,#4F1616,55%,#000103)] bg-[length:200%_100%] border border-neutral-500 hover:border-neutral-600 dark:border-neutral-700  dark:hover:border-neutral-600 transition group drop-shadow-[0_0_30px_rgba(0,0,0,1)] dark:drop-shadow-[0_0_30px_rgba(255,255,255,0.20)]"
                >
                  <div className="flex items-center gap-2">
                    <span>Identificar agora</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="z-40 w-full flex justify-center">
        <div className="px-6 lg:px-0 pt-8 pb-16 flex flex-col gap-16 items-center">
          <div className="flex flex-col items-center gap-6">
            <h2
              className={`${sora.className} leading-[4.5rem] max-w-4xl text-3xl md:text-4xl lg:text-5xl font-normal text-foreground text-center`}
            >
              O que alcançamos
            </h2>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-4">
            <div className="flex flex-col items-center justify-center gap-4 border border-red-200 dark:border-red-400 bg-red-500/10 dark:bg-red-600/10 hover:bg-red-500/20 dark:hover:bg-red-700/20 transition backdrop-blur-sm rounded-xl p-8 group">
              <h3 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-600 to-red-300 dark:from-red-500 dark:to-red-200 text-transparent bg-clip-text relative">
                96%
                <span className="absolute inset-x-0 -bottom-px h-[2px] bg-gradient-to-r from-red-600 to-red-300 dark:from-red-500 dark:to-red-200 opacity-0 transition-transform duration-200 transform scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 origin-center"></span>
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 max-w-[15rem] text-center">
                De precisão em identificar Deep Fakes de áudio
              </p>
            </div>
            <div className="col-span-2 flex flex-col items-center sm:items-start gap-4 border border-red-200 dark:border-red-300 bg-red-500/10 dark:bg-red-600/10 hover:bg-red-500/20 dark:hover:bg-red-700/20 transition rounded-xl p-8 group">
              <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-600 to-red-300 dark:from-red-500 dark:to-red-200 text-transparent bg-clip-text relative text-center sm:text-left">
                Uma arquitetura robusta
                <span className="absolute inset-x-0 -bottom-px h-[2px] bg-gradient-to-r from-red-600 to-red-300 dark:from-red-500 dark:to-red-200 opacity-0 transition-transform duration-200 transform scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 origin-center"></span>
              </h3>
              <p className="max-w-md text-neutral-700 dark:text-neutral-300 text-center sm:text-left">
                Usamos diversas técnicas avançadas de inteligência artificial,
                como Redes Neurais Convolucionais, Redes Adversárias Generativas
                e Tranferência de Aprendizado
              </p>
            </div>
            <div className="col-span-2 flex flex-col items-center sm:items-start justify-center gap-4 border border-red-200 dark:border-red-300 bg-red-500/10 dark:bg-red-600/10 hover:bg-red-500/20 dark:hover:bg-red-700/20 transition rounded-xl p-8 group">
              <h3 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-600 to-red-300 dark:from-red-500 dark:to-red-200 text-transparent bg-clip-text relative text-center sm:text-left">
                100K+
                <span className="absolute inset-x-0 -bottom-px h-[2px] bg-gradient-to-r from-red-600 to-red-300 dark:from-red-500 dark:to-red-200 opacity-0 transition-transform duration-200 transform scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 origin-center"></span>
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 max-w-sm text-center sm:text-left">
                Espectrogramas de áudios usados no treinamento do modelo
                classificatório
              </p>
            </div>
            <div className="flex flex-col items-center justify-center border border-red-200 dark:border-red-300 bg-red-500/10 dark:bg-red-600/10 hover:bg-red-500/20 dark:hover:bg-red-700/20 transition backdrop-blur-lg rounded-xl p-8">
              <p className="text-foreground text-center max-w-[15rem]">
                Um{' '}
                <span className="bg-red-300/50 border border-red-200 dark:border-red-500 px-2 rounded-sm font-semibold">
                  dataset diverso
                </span>
                , que inclui espectrogramas de áudios naturais e com alterações
                para aumentar a roustez do modelo.{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="z-40 w-full flex justify-center">
        <div className="px-6 lg:px-0 pt-16 pb-16 flex flex-col gap-16 items-center">
          <div className="flex flex-col items-center gap-6">
            <h2
              className={`${sora.className} md:leading-[4.5rem] max-w-4xl text-3xl md:text-4xl lg:text-5xl font-normal text-foreground text-center`}
            >
              Veja alguns resultados
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-6">
            {audios.map((audio, index) => {
              return (
                <AudioCard
                  key={index}
                  source={audio.source}
                  isPredictedTrue={audio.inference}
                  isAudioTruthfull={audio.label}
                />
              )
            })}
          </div>
          <div className="relative">
            <Link href="/classify">
              <Button
                variant="outline"
                size="lg"
                className="relative w-fit px-10 md:px-12 py-4 md:py-6 rounded-xl text-neutral-900 dark:text-neutral-200 text-sm md:text-md font-normal dark:font-light tracking-wider bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-900 border border-neutral-400 dark:border-neutral-700  hover:border-neutral-500 dark:hover:border-neutral-500 transition group drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_30px_rgba(255,255,255,0.20)]"
              >
                <div className="flex items-center gap-2">
                  <span>Testar com meus áudios</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="z-40 w-full flex justify-center relative">
        <div className="z-10 h-full w-full dark:bg-background bg-background dark:bg-grid-white/[0.05] bg-grid-black/[0.09] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        </div>

        <div className="z-20 px-6 lg:px-0 pt-16 pb-32 flex flex-col gap-4 items-center">
          <div className="flex flex-col items-center gap-4 md:gap-2">
            <h1
              className={`${sora.className} md:leading-[5.5rem] max-w-5xl text-3xl md:text-4xl lg:text-5xl font-normal text-foreground text-center`}
            >
              Esperamos poder ajudar globalmente
            </h1>
            <p className="max-w-lg md:max-w-2xl leading-5 md:leading-7 text-sm md:text-lg font-medium text-neutral-600 dark:text-neutral-400 text-center">
              Tudo que propomos e produzimos é Open-Source e está disponível nas
              plataformas{' '}
              <LinkPreview url={github} className="font-medium">
                GitHub
              </LinkPreview>{' '}
              e{' '}
              <LinkPreview url={huggingFace} className="font-medium">
                HuggingFace
              </LinkPreview>
              . Queremos poder incentivar pesquisar futuras na área em qualquer
              lugar do mundo.
            </p>
          </div>
          <div className="flex justify-center items-center relative">
            <GlobeImplementation />
          </div>
        </div>
      </section>
      <div className="z-10 absolute hidden md:block size-40 dark:size-40 rounded-full left-[15%] top-[25rem] bg-gradient-to-r from-red-700 dark:from-red-300 to-pink-700 dark:to-pink-300 blur-blob" />
      <div className="z-10 absolute hidden md:block size-40 dark:size-36 rounded-full right-[10%] top-[45rem] bg-orange-700 dark:bg-orange-300 blur-blob" />
      <div className="z-10 absolute hidden md:block size-36 dark:size-32 rounded-full left-[30%] top-[85rem] bg-red-700 dark:bg-red-300 blur-blob" />
    </main>
  )
}
