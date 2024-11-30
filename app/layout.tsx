import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SocialSync | Transform Your Brand’s Digital Presence',
  description: 'SocialSync empowers businesses with cutting-edge digital marketing, branding, and web solutions to stand out in a competitive landscape. Transform your digital presence today.',
  keywords: [
    'SocialSync',
    'Digital Marketing',
    'Branding',
    'Web Development',
    'Social Media Strategies',
    'SEO Optimization',
    'Online Advertising',
    'Content Marketing',
  ],
  authors: [{ name: 'SocialSync Team', url: 'https://thesocialsync.in' }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        
        {children}</body>
    </html>
  );
}
