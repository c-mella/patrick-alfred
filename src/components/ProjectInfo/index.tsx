import Image from 'next/image'
import Link from 'next/link'
import styles from './ProjectInfo.module.scss'

export interface ProjectAction {
  href: string
  icon: 'prev' | 'next' | 'linkedin' | 'wnw' | 'download'
  isExternal?: boolean
  downloadAttr?: string
}

interface ProjectInfoProps {
  title: string
  tags?: string[]
  actions?: ProjectAction[]
}

const iconMap: Record<string, { src: string; width: number; height: number; alt: string }> = {
  prev:     { src: '/assets/images/previous-nav.svg', width: 22, height: 22, alt: 'Previous' },
  next:     { src: '/assets/images/next-nav.svg',     width: 22, height: 22, alt: 'Next' },
  linkedin: { src: '/assets/images/linkedin.svg',     width: 22, height: 22, alt: 'LinkedIn' },
  wnw:      { src: '/assets/images/wnw.svg',          width: 30, height: 22, alt: 'Working Not Working' },
  download: { src: '/assets/images/download.svg',     width: 22, height: 22, alt: 'Download' },
}

export default function ProjectInfo({ title, tags, actions }: ProjectInfoProps) {
  return (
    <div className={styles.projectInfo}>
      <div className="container">
        <div className={`${styles.border} row`}>
          <div className="col-xs-8">
            <h3 className={styles.title}>{title}</h3>
            {tags?.map((tag) => (
              <p key={tag} className={styles.tag}>{tag}</p>
            ))}
          </div>
          <div className="col-xs-4">
            <div className={styles.actions}>
              {actions?.map((action, i) => {
                const icon = iconMap[action.icon]
                const imgEl = (
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                  />
                )
                const isWnw = action.icon === 'wnw'
                const isExternal = action.isExternal || action.icon === 'linkedin' || isWnw

                if (isExternal) {
                  return (
                    <a
                      key={i}
                      href={action.href}
                      target="_blank"
                      rel="noreferrer"
                      className={isWnw ? styles.actionWnw : undefined}
                    >
                      {imgEl}
                    </a>
                  )
                }
                if (action.downloadAttr !== undefined) {
                  return (
                    <a key={i} href={action.href} download>
                      {imgEl}
                    </a>
                  )
                }
                return (
                  <Link key={i} href={action.href}>
                    {imgEl}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
