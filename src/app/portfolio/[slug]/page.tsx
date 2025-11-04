
'use client';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { caseStudies } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Link as LinkIcon, Youtube, ArrowLeft, CheckCircle, Target, Trophy, MessageSquareQuote } from 'lucide-react';
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
    Autoplay({ delay: 3000, stopOnInteraction: true })
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
  const hasMedia = study.preview.screenshots.length > 0 || youtubeEmbedUrl;

  return (
    <article className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12">
            <Button variant="ghost" asChild className="mb-4">
                <Link href="/portfolio">
                    <ArrowLeft className="mr-2 h-4 w-4"/>
                    Back to Portfolio
                </Link>
            </Button>
           <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
            {study.locales.en.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            {study.locales.en.text.replace(/<[^>]*>?/gm, '')}
          </p>
           <div className="mt-4 flex flex-wrap gap-2">
            {study.locales.en.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-sm">{tag}</Badge>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className='lg:col-span-2 space-y-12'>
                {hasMedia && (
                    <div className="mb-12">
                    {study.preview.screenshots.length > 0 ? (
                        <Carousel 
                        plugins={[plugin.current]}
                        className="w-full rounded-lg overflow-hidden border shadow-lg"
                        opts={{ loop: true }}
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        >
                        <CarouselContent>
                            {study.preview.screenshots.map((screenshot, index) => (
                            <CarouselItem key={index}>
                                <div className="aspect-video relative">
                                <Image
                                    src={screenshot}
                                    alt={`${study.locales.en.title} screenshot ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                        </Carousel>
                    ) : (
                        <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src={youtubeEmbedUrl!}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    )}
                    </div>
                )}
                
                <section>
                    <h2 className="font-headline text-3xl font-bold tracking-tight mb-4 flex items-center gap-3"><Trophy className="h-7 w-7 text-amber-500"/>Key Results</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {study.results.map((result, index) => (
                            <Card key={index} className="bg-secondary/50 dark:bg-secondary/20">
                                <CardContent className="p-4 flex items-center gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                                    <p className="font-medium">{result}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                
                <section>
                    <h2 className="font-headline text-3xl font-bold tracking-tight mb-4 flex items-center gap-3"><Target className="h-7 w-7 text-destructive"/>The Challenge</h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>{study.challenge}</p>
                    </div>
                </section>
                
                <section>
                    <h2 className="font-headline text-3xl font-bold tracking-tight mb-4 flex items-center gap-3"><CheckCircle className="h-7 w-7 text-primary"/>The Solution</h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                       <p>{study.solution}</p>
                    </div>
                </section>
            </div>

            <aside className="lg:sticky lg:top-24 h-min space-y-8">
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Project Links</CardTitle>
                    </CardHeader>
                    <CardContent>
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
                            <Button asChild variant="outline" className="justify-start w-full mt-3">
                                <Link href={study.preview.youtubeVideo} target="_blank" rel="noopener noreferrer">
                                    <Youtube className="mr-2 text-red-500" />
                                Watch on YouTube
                                </Link>
                            </Button>
                        )}
                         {!study.preview.links.length && !youtubeEmbedUrl && (
                             <p className="text-muted-foreground text-sm">No external links available.</p>
                        )}
                    </CardContent>
                 </Card>

                 {study.testimonial && (
                    <Card className="border-primary bg-gradient-to-br from-primary/10 to-background">
                         <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-3"><MessageSquareQuote className="h-6 w-6 text-primary"/>Client Testimonial</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <blockquote className="text-lg italic border-l-4 border-primary pl-4">
                                <p>{study.testimonial.text}</p>
                                <footer className="mt-4 text-base not-italic font-semibold text-foreground">
                                    &mdash; {study.testimonial.author}
                                </footer>
                            </blockquote>
                        </CardContent>
                    </Card>
                 )}
            </aside>
        </div>
      </div>
    </article>
  );
}
