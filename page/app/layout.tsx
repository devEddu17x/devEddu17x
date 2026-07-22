import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eddux.dev'),
  title: 'Eddu — Backend & Cloud Engineer',
  description: 'Production backend systems and cloud infrastructure.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Forzar tema oscuro siempre
              document.documentElement.classList.add('dark');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
