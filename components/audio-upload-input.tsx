import { cn } from '@/utils/cn'
import { Upload } from 'lucide-react'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useToast } from './ui/use-toast'
import { IFile } from './audio-upload'

type AudioUploadInputProps = {
  files: IFile[]
  setFiles: Dispatch<SetStateAction<IFile[]>>
}

export default function AudioUploadInput({
  files,
  setFiles,
}: AudioUploadInputProps) {
  const [isDragActive, setIsDragActive] = useState(false)
  const { toast } = useToast()

  function addFiles(fileList: FileList) {
    const filesToValidate = Array.from(fileList)

    const validFiles = filesToValidate.filter(
      (file) => !files.some((existingFile) => existingFile.name === file.name),
    )

    if (files.length + validFiles.length > 3) {
      toast({
        title: 'Muitos arquivos!',
        description:
          'Você pode carregar no máximo 3 áudios de uma vez para serem enviados.',
      })
    } else {
      const filesToInclude = validFiles.map((file: File) => {
        return {
          file,
          name: file.name,
          progress: 0,
          prediction: undefined,
          accuracy: undefined,
          status: 'picked',
        } as IFile
      })

      setFiles([...files, ...filesToInclude])
    }

    setIsDragActive(false)
  }

  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    if (e.type === 'dragenter' || e.type === 'dragover') setIsDragActive(true)
    else setIsDragActive(false)
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      addFiles(e.dataTransfer.files)
      e.dataTransfer.clearData()
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()

    if (e.target.files && e.target.files[0]) {
      addFiles(e.target.files)
    }
  }

  return (
    <label htmlFor="dropzone-area">
      <div
        className={cn(
          'cursor-pointer w-full flex flex-auto flex-col items-center justify-between gap-6 py-12 px-4 border-2 border-dashed rounded-lg transition',
          isDragActive
            ? 'border-neutral-400 dark:border-neutral-200 bg-neutral-600/30'
            : 'border-neutral-500 dark:border-neutral-300 bg-neutral-600/10',
        )}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center gap-3">
          <Upload className="text-neutral-600 dark:text-neutral-500 h-6 w-6 md:h-9 md:w-9" />
          <p className="text-neutral-800 dark:text-neutral-200 font-semibold text-xl">
            Carregar arquivos
          </p>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300 dark:font-light font-normal text-center max-w-md">
          Selecione os áudios desejados ou arraste-os até aqui. Apenas arquivos
          no formato .wav são aceitos.
        </p>
        <input
          multiple
          onChange={handleChange}
          accept="audio/*"
          id="dropzone-area"
          type="file"
          className="hidden"
        />
      </div>
    </label>
  )
}
