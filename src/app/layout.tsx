
'use client';

import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import LoadingBar from '@/components/loading-bar';
import { Inter, Space_Grotesk } from 'next/font/google';
import { cn } from '@/lib/utils';
import { NavigationEvents } from '@/components/navigation-events';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Trionex Digital - Marketing & Web Development Agency</title>
        <meta
          name="description"
          content="Trionex Digital is a modern marketing and web development agency helping businesses grow with cutting-edge solutions."
        />
      </head>
      <body className={cn('animated-background font-body', inter.variable, spaceGrotesk.variable)}>
        <FirebaseClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col main-container">
              <LoadingBar />
              <Header />
              <AnimatePresence mode="wait">
                <motion.main
                  key={pathname}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex-grow pt-8"
                >
                  {children}
                </motion.main>
              </AnimatePresence>
              <Footer />
            </div>
            <Toaster />
            <Suspense fallback={null}>
                <NavigationEvents />
            </Suspense>
          </ThemeProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
