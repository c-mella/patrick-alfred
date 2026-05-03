import Image from 'next/image'
import Link from 'next/link'
import { footerProjects } from '@/data/projects'

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          {footerProjects.map((column, colIdx) => (
            <div key={colIdx} className="col-sm-3 col-xs-12">
              {column.map(({ slug, label, isLocked }) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  target={isLocked ? '_blank' : undefined}
                  rel={isLocked ? 'noreferrer' : undefined}
                >
                  {isLocked && (
                    <Image
                      src="/images/footer-lock.svg"
                      alt="locked"
                      width={12}
                      height={12}
                    />
                  )}
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
