import type { Metadata } from 'next'
import SimplePageTemplate from '@/templates/SimplePageTemplate'

export const metadata: Metadata = {
  title: 'Patrick Alfred | Resume',
}

export default function ResumePage() {
  return (
    <SimplePageTemplate
      title="Resume"
      headerActions={[
        {
          href: 'https://www.linkedin.com/in/patrickalfred',
          icon: 'linkedin',
          isExternal: true,
        },
        {
          href: 'https://workingnotworking.com/patrickalfred',
          icon: 'wnw',
          isExternal: true,
        },
        {
          href: '/patrick-alfred-resume.pdf',
          icon: 'download',
          downloadAttr: 'patrick-alfred-resume.pdf',
        },
      ]}
    >
      <div className="resume">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="resume__work">
                <div className="resume__entry">
                  <p className="resume__title resume__title--section">EXPERIENCE</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__title">Product Design Manager</p>
                  <p className="resume__subtitle">The Walt Disney Company</p>
                  <p className="resume__info">March 2024 - June 2026</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__title">Principal Product Designer</p>
                  <p className="resume__subtitle">The Walt Disney Company</p>
                  <p className="resume__info">March 2019 - Mar 2024</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__title">Lead Brand Designer</p>
                  <p className="resume__subtitle">Narvar</p>
                  <p className="resume__info">March 2018 - March 2019</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__title">Sr. Visual Designer @ Apple</p>
                  <p className="resume__subtitle">Kettle NYC</p>
                  <p className="resume__info">May 2017 - Mar 2018</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__title">Sr. Product Designer</p>
                  <p className="resume__subtitle">Poll Everywhere</p>
                  <p className="resume__info">Nov 2015 - Apr 2017</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__title">Visual Designer</p>
                  <p className="resume__subtitle">Publicis/Razorfish</p>
                  <p className="resume__info">May 2015 - Oct 2015</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__title">Sr. Product Designer</p>
                  <p className="resume__subtitle">Mayvenn</p>
                  <p className="resume__info">Sept 2014 - May 2015</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__title">Designer</p>
                  <p className="resume__subtitle">Pivotal Labs</p>
                  <p className="resume__info">Feb 2013 - Apr 2014</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__title">Designer @ TBWA\Media Arts Lab</p>
                  <p className="resume__subtitle">Incite*</p>
                  <p className="resume__info">Sep 2011 - Jun 2012</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__title">Communications Coordinator</p>
                  <p className="resume__subtitle">Children&apos;s Museum of Tacoma</p>
                  <p className="resume__info">2007 - 2010</p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12">
              <div className="resume__accolades">
                <div className="resume__entry">
                  <p className="resume__title resume__title--section">COMMUNITY</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__subtitle">AIGA San Francisco</p>
                  <p className="resume__info">Current member</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__subtitle">AIGA San Francisco</p>
                  <p className="resume__info">Design mentor: &apos;17 - &apos;18</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__subtitle">Working Not Working</p>
                  <p className="resume__info">Current member</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__title resume__title--section">FEATURED</p>
                </div>
                <p className="resume__list-item">
                  HOW Magazine:
                  <br />
                  Top 10 websites for designers
                </p>
                <p className="resume__list-item">Buzzfeed</p>
                <p className="resume__list-item">The Bold Italic</p>
                <p className="resume__list-item">Under Consideration</p>
                <p className="resume__list-item">Creative Review</p>
                <p className="resume__list-item">Visual Kontakt</p>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12">
              <div className="resume__education">
                <div className="resume__entry">
                  <p className="resume__title resume__title--section">EDUCATION</p>
                </div>
                <div className="resume__entry">
                  <p className="resume__title">The Evergreen State College</p>
                  <p className="resume__subtitle">Mathematics &amp; Art Studies</p>
                  <p className="resume__info">2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SimplePageTemplate>
  )
}
