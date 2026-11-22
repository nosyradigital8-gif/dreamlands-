import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DREAM LANDS | Everyday Financial & Digital Services',
  description: 'DREAM LANDS is a Ghana-based service centre for banking agency, electricity and telecommunications support at Atlantic Mall, North Legon, Accra.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
