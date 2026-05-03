import type { Metadata } from 'next'
import HomeTemplate from '@/templates/HomeTemplate'

export const metadata: Metadata = {
  title: 'Patrick Alfred',
}

export default function HomePage() {
  return <HomeTemplate />
}
