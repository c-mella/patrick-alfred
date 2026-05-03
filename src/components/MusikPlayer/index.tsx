'use client'

import { useRef } from 'react'
import styles from './MusikPlayer.module.scss'

interface Track {
  number: string
  title: string
  src: string
}

interface MusikPlayerProps {
  tracks: Track[]
}

export default function MusikPlayer({ tracks }: MusikPlayerProps) {
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([])

  function handlePlay(index: number) {
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) audio.pause()
    })
  }

  return (
    <div className={styles.tracks}>
      {tracks.map((track, i) => (
        <div key={track.src} className={styles.song}>
          <span className={styles.songTitle}>
            {track.number}. {track.title}
          </span>
          <audio
            className={styles.audio}
            controls
            ref={(el) => { audioRefs.current[i] = el }}
            onPlay={() => handlePlay(i)}
          >
            <source src={track.src} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  )
}
