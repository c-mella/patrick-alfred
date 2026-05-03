import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import SidebarNav from '@/components/SidebarNav'
import ProjectInfo from '@/components/ProjectInfo'
import Footer from '@/components/Footer'
import type { Project } from '@/data/projects'
import type { ProjectAction } from '@/components/ProjectInfo'

interface ProjectTemplateProps {
  project: Project
}

function buildNavActions(project: Project): ProjectAction[] {
  const actions: ProjectAction[] = []
  if (project.prev) actions.push({ href: `/${project.prev}`, icon: 'prev' })
  if (project.next) actions.push({ href: `/${project.next}`, icon: 'next' })
  return actions
}

export default function ProjectTemplate({ project }: ProjectTemplateProps) {
  const navActions = buildNavActions(project)
  const projectTags = [project.year, ...(project.tags ?? [])].filter(Boolean) as string[]

  return (
    <>
      <Nav />
      <SidebarNav mobileOnly />

      <ProjectInfo
        title={project.title}
        tags={projectTags}
        actions={navActions}
      />

      {project.heroImage && (
        <div className="marquee">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 center-xs">
                <Image
                  className="marquee__image--desktop"
                  src={project.heroImage}
                  alt={`${project.title} hero`}
                  width={1440}
                  height={600}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                {project.heroImageMobile && (
                  <Image
                    className="marquee__image--mobile"
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
        <div className="three-up">
          <div className="container">
            <div className="row center-xs">
              {project.overview && (
                <div className="col-xs-10 col-sm-4">
                  <div className="three-up__content">
                    <h4 className="three-up__header">Overview</h4>
                    <p className="three-up__copy">{project.overview}</p>
                  </div>
                </div>
              )}
              {project.outcome && (
                <div className="col-xs-10 col-sm-4">
                  <div className="three-up__content">
                    <h4 className="three-up__header">Outcome</h4>
                    <p className="three-up__copy">{project.outcome}</p>
                  </div>
                </div>
              )}
              {project.team && project.team.length > 0 && (
                <div className="col-xs-10 col-sm-4">
                  <div className="three-up__content">
                    <h4 className="three-up__header">Team</h4>
                    <div className="three-up__copy">
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
        <div className="assets">
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-9 col-sm-5">
                {project.assets.map((asset, i) =>
                  asset.href ? (
                    <a key={i} href={asset.href} target="_blank" rel="noreferrer">
                      <Image
                        className="assets__thumbnail"
                        src={asset.src}
                        alt=""
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
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Nav isFooter />

      <ProjectInfo title={project.title} actions={navActions} />

      <SidebarNav mobileOnly isFooter />

      <Footer />
    </>
  )
}
