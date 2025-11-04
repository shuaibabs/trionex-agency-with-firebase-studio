
'use client';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { caseStudies } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Link as LinkIcon, MonitorPlay, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React from 'react';

const iconMap: { [key: string]: React.ElementType } = {
  'fa-brands fa-github': Github,
  'fa-solid fa-link': LinkIcon,
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const study = caseStudies.find((p) => p.slug === slug);

  if (!study) {
    notFound();
  }
  
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return null;
    const videoId = url.split('v=')[1];
    if (!videoId) return null;
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      return `https://www.youtube.com/embed/${videoId.substring(0, ampersandPosition)}`;
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const youtubeEmbedUrl = getYouTubeEmbedUrl(study.preview.youtubeVideo);

  return (
    <article className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <header className="mb-12 text-center">
           <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl mt-2">
            {study.locales.en.title}
          </h1>
          <div
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: study.locales.en.text }}
          />
        </header>

        <div className="mb-12">
          {study.preview.screenshots.length > 0 && (
            <Carousel 
              plugins={[plugin.current]}
              className="w-full"
              opts={{ loop: true }}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {study.preview.screenshots.map((screenshot, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={screenshot}
                        alt={`${study.locales.en.title} screenshot ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          )}
          {youtubeEmbedUrl && !study.preview.screenshots.length && (
             <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src={youtubeEmbedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
          )}
          {!youtubeEmbedUrl && !study.preview.screenshots.length && (
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg bg-secondary/50 dark:bg-secondary/20 flex items-center justify-center">
              <Image
                src={study.img}
                alt={study.locales.en.title}
                fill
                className="object-contain p-8"
              />
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className='md:col-span-2 space-y-8'>
                <div>
                  <h2 className='font-headline text-2xl font-semibold mb-4'>Tech Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {study.locales.en.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-sm">{tag}</Badge>
                    ))}
                  </div>
                </div>
            </div>
            <div className="space-y-4">
                <h2 className="font-headline text-2xl font-semibold">Project Links</h2>
                {study.preview.links.length > 0 && (
                  <div className="flex flex-col gap-3">
                    {study.preview.links.map((link, index) => {
                      const Icon = iconMap[link.faIcon] || LinkIcon;
                      return (
                        <Button asChild key={index} variant="outline" className="justify-start">
                          <Link href={link.href} target="_blank" rel="noopener noreferrer">
                            <Icon className="mr-2" />
                            {link.tooltipString === 'see_on_github' ? 'View on GitHub' : 'Visit Website'}
                          </Link>
                        </Button>
                      )
                    })}
                  </div>
                )}
                 {youtubeEmbedUrl && (
                    <Button asChild variant="outline" className="justify-start w-full">
                          <Link href={study.preview.youtubeVideo} target="_blank" rel="noopener noreferrer">
                            <Youtube className="mr-2 text-red-500" />
                           Watch on YouTube
                          </Link>
                    </Button>
                )}

                {!study.preview.links.length && !youtubeEmbedUrl && (
                  <p className="text-muted-foreground text-sm">No external links available for this project.</p>
                )}
            </div>
        </div>

        <div className="mt-16 text-center border-t pt-12">
            <h2 className="font-headline text-2xl font-bold">Have a similar project?</h2>
            <p className="text-muted-foreground mt-2 mb-4">Let&apos;s build your success story together.</p>
            <Button asChild size="lg">
                <Link href="/contact">Get a Free Quote</Link>
            </Button>
        </div>

      </div>
    </article>
  );
}
