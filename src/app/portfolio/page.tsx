'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { caseStudies, placeholderImages } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Category = 'All' | 'Web' | 'Ads' | 'SEO' | 'WordPress';
const categories: Category[] = ['All', 'Web', 'Ads', 'SEO', 'WordPress'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Category>('All');

  const filteredCaseStudies =
    filter === 'All'
      ? caseStudies
      : caseStudies.filter((study) => study.category === filter);

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
          {filteredCaseStudies.map((study) => {
            const portfolioImage = placeholderImages.find(p => p.id === study.imageId);
            return (
              <Card key={study.id} className="overflow-hidden group flex flex-col">
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
                    <CardTitle className="font-headline text-xl">
                      {study.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className="text-muted-foreground line-clamp-3">
                    {study.shortDescription}
                  </p>
                </CardContent>
                <CardFooter>
                    {/* This would link to a detailed case study page e.g. /portfolio/${study.slug} */}
                    <Button variant="link" asChild className='p-0 text-primary'>
                        <span className="cursor-pointer">
                            Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                    </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
