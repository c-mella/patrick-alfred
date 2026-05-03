'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface SidebarNavProps {
  isHome?: boolean
  mobileOnly?: boolean
  isFooter?: boolean
}

export default function SidebarNav({
  isHome = false,
  mobileOnly = false,
  isFooter = false,
}: SidebarNavProps) {
  const [open, setOpen] = useState(false)

  const classNames = [
    'sidebar-nav',
    mobileOnly ? 'sidebar-nav--mobile-only' : '',
    isFooter ? 'sidebar-nav--footer' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classNames}>
      {!isFooter && (
        <div className="sidebar-nav__header">
          <Image
            className="sidebar-nav__shapes sidebar-nav__shapes--desktop"
            src="/images/home_lockup.svg"
            alt="Patrick Alfred"
            width={200}
            height={60}
          />
          <Link href="/">
            <Image
              className="sidebar-nav__shapes sidebar-nav__shapes--mobile"
              src="/images/mobile_header.svg"
              alt="Patrick Alfred"
              width={150}
              height={50}
            />
          </Link>
          {!isHome && (
            <>
              <Image
                className={`sidebar-nav__shapes sidebar-nav__shapes--mobile sidebar-nav__arrows sidebar-nav__arrows--down${open ? ' sidebar-nav__arrows--hidden' : ''}`}
                src="/images/closed-nav-s.svg"
                alt="open nav"
                width={25}
                height={25}
                onClick={() => setOpen(true)}
                style={{ cursor: 'pointer' }}
              />
              <Image
                className={`sidebar-nav__shapes sidebar-nav__arrows sidebar-nav__arrows--up${!open ? ' sidebar-nav__arrows--hidden' : ''}`}
                src="/images/opened-nav-s.svg"
                alt="close nav"
                width={25}
                height={25}
                onClick={() => setOpen(false)}
                style={{ cursor: 'pointer' }}
              />
            </>
          )}
        </div>
      )}
      <div
        className="sidebar-nav__links"
        style={!isFooter && !isHome && !open ? { display: 'none' } : undefined}
      >
        <a
          href="https://www.patrickalfredblog.com"
          className="sidebar-nav__link"
          target="_blank"
          rel="noreferrer"
        >
          Bløg
        </a>
        <Link href="/musik" className="sidebar-nav__link">
          Musik
        </Link>
        <Link href="/resume" className="sidebar-nav__link">
          Resume
        </Link>
        <Link href="/contact" className="sidebar-nav__link">
          Contåct
        </Link>
      </div>
    </div>
  )
}
