import { Sora } from 'next/font/google'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import AudioUpload from '@/components/audio-upload'
import { Metadata } from 'next'
import { baseUrl } from 'data'
import { openGraphImage } from '@/utils/shared-metadata'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Identificar',
  openGraph: {
    title: 'Identificar | Unfake',
    url: baseUrl + '/classify',
    ...openGraphImage,
  },
}

export default function Classify() {
  return (
    <main className="lg:max-w-7xl lg:mx-auto px-6 flex justify-center flex-grow w-full">
      <div className="pt-8 pb-16 mx-auto w-full">
        <div className="flex flex-col gap-8">
          <div className="space-y-1">
            <h2
              className={`${sora.className} max-w-4xl text-3xl md:text-4xl font-medium text-neutral-800 dark:text-neutral-200`}
            >
              Identificar
            </h2>
            <Drawer>
              <DrawerTrigger asChild>
                <p className="font-semibold text-lg cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100 text-neutral-500 dark:text-neutral-400 transition w-fit">
                  Como funciona?
                </p>
              </DrawerTrigger>
              <DrawerContent className="border-none outline-none py-12">
                <div className="mx-auto w-full max-w-2xl border-none">
                  <DrawerHeader>
                    <DrawerTitle className="text-neutral-800 dark:text-neutral-200 font-semibold text-3xl text-center">
                      Identifique uma Deep Fake
                    </DrawerTitle>
                    <DrawerDescription className="text-neutral-600 dark:text-neutral-400 text-md text-center">
                      Siga esses passos para descobrir se um áudio é uma Deep
                      Fake ou não
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-2">
                      <div className="border border-neutral-600 dark:border-neutral-400 rounded-lg p-4 flex-grow space-y-3">
                        <h3 className="text-neutral-800 dark:text-neutral-200 font-semibold text-xl">
                          1. Escolher
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          Escolha os áudios que deseja classificar e faça
                          download deles em seu dispositivo. Atente-se para a
                          extensão do arquivo: são apenas aceitos áudios com
                          extensão .wav.
                        </p>
                      </div>
                      <div className="border border-neutral-600 dark:border-neutral-400 rounded-lg p-4 flex-grow space-y-3">
                        <h3 className="text-neutral-800 dark:text-neutral-200 font-semibold text-xl">
                          2. Carregar
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          Arraste os áudios para a área acima ou clique nela
                          para selecioná-los de seu dispositivo. Atenção: Apenas
                          5 áudios poderão ser enviados de uma vez.
                        </p>
                      </div>
                      <div className="border border-neutral-600 dark:border-neutral-400 rounded-lg p-4 flex-grow space-y-3">
                        <h3 className="text-neutral-800 dark:text-neutral-200 font-semibold text-xl">
                          3. Aguardar
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          Clique em no botão Classificar e aguarde os resultados
                          serem obtidos. Isso pode levar alguns minutos.
                        </p>
                      </div>
                    </div>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button
                        variant="outline"
                        className="text-foreground bg-red-300/50 border border-red-300 dark:border-red-500 hover:bg-red-300/70 outline-none text-md"
                      >
                        Entendi
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <AudioUpload />
        </div>
      </div>
    </main>
  )
}
