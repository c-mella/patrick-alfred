import Image from 'next/image'
import Link from 'next/link'
import SidebarNav from '@/components/SidebarNav'
import { projects } from '@/data/projects'

export default function HomeTemplate() {
  return (
    <>
      <SidebarNav isHome />
      <div className="main">
        <div className="portfolio">
          {projects.map((project) => {
            const isHidden = !project.homeImage

            if (isHidden) {
              return (
                <div key={project.slug} className="portfolio__item portfolio__item--hidden">
                  <div className="portfolio__item__image" />
                  <div className="portfolio__item__content-container">
                    <div className="portfolio__item__content" />
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={project.slug}
                href={`/${project.slug}`}
                className="portfolio__item"
                target={project.isExternal ? '_blank' : undefined}
                rel={project.isExternal ? 'noreferrer' : undefined}
              >
                <div className="portfolio__item__image">
                  <Image
                    src={project.homeImage}
                    alt={project.title}
                    fill
                    sizes="300px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                {project.description && (
                  <div className="portfolio__item__content-container">
                    <div className="portfolio__item__content">
                      <h4 className="portfolio__item__title">{project.title}</h4>
                      <p className="portfolio__item__description">{project.description}</p>
                    </div>
                  </div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
