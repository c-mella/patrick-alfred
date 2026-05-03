import { ReactNode } from 'react'
import Nav from '~/components/Nav'
import SidebarNav from '~/components/SidebarNav'
import ProjectInfo from '~/components/ProjectInfo'
import Footer from '~/components/Footer'
import type { ProjectAction } from '~/components/ProjectInfo'

interface SimplePageTemplateProps {
  title: string
  headerActions?: ProjectAction[]
  children: ReactNode
}

export default function SimplePageTemplate({
  title,
  headerActions,
  children,
}: SimplePageTemplateProps) {
  return (
    <>
      <Nav />
      <SidebarNav mobileOnly />

      <ProjectInfo title={title} actions={headerActions} />

      {children}

      <Nav isFooter />

      <ProjectInfo title={title} />

      <SidebarNav mobileOnly isFooter />

      <Footer />
    </>
  )
}
