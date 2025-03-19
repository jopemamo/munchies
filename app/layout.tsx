'use client';

import "./globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
    <html lang="en">
      <body className="bg-offWhite">
        <div className="py-10 px-6 md:py-14 md:pl-10 md:pr-0">
        {children}
        </div>
      </body>
    </html>
    </QueryClientProvider>
  );
}
