import type { Metadata } from 'next'
import Image from 'next/image'
import SimplePageTemplate from '~/templates/SimplePageTemplate'
import styles from './contact.module.scss'

export const metadata: Metadata = {
  title: 'Patrick Alfred | Contact',
}

export default function ContactPage() {
  return (
    <SimplePageTemplate
      title="Contact"
      headerActions={[
        { href: 'https://www.linkedin.com/in/patrickalfred', icon: 'linkedin', isExternal: true },
        { href: 'https://workingnotworking.com/patrickalfred', icon: 'wnw', isExternal: true },
      ]}
    >
      <div className={styles.contact}>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className={styles.content}>
                <Image
                  className={styles.portrait}
                  src="/assets/images/portrait.jpg"
                  alt="Patrick Alfred"
                  width={400}
                  height={400}
                />
                <p className={styles.name}>Patrick Alfred Edelbacher</p>
                <p className={styles.location}>San Francisco, CA</p>
                <p className={styles.email}>patrick@patrickalfred.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SimplePageTemplate>
  )
}
