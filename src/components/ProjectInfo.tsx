import Image from 'next/image'
import Link from 'next/link'

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
  prev: { src: '/images/previous-nav.svg', width: 22, height: 22, alt: 'Previous' },
  next: { src: '/images/next-nav.svg', width: 22, height: 22, alt: 'Next' },
  linkedin: { src: '/images/linkedin.svg', width: 22, height: 22, alt: 'LinkedIn' },
  wnw: { src: '/images/wnw.svg', width: 30, height: 22, alt: 'Working Not Working' },
  download: { src: '/images/download.svg', width: 22, height: 22, alt: 'Download' },
}

export default function ProjectInfo({ title, tags, actions }: ProjectInfoProps) {
  return (
    <div className="project-info">
      <div className="container">
        <div className="project-info__border row">
          <div className="col-xs-8">
            <h3 className="project-info__title">{title}</h3>
            {tags?.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <div className="col-xs-4">
            <div className="project-info__actions">
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
                const className =
                  action.icon === 'wnw' ? 'project-info__actions--wnw' : undefined

                if (action.isExternal || action.icon === 'linkedin' || action.icon === 'wnw') {
                  return (
                    <a
                      key={i}
                      href={action.href}
                      target="_blank"
                      rel="noreferrer"
                      className={className}
                      download={action.downloadAttr}
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
