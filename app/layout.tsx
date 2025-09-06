import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nishan - Aspiring ML Engineer',
  description: 'Personal portfolio website showcasing projects, skills, and experience in Machine Learning and Computer Science.',
  keywords: ['ML Engineer', 'Machine Learning', 'Computer Science', 'Portfolio', 'Nishan'],
  authors: [{ name: 'Nishan' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
