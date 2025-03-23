'use client'

import './globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  const backgroundColor = pathname === '/welcome' ? 'bg-green' : 'bg-offWhite'

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en" className="h-full">
        <body className="h-full">
          <div
            className={`${backgroundColor} h-full py-10 px-6 md:py-14 md:pl-10 md:pr-0`}
          >
            {children}
          </div>
        </body>
      </html>
    </QueryClientProvider>
  )
}
