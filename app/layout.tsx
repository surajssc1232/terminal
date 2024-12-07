import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Suraj Singh Chauhan - Portfolio',
  description: 'Python and Java Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${pressStart2P.className} bg-blue-900 text-green-400 min-h-full flex flex-col`}>
        <div className="flex-grow flex flex-col border-4 border-blue-500 rounded-lg overflow-hidden m-2 sm:m-4">
          <header className="bg-blue-800 p-2 sm:p-4 border-b-4 border-blue-500">
            <nav>
              <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
                <li><Link href="/" className="hover:text-white text-xs sm:text-sm md:text-base">Home</Link></li>
                <li><Link href="/about" className="hover:text-white text-xs sm:text-sm md:text-base">About</Link></li>
                <li><Link href="/projects" className="hover:text-white text-xs sm:text-sm md:text-base">Projects</Link></li>
                <li><Link href="/skills" className="hover:text-white text-xs sm:text-sm md:text-base">Skills</Link></li>
              </ul>
            </nav>
          </header>
          <main className="flex-grow bg-blue-800 p-2 sm:p-4 md:p-6 overflow-auto">
            {children}
          </main>
          <footer className="bg-blue-800 p-2 sm:p-4 border-t-4 border-blue-500 text-center text-xs sm:text-sm">
            <p>© 2023 Suraj Singh Chauhan. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}

