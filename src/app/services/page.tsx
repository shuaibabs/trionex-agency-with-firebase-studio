
'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CardSkeleton } from '@/components/ui/card-skeleton';


export default function ServicesPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  const webDevServices = services.filter(s => s.category === 'Web Development');
  const marketingServices = services.filter(s => s.category === 'Digital Marketing');
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide a comprehensive suite of digital services to elevate your brand and accelerate your growth, from web development to digital marketing.
          </p>
        </div>

        {/* Web Development Services */}
        <section className="mb-20">
          <h2 className="font-headline text-3xl font-bold tracking-tight mb-8 text-center sm:text-4xl">Web Development Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)
            ) : (
              webDevServices.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  variants={cardVariants}
                  className="h-full"
                >
                  <Card
                    className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl h-full"
                  >
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-muted-foreground mb-6 flex-grow">
                        {service.shortDescription}
                      </p>
                      <Button variant="outline" asChild className="w-full mt-auto">
                        <Link href={`/services/${service.slug}`}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </section>

        {/* Digital Marketing Services */}
        <section>
          <h2 className="font-headline text-3xl font-bold tracking-tight mb-8 text-center sm:text-4xl">Digital Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
                Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)
            ) : (
                marketingServices.map((service, i) => (
                <motion.div
                    key={service.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    variants={cardVariants}
                    className="h-full"
                >
                    <Card
                    className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl h-full"
                    >
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">
                        {service.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                        <p className="text-muted-foreground mb-6 flex-grow">
                        {service.shortDescription}
                        </p>
                        <Button variant="outline" asChild className="w-full mt-auto">
                        <Link href={`/services/${service.slug}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        </Button>
                    </CardContent>
                    </Card>
                </motion.div>
                ))
            )}
          </div>
        </section>

      </div>
    </div>
  );
}

    
