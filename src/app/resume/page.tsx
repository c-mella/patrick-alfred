import type { Metadata } from 'next'
import SimplePageTemplate from '~/templates/SimplePageTemplate'
import styles from './resume.module.scss'

export const metadata: Metadata = {
  title: 'Patrick Alfred | Resume',
}

export default function ResumePage() {
  return (
    <SimplePageTemplate
      title="Resume"
      headerActions={[
        { href: 'https://www.linkedin.com/in/patrickalfred', icon: 'linkedin', isExternal: true },
        { href: 'https://workingnotworking.com/patrickalfred', icon: 'wnw', isExternal: true },
        { href: '/assets/docs/patrick-alfred-resume.pdf', icon: 'download', downloadAttr: 'patrick-alfred-resume.pdf' },
      ]}
    >
      <div className={styles.resume}>
        <div className="container">
          <div className="row">

            {/* Experience */}
            <div className="col-sm-4 col-xs-12">
              <div className={styles.work}>
                <div className={styles.entry}>
                  <p className={styles.sectionLabel}>EXPERIENCE</p>
                </div>
                {[
                  { title: 'Product Design Manager',       company: 'The Walt Disney Company', dates: 'March 2024 – June 2026' },
                  { title: 'Principal Product Designer',   company: 'The Walt Disney Company', dates: 'March 2019 – Mar 2024' },
                  { title: 'Lead Brand Designer',          company: 'Narvar',                  dates: 'March 2018 – March 2019' },
                  { title: 'Sr. Visual Designer @ Apple',  company: 'Kettle NYC',              dates: 'May 2017 – Mar 2018' },
                  { title: 'Sr. Product Designer',         company: 'Poll Everywhere',         dates: 'Nov 2015 – Apr 2017' },
                  { title: 'Visual Designer',              company: 'Publicis/Razorfish',      dates: 'May 2015 – Oct 2015' },
                  { title: 'Sr. Product Designer',         company: 'Mayvenn',                 dates: 'Sept 2014 – May 2015' },
                  { title: 'Designer',                     company: 'Pivotal Labs',             dates: 'Feb 2013 – Apr 2014' },
                  { title: 'Designer @ TBWA\\Media Arts Lab', company: 'Incite*',              dates: 'Sep 2011 – Jun 2012' },
                  { title: 'Communications Coordinator',   company: "Children's Museum of Tacoma", dates: '2007 – 2010' },
                ].map(({ title, company, dates }) => (
                  <div key={title + company} className={styles.entry}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.subtitle}>{company}</p>
                    <p className={styles.info}>{dates}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Community & Featured */}
            <div className="col-sm-4 col-xs-12">
              <div className={styles.accolades}>
                <div className={styles.entry}>
                  <p className={styles.sectionLabel}>COMMUNITY</p>
                </div>
                <div className={styles.entry}>
                  <p className={styles.subtitle}>AIGA San Francisco</p>
                  <p className={styles.info}>Current member</p>
                </div>
                <div className={styles.entry}>
                  <p className={styles.subtitle}>AIGA San Francisco</p>
                  <p className={styles.info}>Design mentor: &apos;17 – &apos;18</p>
                </div>
                <div className={styles.entry}>
                  <p className={styles.subtitle}>Working Not Working</p>
                  <p className={styles.info}>Current member</p>
                </div>
                <div className={styles.entry}>
                  <p className={styles.sectionLabel}>FEATURED</p>
                </div>
                {['HOW Magazine: Top 10 websites for designers', 'Buzzfeed', 'The Bold Italic', 'Under Consideration', 'Creative Review', 'Visual Kontakt'].map((item) => (
                  <p key={item} className={styles.listItem}>{item}</p>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="col-sm-4 col-xs-12">
              <div className={styles.education}>
                <div className={styles.entry}>
                  <p className={styles.sectionLabel}>EDUCATION</p>
                </div>
                <div className={styles.entry}>
                  <p className={styles.title}>The Evergreen State College</p>
                  <p className={styles.subtitle}>Mathematics &amp; Art Studies</p>
                  <p className={styles.info}>2010</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SimplePageTemplate>
  )
}
