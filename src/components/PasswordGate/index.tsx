'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './PasswordGate.module.scss'

interface PasswordGateProps {
  slug: string
  locked: boolean
  children: React.ReactNode
}

const storageKey = (slug: string) => `unlocked-${slug}`
const PASSWORD = process.env.NEXT_PUBLIC_PROJECT_PASSWORD ?? 'portfolio'

export default function PasswordGate({ slug, locked, children }: PasswordGateProps) {
  // If the project isn't locked, or we're in dev, start unlocked immediately.
  const [unlocked, setUnlocked] = useState(!locked || process.env.NODE_ENV === 'development')
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (locked && process.env.NODE_ENV !== 'development') {
      setUnlocked(localStorage.getItem(storageKey(slug)) === '1')
    }
  }, [slug, locked])

  // Avoid a flash of the gate on first render in prod before localStorage is read
  if (!mounted && locked && process.env.NODE_ENV !== 'development') return null

  if (unlocked) return <>{children}</>

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (input === PASSWORD) {
      localStorage.setItem(storageKey(slug), '1')
      setUnlocked(true)
    } else {
      setError(true)
      setInput('')
    }
  }

  return (
    <div className={styles.gate}>
      <div className={styles.inner}>
        <Image
          src="/assets/images/footer-lock.svg"
          alt="Locked"
          width={32}
          height={40}
          className={styles.lockIcon}
        />
        <p className={styles.message}>This project is password protected.</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false) }}
            placeholder="Enter password"
            className={`${styles.input}${error ? ` ${styles.inputError}` : ''}`}
            autoFocus
          />
          <button type="submit" className={styles.button}>Unlock</button>
        </form>
        {error && <p className={styles.error}>Incorrect password.</p>}
      </div>
    </div>
  )
}
