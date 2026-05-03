import Image from 'next/image'
import Link from 'next/link'

interface NavProps {
  isFooter?: boolean
}

export default function Nav({ isFooter = false }: NavProps) {
  return (
    <div className={`nav${isFooter ? ' nav--footer' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            {!isFooter && (
              <Link href="/">
                <Image
                  className="nav__shapes"
                  src="/images/nav_lockup.svg"
                  alt="Patrick Alfred"
                  width={280}
                  height={20}
                />
              </Link>
            )}
          </div>
          <div className="col-xs-6">
            <div className="nav__links">
              <a
                href="https://www.patrickalfredblog.com"
                className="nav__link"
                target="_blank"
                rel="noreferrer"
              >
                Bløg
              </a>
              <Link href="/musik" className="nav__link">
                Musik
              </Link>
              <Link href="/resume" className="nav__link">
                Resume
              </Link>
              <Link href="/contact" className="nav__link">
                Contåct
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
