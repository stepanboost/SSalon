import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beauty Salon - Салон красоты премиум класса',
  description: 'Откройте для себя мир красоты и роскоши в нашем салоне. Профессиональные мастера, качественные услуги и атмосфера релакса.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}

