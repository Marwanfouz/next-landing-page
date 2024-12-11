import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import "./globals.css";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['latin', 'arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${ibmPlexSansArabic.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
