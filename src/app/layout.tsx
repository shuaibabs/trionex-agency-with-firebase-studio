
'use client';

import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { useState, useEffect } from 'react';
import GalaxyLoader from '@/components/galaxy-loader';
import { PageTransition } from '@/components/page-transition';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This will run once after the component mounts on the client
    // It helps avoid hydration errors by ensuring the loading state is managed client-side
    setLoading(false);
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
        {loading ? (
          <GalaxyLoader />
        ) : (
          <FirebaseClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <div className="relative flex min-h-screen flex-col main-container">
                <Header />
                <main className="flex-grow pt-8">
                  <PageTransition>{children}</PageTransition>
                </main>
                <Footer />
              </div>
              <Toaster />
            </ThemeProvider>
          </FirebaseClientProvider>
        )}
      </body>
    </html>
  );
}
