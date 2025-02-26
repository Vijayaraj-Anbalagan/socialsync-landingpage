import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/ThemeProv';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SocialSync | Transform Your Brands Digital Presence',
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}