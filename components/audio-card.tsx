'use client'

import { useTheme } from 'next-themes'
import AudioPlayer from 'react-modern-audio-player'

type AudioCardsProps = {
  source: string
  isPredictedTrue: boolean
  isAudioTruthfull: boolean
}

export default function AudioCard(props: AudioCardsProps) {
  const { theme } = useTheme()

  const playList = [
    {
      src: props.source,
      id: 1,
    },
  ]

  return (
    <div className="border border-neutral-500 rounded-lg overflow-hidden hover:-translate-y-2 transition">
      <div className="flex flex-col">
        <div className="border-b border-neutral-500">
          <AudioPlayer
            playList={playList}
            activeUI={{
              playButton: true,
              volume: true,
              volumeSlider: true,
              repeatType: true,
              trackTime: true,
              progress: 'bar',
            }}
            placement={{
              interface: {
                templateArea: {
                  trackInfo: 'row2-2',
                  trackTimeCurrent: 'row3-1',
                  progress: 'row3-2',
                  trackTimeDuration: 'row3-3',
                  playButton: 'row4-2',
                  repeatType: 'row4-1',
                  volume: 'row4-3',
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } as any,
              },
            }}
            rootContainerProps={{
              colorScheme: theme === 'light' ? 'light' : 'dark',
            }}
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-y-1 p-4">
          <div className="flex items-center">
            <p className="text-md text-neutral-600 dark:text-neutral-400">
              Nossa classificação:
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p className="text-lg text-center">
              {props.isPredictedTrue ? 'Áudio Real' : 'Deep Fake'}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-md text-neutral-600 dark:text-neutral-400">
              Acurácia:
            </p>
          </div>
          <div>
            <p className="text-lg text-center">96%</p>
          </div>
          <div className="flex items-center">
            <p className="text-md text-neutral-600 dark:text-neutral-400">
              Veracidade:
            </p>
          </div>
          <div>
            <p className="text-lg text-center">
              {props.isAudioTruthfull ? 'Áudio Real' : 'Deep Fake'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
