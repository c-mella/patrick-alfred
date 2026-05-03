import Image from 'next/image'
import Nav from '~/components/Nav'
import SidebarNav from '~/components/SidebarNav'
import ProjectInfo from '~/components/ProjectInfo'
import PasswordGate from '~/components/PasswordGate'
import Footer from '~/components/Footer'
import { projects } from '~/data/projects'
import type { Project } from '~/data/projects'
import type { ProjectAction } from '~/components/ProjectInfo'
import styles from './ProjectTemplate.module.scss'

interface ProjectTemplateProps {
  project: Project
}

function buildNavActions(project: Project): ProjectAction[] {
  const idx = projects.findIndex((p) => p.slug === project.slug)
  const len = projects.length
  const prev = projects[(idx - 1 + len) % len]
  const next = projects[(idx + 1) % len]
  return [
    { href: `/${prev.slug}`, icon: 'prev' },
    { href: `/${next.slug}`, icon: 'next' },
  ]
}

export default function ProjectTemplate({ project }: ProjectTemplateProps) {
  const navActions = buildNavActions(project)
  const projectTags = [project.year, ...(project.tags ?? [])].filter(Boolean) as string[]

  return (
    <>
      <Nav />
      <SidebarNav mobileOnly />

      <ProjectInfo title={project.title} tags={projectTags} actions={navActions} />

      <PasswordGate slug={project.slug} locked={!!project.isLocked}>
        {project.heroImage && (
          <div className={styles.marquee}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 center-xs">
                  <Image
                    className={styles.marqueeDesktop}
                    src={project.heroImage}
                    alt={`${project.title} hero`}
                    width={1440}
                    height={600}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  {project.heroImageMobile && (
                    <Image
                      className={styles.marqueeMobile}
                      src={project.heroImageMobile}
                      alt={`${project.title} hero`}
                      width={768}
                      height={400}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {(project.overview || project.outcome || project.team) && (
          <div className={styles.threeUp}>
            <div className="container">
              <div className="row center-xs">
                {project.overview && (
                  <div className="col-xs-10 col-sm-4">
                    <div className={styles.threeUpContent}>
                      <h4 className={styles.threeUpHeader}>Overview</h4>
                      <p className={styles.threeUpCopy}>{project.overview}</p>
                    </div>
                  </div>
                )}
                {project.outcome && (
                  <div className="col-xs-10 col-sm-4">
                    <div className={styles.threeUpContent}>
                      <h4 className={styles.threeUpHeader}>Outcome</h4>
                      <p className={styles.threeUpCopy}>{project.outcome}</p>
                    </div>
                  </div>
                )}
                {project.team && project.team.length > 0 && (
                  <div className="col-xs-10 col-sm-4">
                    <div className={styles.threeUpContent}>
                      <h4 className={styles.threeUpHeader}>Team</h4>
                      <div className={styles.threeUpCopy}>
                        {project.team.map((member, i) => (
                          <p key={i}>
                            {member.name}
                            {member.role && `, ${member.role}`}
                            {member.company && (
                              <>
                                <br />
                                <em>{member.company}</em>
                              </>
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {project.assets && project.assets.length > 0 && (
          <div className={styles.assets}>
            <div className="container">
              <div className="row center-xs">
                <div className="col-xs-9 col-sm-5">
                {project.assets.map((asset, i) => {
                  if (asset.vimeoId) {
                    return (
                      <div key={i} className={styles.videoEmbed}>
                        <iframe
                          src={`https://player.vimeo.com/video/${asset.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                          referrerPolicy="strict-origin-when-cross-origin"
                          title={asset.vimeoTitle ?? `Video ${i + 1}`}
                        />
                      </div>
                    )
                  }
                  if (!asset.src) return null
                  return asset.href ? (
                    <a key={i} href={asset.href} target="_blank" rel="noreferrer">
                      <Image
                        className={styles.assetThumbnail}
                        src={asset.src}
                        alt={asset.vimeoTitle ?? ''}
                        width={900}
                        height={600}
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </a>
                  ) : (
                    <Image
                      key={i}
                      src={asset.src}
                      alt=""
                      width={900}
                      height={600}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )
                })}
                </div>
              </div>
            </div>
          </div>
        )}
      </PasswordGate>

      <Nav isFooter />

      <ProjectInfo title={project.title} actions={navActions} />

      <SidebarNav mobileOnly isFooter />

      <Footer />
    </>
  )
}
