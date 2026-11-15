import type { Metadata } from 'next';
import './globals.css';
import { LmsProvider } from '@/context/LmsContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { OnboardingModal } from '@/components/dashboard/OnboardingModal';

export const metadata: Metadata = {
  title: 'The Business Cut | Film-Based MBA & Product Management LMS',
  description:
    'An executive learning management platform for MBA students specializing in Product Management. Learn business strategy, user research, and leadership through cinematic case studies.',
  keywords: [
    'MBA',
    'Product Management',
    'Case Method',
    'Business School',
    'Cinema Case Studies',
    'Executive Education'
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '64x64' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: ['/favicon.ico']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full dark">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 antialiased font-sans selection:bg-amber-500/30 selection:text-amber-200">
        <LmsProvider>
          <Navbar />
          <main className="flex-1 w-full flex flex-col">{children}</main>
          <Footer />
          <OnboardingModal />
        </LmsProvider>
      </body>
    </html>
  );
}
