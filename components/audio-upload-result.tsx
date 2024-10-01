import { CircleHelp, Info, Trash2, Volume2 } from 'lucide-react'
import { Button } from './ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog'
import { Progress } from './ui/progress'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import Skeleton from './ui/skeleton'
import { IFile } from './audio-upload'

type AudioUploadResultProps = {
  file: IFile
  handleDelete: (file: IFile) => void
}

export default function AudioUploadResult(props: AudioUploadResultProps) {
  const styles = {
    real: <span className="text-emerald-600">Natural</span>,
    fake: <span className="text-red-600">Deep Fake</span>,
  }

  return (
    <div className="w-full border border-neutral-400 dark:border-neutral-600 rounded-md overflow-hidden flex flex-col">
      <div className="bg-neutral-200 dark:bg-neutral-800 border-b border-neutral-400 dark:border-neutral-600 p-4 space-y-4">
        <div className="flex justify-between">
          <Button
            variant="outline"
            size="icon"
            className="bg-neutral-100 dark:bg-neutral-900 border hover:bg-bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 cursor-default"
          >
            <Volume2 className="text-neutral-700 dark:text-neutral-300 h-5 w-5" />
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600 text-neutral-800 dark:text-neutral-200 outline-none group"
              >
                <Trash2 className="text-neutral-700 dark:text-neutral-300 h-5 w-5 cursor-pointer group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="outline-none border border-neutral-500">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-neutral-800 dark:text-neutral-200">
                  Remover áudio?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-neutral-600 dark:text-neutral-400 text-md">
                  Essa ação vai remover o áudio selecionado da lista para
                  classificação e não poderá ser desfeita.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel asChild>
                  <Button
                    variant="outline"
                    className="border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600 text-neutral-800 dark:text-neutral-200 outline-none"
                  >
                    Cancelar
                  </Button>
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => props.handleDelete(props.file)}
                  className="text-foreground bg-red-300/50 border border-red-300 dark:border-red-500 hover:bg-red-300/70 outline-none"
                >
                  Remover áudio
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div>
          <span className="text-xl">{props.file.name}</span>
        </div>
      </div>
      <div className="bg-neutral-100 dark:bg-neutral-900 p-4 h-full flex items-center">
        {props.file.status === 'picked' && (
          <div className="w-full py-4 flex flex-col justify-center items-center gap-4 text-neutral-500 dark:text-neutral-500">
            <CircleHelp className="size-10" />
            <p className="text-center text-neutral-600 dark:text-neutral-400">
              Áudio ainda não classificado.
            </p>
          </div>
        )}
        {props.file.status === 'inProgress' && (
          <div className="w-full space-y-4">
            <div className="space-y-2">
              <p className="text-lg">Upload</p>
              <Progress value={props.file.progress} className="h-[6px]" />
            </div>
            <div className="space-y-2">
              <p className="text-lg">Resultado</p>
              <div className="grid grid-cols-2 grid-rows-2 gap-y-1">
                <div className="flex items-center gap-1">
                  <p className="text-md text-neutral-500 dark:text-neutral-400">
                    Classificação
                  </p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-5 w-5 text-neutral-400 hover:text-neutral-500 cursor-pointer transition" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-neutral-200 dark:bg-neutral-900 border border-neutral-400 dark:border-neutral-700 p-2">
                        <div className="backdrop-blur-md max-w-[15rem]">
                          <p className="font-normal text-neutral-800 dark:text-neutral-300">
                            Uma{' '}
                            <span className="font-bold text-red-600">
                              Deep Fake
                            </span>{' '}
                            significa que o áudio foi sintetizado
                            artificialmente. Já{' '}
                            <span className="font-bold text-emerald-600">
                              Natural
                            </span>{' '}
                            significa que o áudio é autêntico.
                          </p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  {':'}
                </div>
                <div>
                  {props.file.prediction === undefined ? (
                    <div className="flex justify-center">
                      <Skeleton className="w-2/3 h-6 bg-neutral-300 dark:bg-neutral-600" />
                    </div>
                  ) : (
                    <p className="text-lg text-center">
                      {styles[props.file.prediction]}
                    </p>
                  )}
                </div>
                <div className="flex items-center">
                  <p className="text-md text-neutral-500 dark:text-neutral-400">
                    Acurácia:
                  </p>
                </div>
                <div>
                  {props.file.accuracy === undefined ? (
                    <div className="flex justify-center">
                      <Skeleton className="w-2/3 h-6 bg-neutral-300 dark:bg-neutral-600" />
                    </div>
                  ) : (
                    <p className="text-lg text-center">
                      {props.file.accuracy.toFixed(1)}%
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
