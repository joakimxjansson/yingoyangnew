import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ying & Yang | Official Website',
  description: 'Official website for Ying & Yang - Electronic music duo',
  keywords: ['Ying & Yang', 'DJ', 'Electronic Music', 'EDM'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}

