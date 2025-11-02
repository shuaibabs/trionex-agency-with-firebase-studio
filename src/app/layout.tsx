
'use client';

import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { useState, useEffect, Suspense } from 'react';
import GalaxyLoader from '@/components/galaxy-loader';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import LoadingBar from '@/components/loading-bar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Trionex Digital - Marketing & Web Development Agency</title>
        <meta
          name="description"
          content="Trionex Digital is a modern marketing and web development agency helping businesses grow with cutting-edge solutions."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="animated-background">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="loader">
              <GalaxyLoader />
            </motion.div>
          ) : (
            <FirebaseClientProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >
                <div className="relative flex min-h-screen flex-col main-container">
                  <Suspense>
                    <LoadingBar />
                  </Suspense>
                  <Header />
                  <motion.main
                    key={pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="flex-grow pt-8"
                  >
                    {children}
                  </motion.main>
                  <Footer />
                </div>
                <Toaster />
              </ThemeProvider>
            </FirebaseClientProvider>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
