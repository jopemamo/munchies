import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Munchies!",
  description: "For all your restaurant needs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-offWhite">
        <div className="py-10 px-6 md:py-14 md:pl-10 md:pr-0">
        {children}
        </div>
      </body>
    </html>
  );
}
