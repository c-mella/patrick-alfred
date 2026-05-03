'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import styles from './VideoPlayer.module.scss'

interface VideoPlayerProps {
  src: string
  poster?: string
  title?: string
}

function formatTime(s: number): string {
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export default function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [controlsVisible, setControlsVisible] = useState(true)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    setControlsVisible(true)
    hideTimer.current = setTimeout(() => {
      if (playing) setControlsVisible(false)
    }, 2500)
  }, [playing])

  useEffect(() => {
    if (!playing) {
      if (hideTimer.current) clearTimeout(hideTimer.current)
      setControlsVisible(true)
    }
  }, [playing])

  function togglePlay() {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else          { v.pause(); setPlaying(false) }
  }

  function toggleMute() {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  function handleTimeUpdate() {
    const v = videoRef.current
    if (!v || !v.duration) return
    setCurrentTime(v.currentTime)
    setProgress((v.currentTime / v.duration) * 100)
  }

  function handleLoadedMetadata() {
    const v = videoRef.current
    if (v) setDuration(v.duration)
  }

  function handleEnded() {
    setPlaying(false)
    setProgress(0)
    setCurrentTime(0)
    if (videoRef.current) videoRef.current.currentTime = 0
  }

  function handleProgressClick(e: React.MouseEvent<HTMLDivElement>) {
    const bar = progressRef.current
    const v = videoRef.current
    if (!bar || !v) return
    const rect = bar.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    v.currentTime = ratio * v.duration
  }

  function handleFullscreen() {
    videoRef.current?.requestFullscreen?.()
  }

  return (
    <div
      className={styles.player}
      onMouseMove={scheduleHide}
      onMouseLeave={() => playing && setControlsVisible(false)}
      onTouchStart={scheduleHide}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={styles.video}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onClick={togglePlay}
        playsInline
      />

      {/* centre play/pause overlay */}
      <button
        className={`${styles.bigPlay} ${!playing || controlsVisible ? styles.visible : ''}`}
        onClick={togglePlay}
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing
          ? <PauseIcon />
          : <PlayIcon />
        }
      </button>

      {/* bottom control bar */}
      <div className={`${styles.controls} ${controlsVisible ? styles.visible : ''}`}>
        <div
          ref={progressRef}
          className={styles.progressTrack}
          onClick={handleProgressClick}
          role="slider"
          aria-label="Seek"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>

        <div className={styles.controlRow}>
          <button onClick={togglePlay} className={styles.btn} aria-label={playing ? 'Pause' : 'Play'}>
            {playing ? <PauseIcon size={14} /> : <PlayIcon size={14} />}
          </button>

          <button onClick={toggleMute} className={styles.btn} aria-label={muted ? 'Unmute' : 'Mute'}>
            {muted ? <MuteIcon /> : <VolumeIcon />}
          </button>

          <span className={styles.time}>
            {formatTime(currentTime)}{duration > 0 ? ` / ${formatTime(duration)}` : ''}
          </span>

          {title && <span className={styles.title}>{title}</span>}

          <button onClick={handleFullscreen} className={`${styles.btn} ${styles.btnRight}`} aria-label="Fullscreen">
            <FullscreenIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

function PlayIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
      <polygon points="4,2 18,10 4,18" />
    </svg>
  )
}

function PauseIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
      <rect x="3" y="2" width="5" height="16" rx="1" />
      <rect x="12" y="2" width="5" height="16" rx="1" />
    </svg>
  )
}

function VolumeIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 20 20" fill="currentColor">
      <path d="M3 7h3l5-4v14l-5-4H3z" />
      <path d="M14 6.5a5 5 0 0 1 0 7M16.5 4a8 8 0 0 1 0 12" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function MuteIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 20 20" fill="currentColor">
      <path d="M3 7h3l5-4v14l-5-4H3z" />
      <line x1="14" y1="7" x2="19" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="7" x2="14" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function FullscreenIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M3 8V3h5M12 3h5v5M17 12v5h-5M8 17H3v-5" />
    </svg>
  )
}
