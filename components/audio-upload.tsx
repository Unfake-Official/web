'use client'

import { useState } from 'react'
import AudioUploadInput from './audio-upload-input'
import { Sora } from 'next/font/google'
import { Button } from './ui/button'
import AudioUploadResult from './audio-upload-result'
import { CircleHelp, Trash } from 'lucide-react'
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
import api from '@/utils/api'

const sora = Sora({ subsets: ['latin'] })

export type AudioPrediction = 'fake' | 'real'
export type AudioStatus = 'picked' | 'inProgress'

export interface IFile {
  file: File
  name: string
  progress: number
  prediction?: AudioPrediction
  accuracy?: number
  status: AudioStatus
}

export default function AudioUpload() {
  const [files, setFiles] = useState<IFile[]>([])

  function handleClearAll() {
    setFiles([])
  }

  function updateFile(name: string, data: Partial<IFile>) {
    setFiles((prev) =>
      prev.map((file) => {
        return name === file.name ? { ...file, ...data } : file
      }),
    )
  }

  function handleClassifyAudios() {
    files.forEach((uploadedFile: IFile) => {
      if (uploadedFile.status === 'inProgress') return

      updateFile(uploadedFile.name, { ...uploadedFile, status: 'inProgress' })

      const data = new FormData()
      data.append('audio', uploadedFile.file, uploadedFile.name)

      api
        .post('/classify', data, {
          onUploadProgress: (event) => {
            const progress = Math.floor((event.loaded / event.total!) * 100)

            updateFile(uploadedFile.name, {
              progress,
            })
          },
        })
        .then((response) => {
          updateFile(uploadedFile.name, {
            prediction: response.data.classification,
            accuracy: response.data.accuracy,
          })
        })
    })
  }

  function handleDeleteAudio(file: IFile) {
    const updatedList = [...files]
    updatedList.splice(files.indexOf(file), 1)
    setFiles(updatedList)
  }

  return (
    <div className="space-y-4">
      <AudioUploadInput files={files} setFiles={setFiles} />
      <div className="space-y-2">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <h4
            className={`${sora.className} w-full text-left text-xl font-normal text-neutral-800 dark:text-neutral-200`}
          >
            Arquivos selecionados
          </h4>
          <div className="w-full flex justify-end gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600 text-neutral-800 dark:text-neutral-200 outline-none"
                >
                  <div className="flex items-center gap-2">
                    <Trash className="h-5 w-5" />
                    <span>Limpar todos</span>
                  </div>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="outline-none border border-neutral-500">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-neutral-800 dark:text-neutral-200">
                    Limpar toda seleção?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-neutral-600 dark:text-neutral-400 text-md">
                    Essa ação vai limpar todos os áudios selecionados, e não
                    poderá ser desfeita.
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
                    onClick={handleClearAll}
                    className="text-foreground bg-red-300/50 border border-red-300 dark:border-red-500 hover:bg-red-300/70 outline-none"
                  >
                    Limpar todos
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button
              variant="default"
              onClick={handleClassifyAudios}
              className="text-foreground bg-red-300/50 border border-red-300 dark:border-red-500 hover:bg-red-300/70 outline-none"
            >
              <div className="flex items-center gap-2">
                <CircleHelp className="h-5 w-5 group-hover:translate-x-1 transition" />
                <span>Classificar</span>
              </div>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {files.length > 0 &&
            files.map((file: IFile, key: number) => {
              return (
                <AudioUploadResult
                  file={file}
                  key={key}
                  handleDelete={handleDeleteAudio}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}
