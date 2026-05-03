import type { Metadata } from 'next'
import Image from 'next/image'
import SimplePageTemplate from '@/templates/SimplePageTemplate'
import MusikPlayer from '@/components/MusikPlayer'

export const metadata: Metadata = {
  title: 'Patrick Alfred | Musik',
}

const tracks = [
  { number: '01', title: 'Home', src: '/home.mp3' },
  { number: '02', title: 'Drink', src: '/drink.mp3' },
  { number: '03', title: 'ACLU', src: '/aclu.mp3' },
  { number: '04', title: 'Free', src: '/free.mp3' },
  { number: '05', title: 'California', src: '/california.mp3' },
]

export default function MusikPage() {
  return (
    <SimplePageTemplate title="Musik">
      <div className="musik">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <Image
                className="musik__cover"
                src="/images/Cover-art.jpg"
                alt="I Don't Know Why I Come Home Anymore"
                width={600}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
              <MusikPlayer tracks={tracks} />
            </div>
            <div className="col-sm-2 col-xs-hidden" />
            <div className="col-sm-4 col-xs-12">
              <div className="musik__info">
                <p className="musik__info__title">
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
                  <a
                    href="http://cargocollective.com/HarryMckenzie"
                    target="_blank"
                    rel="noreferrer"
                  >
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
