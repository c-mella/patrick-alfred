'use client'

import { useRef } from 'react'

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
    <div className="musik__tracks">
      {tracks.map((track, i) => (
        <div key={track.src} className="musik__tracks__song">
          <div className="musik__tracks__song__title">
            {track.number}. {track.title}
          </div>
          <audio
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
