import type { Metadata } from 'next'
import Image from 'next/image'
import SimplePageTemplate from '@/templates/SimplePageTemplate'

export const metadata: Metadata = {
  title: 'Patrick Alfred | Contact',
}

export default function ContactPage() {
  return (
    <SimplePageTemplate
      title="Contact"
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
      ]}
    >
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="contact__content">
                <Image
                  src="/portrait.jpg"
                  alt="Patrick Alfred"
                  width={400}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
                <p className="resume__title contact__title">Patrick Alfred Edelbacher</p>
                <p className="resume__subtitle">San Francisco, CA</p>
                <p className="resume__info">patrick@patrickalfred.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SimplePageTemplate>
  )
}
