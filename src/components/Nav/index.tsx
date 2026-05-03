import Image from 'next/image'
import Link from 'next/link'
import styles from './Nav.module.scss'

interface NavProps {
  isFooter?: boolean
}

export default function Nav({ isFooter = false }: NavProps) {
  return (
    <div className={`${styles.nav}${isFooter ? ` ${styles.footer}` : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            {!isFooter && (
              <Link href="/">
                <Image
                  className={styles.shapes}
                  src="/assets/images/nav_lockup.svg"
                  alt="Patrick Alfred"
                  width={280}
                  height={20}
                />
              </Link>
            )}
          </div>
          <div className="col-xs-6">
            <div className={styles.links}>
              <a
                href="https://www.patrickalfredblog.com"
                target="_blank"
                rel="noreferrer"
              >
                Bløg
              </a>
              <Link href="/musik">Musik</Link>
              <Link href="/resume">Resume</Link>
              <Link href="/contact">Contåct</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
