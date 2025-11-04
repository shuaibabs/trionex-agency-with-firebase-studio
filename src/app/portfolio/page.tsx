
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { caseStudies } from '@/lib/data';
import { ArrowRight, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';


const categories = [
  { id: 'all', name: 'All' },
  { id: 'category_web', name: 'Web App' },
  { id: 'category_apps', name: 'Mobile App' },
  { id: 'category_utilities', name: 'Utilities/Tools' }
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>('all');

  const filteredCaseStudies =
    filter === 'all'
      ? caseStudies
      : caseStudies.filter((study) => study.categoryId === filter);
      
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
            My Portfolio
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            Explore my portfolio of success stories and see how I&apos;ve helped businesses like yours thrive.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'default' : 'outline'}
              onClick={() => setFilter(category.id)}
              className="px-4 py-2 text-sm"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study, i) => {
            const categoryName = categories.find(c => c.id === study.categoryId)?.name;
            return (
              <motion.div
                key={study.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                variants={cardVariants}
                className="flex"
              >
                <Card className="overflow-hidden group flex flex-col h-full w-full bg-secondary/30 dark:bg-secondary/20">
                  <Link href={`/portfolio/${study.slug}`} className="block h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={study.img}
                        alt={study.locales.en.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                        {categoryName && <Badge variant="secondary" className="w-min mb-2">{categoryName}</Badge>}
                        <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                          {study.locales.en.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='flex-grow'>
                      <div
                        className="text-muted-foreground line-clamp-3 text-sm md:text-base"
                        dangerouslySetInnerHTML={{ __html: study.locales.en.text }}
                      />
                    </CardContent>
                    <CardFooter>
                        <span className="text-primary hover:underline flex items-center text-sm font-semibold">
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                    </CardFooter>
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
