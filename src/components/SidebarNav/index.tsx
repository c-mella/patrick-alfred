'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './SidebarNav.module.scss'

interface SidebarNavProps {
  isHome?: boolean
  mobileOnly?: boolean
  isFooter?: boolean
}

const NAV_LINKS = [
  { href: 'https://www.patrickalfredblog.com', label: 'Bløg', external: true },
  { href: '/musik', label: 'Musik', external: false },
  { href: '/resume', label: 'Resume', external: false },
  { href: '/contact', label: 'Contåct', external: false },
]

export default function SidebarNav({
  isHome = false,
  mobileOnly = false,
  isFooter = false,
}: SidebarNavProps) {
  const [open, setOpen] = useState(false)

  const rootClass = [
    styles.root,
    mobileOnly ? styles.mobileOnly : '',
  ]
    .filter(Boolean)
    .join(' ')

  const linksClass = [
    styles.links,
    isFooter ? styles.linksFooter : '',
    !isFooter && !isHome && open ? styles.linksOpen : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClass}>
      {!isFooter && (
        <div className={styles.header}>
          <Image
            className={`${styles.shapesBase} ${styles.shapesDesktop}`}
            src="/assets/images/home_lockup.svg"
            alt="Patrick Alfred"
            width={200}
            height={60}
          />
          <Link href="/">
            <Image
              className={`${styles.shapesBase} ${styles.shapesMobile}`}
              src="/assets/images/mobile_header.svg"
              alt="Patrick Alfred"
              width={150}
              height={50}
            />
          </Link>
          {!isHome && (
            <>
              <Image
                className={`${styles.shapesBase} ${styles.shapesMobile} ${styles.arrows} ${open ? styles.arrowsHidden : ''}`}
                src="/assets/images/closed-nav-s.svg"
                alt="open nav"
                width={25}
                height={25}
                onClick={() => setOpen(true)}
              />
              <Image
                className={`${styles.arrows} ${!open ? styles.arrowsHidden : ''}`}
                src="/assets/images/opened-nav-s.svg"
                alt="close nav"
                width={25}
                height={25}
                onClick={() => setOpen(false)}
              />
            </>
          )}
        </div>
      )}
      <div className={linksClass}>
        {NAV_LINKS.map(({ href, label, external }) =>
          external ? (
            <a key={href} href={href} className={styles.link} target="_blank" rel="noreferrer">
              {label}
            </a>
          ) : (
            <Link key={href} href={href} className={styles.link}>
              {label}
            </Link>
          )
        )}
      </div>
    </div>
  )
}
