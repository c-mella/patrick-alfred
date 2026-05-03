import Image from 'next/image'
import Link from 'next/link'
import SidebarNav from '~/components/SidebarNav'
import { projects } from '~/data/projects'
import styles from './HomeTemplate.module.scss'

export default function HomeTemplate() {
  return (
    <>
      <SidebarNav isHome />
      <div className={styles.main}>
        <div className={styles.portfolio}>
          {projects.map((project) => {
            if (!project.homeImage) {
              return (
                <div key={project.slug} className={`${styles.item} ${styles.itemHidden}`}>
                  <div className={styles.itemImage} />
                  <div className={styles.itemContentWrap}>
                    <div className={styles.itemContent} />
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={project.slug}
                href={`/${project.slug}`}
                className={styles.item}
                target={project.isExternal ? '_blank' : undefined}
                rel={project.isExternal ? 'noreferrer' : undefined}
              >
                <div className={styles.itemImage}>
                  <Image
                    src={project.homeImage}
                    alt={project.title}
                    fill
                    sizes="300px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                {project.description && (
                  <div className={styles.itemContentWrap}>
                    <div className={styles.itemContent}>
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
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
