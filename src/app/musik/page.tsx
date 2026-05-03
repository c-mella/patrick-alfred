import type { Metadata } from 'next'
import Image from 'next/image'
import SimplePageTemplate from '~/templates/SimplePageTemplate'
import MusikPlayer from '~/components/MusikPlayer'
import styles from './musik.module.scss'

export const metadata: Metadata = {
  title: 'Patrick Alfred | Musik',
}

const tracks = [
  { number: '01', title: 'Home',       src: '/assets/audio/home.mp3' },
  { number: '02', title: 'Drink',      src: '/assets/audio/drink.mp3' },
  { number: '03', title: 'ACLU',       src: '/assets/audio/aclu.mp3' },
  { number: '04', title: 'Free',       src: '/assets/audio/free.mp3' },
  { number: '05', title: 'California', src: '/assets/audio/california.mp3' },
]

export default function MusikPage() {
  return (
    <SimplePageTemplate title="Musik">
      <div className={styles.musik}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <Image
                className={styles.cover}
                src="/assets/images/Cover-art.jpg"
                alt="I Don't Know Why I Come Home Anymore"
                width={600}
                height={600}
              />
              <MusikPlayer tracks={tracks} />
            </div>
            <div className="col-sm-2 col-xs-hidden" />
            <div className="col-sm-4 col-xs-12">
              <div className={styles.info}>
                <p className={styles.infoTitle}>
                  I Don&apos;t Know Why I Come Home Anymore (2017)
                </p>
                <p>
                  Recorded in Long Beach, CA by Kyle Brawley of{' '}
                  <a href="http://www.thejunglecats.com/" target="_blank" rel="noreferrer">
                    The Junglecats
                  </a>
                </p>
                <p>
                  Original artwork by{' '}
                  <a href="http://cargocollective.com/HarryMckenzie" target="_blank" rel="noreferrer">
                    Harry Mckenzie
                  </a>
                  . All songs and music by Patrick Alfred.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SimplePageTemplate>
  )
}
