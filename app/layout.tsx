import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/**
 * Metadata SEO dasar + Open Graph + Twitter Card.
 * Ganti nilai sesuai branding klien.
 */
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://konsultanpro.id'
  ),
  title: {
    default: 'KonsultanPro — Konsultan Bisnis Profesional',
    template: '%s | KonsultanPro',
  },
  description:
    'Konsultan bisnis terpercaya untuk UMKM & perusahaan. Strategi pertumbuhan, pemasaran, SDM, dan transformasi digital. Konsultasi gratis tersedia.',
  keywords: [
    'konsultan bisnis',
    'jasa konsultasi',
    'strategi pemasaran',
    'UMKM',
    'business consultant',
    'Jakarta',
  ],
  authors: [{ name: 'KonsultanPro' }],
  creator: 'KonsultanPro',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: 'KonsultanPro',
    title: 'KonsultanPro — Konsultan Bisnis Profesional',
    description:
      'Tingkatkan skala bisnis Anda dengan strategi terbukti. Konsultasi gratis tersedia.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KonsultanPro — Konsultan Bisnis Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KonsultanPro — Konsultan Bisnis Profesional',
    description:
      'Tingkatkan skala bisnis Anda dengan strategi terbukti. Konsultasi gratis tersedia.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='id' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
