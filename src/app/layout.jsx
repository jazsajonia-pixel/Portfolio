import './globals.css';
import PortfolioShell from '@/components/PortfolioShell';
import { defaultSEO } from '@/lib/seo';

export const metadata = {
  title: 'Jazz Sajonia | Full-Stack Developer & AI Automation Specialist',
  description: defaultSEO.description,
  keywords: [
    'Web Developer',
    'AI Automation',
    'React',
    'Next.js',
    'Full Stack Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Jazzther Bert Shanne Sajonia' }],
  creator: 'Jazzther Bert Shanne Sajonia',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jazz-portfolio1.vercel.app',
    siteName: 'Jazz Sajonia Portfolio',
    title: 'Jazz Sajonia | Full-Stack Developer & AI Automation Specialist',
    description: defaultSEO.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jazz Sajonia | Full-Stack Developer & AI Automation Specialist',
    description: defaultSEO.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f97316" />
      </head>
      <body className="font-poppins antialiased">
        <PortfolioShell>{children}</PortfolioShell>
      </body>
    </html>
  );
}
