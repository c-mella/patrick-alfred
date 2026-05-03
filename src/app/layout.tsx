import type { Metadata } from 'next'
import '~/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Patrick Alfred',
  description: 'Portfolio of Patrick Alfred, designer.',
  icons: { icon: '/assets/images/favicon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
