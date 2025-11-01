
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { caseStudies, placeholderImages } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { CardSkeleton } from '@/components/ui/card-skeleton';


type Category = 'All' | 'Web' | 'SEO';
const categories: Category[] = ['All', 'Web', 'SEO'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Category>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  const filteredCaseStudies =
    filter === 'All'
      ? caseStudies
      : caseStudies.filter((study) => study.category === filter);
      
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
            Our Work
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our portfolio of success stories and see how we've helped businesses like yours thrive.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {loading ? (
             Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)
           ) : (
            filteredCaseStudies.map((study, i) => {
              const portfolioImage = placeholderImages.find(p => p.id === study.imageId);
              return (
                <motion.div
                  key={study.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  variants={cardVariants}
                >
                  <Card className="overflow-hidden group flex flex-col h-full">
                    <Link href={`/portfolio/${study.slug}`} className="block h-full flex flex-col">
                      <div className="aspect-video relative">
                        {portfolioImage && (
                          <Image
                            src={portfolioImage.imageUrl}
                            alt={study.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={portfolioImage.imageHint}
                          />
                        )}
                      </div>
                      <CardHeader>
                          <Badge variant="secondary" className="w-min mb-2">{study.category}</Badge>
                          <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                            {study.title}
                          </CardTitle>
                      </CardHeader>
                      <CardContent className='flex-grow'>
                        <p className="text-muted-foreground line-clamp-3">
                          {study.shortDescription}
                        </p>
                      </CardContent>
                      <CardFooter>
                          <Button variant="link" asChild className='p-0 text-primary'>
                              <span className="cursor-pointer">
                                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                              </span>
                          </Button>
                      </CardFooter>
                    </Link>
                  </Card>
                </motion.div>
              );
            })
           )}
        </div>
      </div>
    </div>
  );
}

    
