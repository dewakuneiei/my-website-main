import React from 'react';
import type { Metadata } from 'next';
import { Inter, Silkscreen } from 'next/font/google';

import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-silkscreen',
});

export const metadata: Metadata = {
  title: 'Nattawut Pasuk — Deewa',
  description: `Hi 👋, I'm Nattawut Pasuk (Deewa), a Software Engineering student and Full-Stack Developer & Game Developer. Currently working as a Software Developer at TechSpace. I've shipped 10+ games on itch.io and love building web apps with Next.js, Laravel, and Node.js. Passionate about challenging new technologies.`,
  creator: 'Nattawut Pasuk',
  applicationName: 'Deewa Portfolio',
  keywords: [
    'Nattawut Pasuk',
    'Deewa',
    'dewakuneiei',
    'Portfolio',
    'Fullstack Developer',
    'Game Developer',
    'Next.js',
    'Unity',
    'Rust',
    'Software Engineer',
    'Thailand',
  ],
  icons: {
    icon: './favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://dewakuneiei.github.io',
    title: 'Nattawut Pasuk (Deewa) — Fullstack Developer & Game Dev',
    description: `Full-Stack Developer and Game Developer. 10+ games on itch.io, experienced with Next.js, Laravel, Unity, Rust, and more.`,
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 628,
        alt: 'Deewa — Fullstack Developer & Game Developer',
      },
    ],
  },
  twitter: {
    title: 'Nattawut Pasuk (Deewa) — Fullstack Developer & Game Dev',
    description: `Full-Stack Developer and Game Developer. 10+ games on itch.io, experienced with Next.js, Laravel, Unity, Rust, and more.`,
    card: 'summary_large_image',
    images: '/opengraph-image.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${silkscreen.variable} relative`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <div className="main-mask pointer-events-none absolute inset-0 -z-50" />
      </body>
    </html>
  );
}
