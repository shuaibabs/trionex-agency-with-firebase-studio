
'use client';

import LoadingLink from '@/components/loading-link';
import React from 'react';
import {
  ArrowRight,
  BarChart,
  Code,
  DollarSign,
  PenTool,
  Search,
  Users,
  MessageSquareQuote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { placeholderImages } from '@/lib/data';
import { services, blogPosts, testimonials, clients } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FuturisticAnimation from '@/components/futuristic-animation';
import Logo from '@/components/icons/logo';
import { Starfield } from '@/components/starfield';
import Autoplay from "embla-carousel-autoplay";


const serviceIcons: { [key: string]: React.ElementType } = {
  'business-website-development': Code,
  'seo-optimization': Search,
  'ppc-advertising': BarChart,
  'content-marketing': PenTool,
  'ecommerce-website': Code,
  'social-media-marketing': Users,
  'real-estate-website-development': Code,
  'college-school-website-development': Code,
  'healthcare-clinic-website-development': Code,
  'portfolio-personal-branding-websites': Code,
  'startup-mvp-development': Code,
  'landing-page-design-development': Code,
};

export default function Home() {
  const featuredServices = services.filter(s => 
    ['business-website-development', 'portfolio-personal-branding-websites', 'ppc-advertising', 'seo-optimization'].includes(s.id)
  );
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background to-secondary/50 dark:from-background dark:to-secondary/20 overflow-hidden">
        <Starfield />
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 text-center md:grid-cols-2 md:text-left">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl glow-on-hover">
              Elevate Your Digital Presence
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              We are a results-driven agency specializing in web development,
              SEO, and digital marketing. Let us build your success story.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center md:justify-start">
              <Button asChild size="lg">
                <LoadingLink href="/contact">Get a Free Quote</LoadingLink>
              </Button>
              <Button asChild size="lg" variant="outline">
                <LoadingLink href="/services">Our Services</LoadingLink>
              </Button>
            </div>
          </div>
          <div className="relative h-96 w-full flex flex-col items-center justify-center">
            <FuturisticAnimation />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Logo className="h-8 w-auto" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <Users className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              <p className="mt-2 text-2xl sm:text-3xl font-bold font-headline">150+</p>
              <p className="text-muted-foreground text-sm sm:text-base">Happy Clients</p>
            </div>
            <div className="text-center">
              <Code className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              <p className="mt-2 text-2xl sm:text-3xl font-bold font-headline">200+</p>
              <p className="text-muted-foreground text-sm sm:text-base">Projects Completed</p>
            </div>
            <div className="text-center">
              <DollarSign className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              <p className="mt-2 text-2xl sm:text-3xl font-bold font-headline">300%</p>
              <p className="text-muted-foreground text-sm sm:text-base">Average ROI</p>
            </div>
            <div className="text-center">
              <BarChart className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              <p className="mt-2 text-2xl sm:text-3xl font-bold font-headline">5+</p>
              <p className="text-muted-foreground text-sm sm:text-base">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="bg-secondary/50 dark:bg-secondary/20 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline">Our Expertise</Badge>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Services We Offer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
              From crafting stunning websites to dominating search results, we have
              you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, i) => {
              const Icon = serviceIcons[service.id] || Code;
              return (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  variants={cardVariants}
                >
                  <Card
                    className={cn("transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl card-glow-on-hover h-full flex flex-col")}
                  >
                    <CardHeader className="items-center text-center">
                      <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="font-headline text-xl">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <p className="mb-4 text-muted-foreground text-sm md:text-base">
                        {service.shortDescription}
                      </p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button variant="ghost" asChild className="text-primary w-full">
                        <LoadingLink href={`/services/${service.slug}`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </LoadingLink>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
            <h3 className="mb-8 text-center text-base md:text-lg font-semibold text-muted-foreground">
                Trusted by leading companies worldwide
            </h3>
            <div
                className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
                >
                <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
                    {duplicatedClients.map((client) => {
                        const clientImage = placeholderImages.find(p => p.id === client.imageId);
                        return (
                            <div key={`${client.id}-1`} className="flex-shrink-0 w-1/4 sm:w-1/6 md:w-1/8 p-4">
                                {clientImage && (
                                    <Image
                                        src={clientImage.imageUrl}
                                        alt={client.name}
                                        width={150}
                                        height={50}
                                        className="object-contain h-[50px] w-auto mx-auto grayscale transition-all hover:grayscale-0"
                                        data-ai-hint={clientImage.imageHint}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>

      {/* Testimonials Section */}
      <section className="bg-secondary/50 dark:bg-secondary/20 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline">Client Feedback</Badge>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
          </div>
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-4xl mx-auto"
            opts={{ loop: true }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const avatarImage = placeholderImages.find(p => p.id === testimonial.avatarId);
                return (
                <CarouselItem key={testimonial.id}>
                  <Card className="border-0 bg-transparent shadow-none">
                    <CardContent className="p-6 text-center">
                      <p className="mb-6 text-lg md:text-xl italic text-foreground">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div className="flex items-center justify-center">
                        {avatarImage && <Avatar className="mr-4 h-12 w-12">
                          <AvatarImage
                            src={avatarImage.imageUrl}
                            alt={testimonial.name}
                            data-ai-hint={avatarImage.imageHint}
                          />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>}
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )})}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline">Our Insights</Badge>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              From Our Blog
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
              Stay ahead of the curve with our latest articles and insights.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, i) => {
              const blogImage = placeholderImages.find(p => p.id === post.imageId);
              return (
              <motion.div
                key={post.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card key={post.id} className={cn("overflow-hidden group card-glow-on-hover h-full flex flex-col")}>
                  <LoadingLink href={`/blog/${post.slug}`} className="block flex flex-col h-full">
                    <div className="aspect-video relative">
                      {blogImage && <Image
                        src={blogImage.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={blogImage.imageHint}
                      />}
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground line-clamp-2 text-sm md:text-base">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </LoadingLink>
                </Card>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="relative rounded-lg bg-secondary/50 dark:bg-secondary/20 p-8 md:p-12 overflow-hidden">
                <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
                            Let's talk about how Trionex Digital can help you achieve your
                            goals. Schedule a free consultation today.
                        </p>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                size="lg"
                                asChild
                            >
                                <LoadingLink href="/contact">
                                Schedule a meeting <ArrowRight className="ml-2 h-5 w-5" />
                                </LoadingLink>
                            </Button>
                        </motion.div>
                    </div>
                    <div className="relative h-48 md:h-full flex items-center justify-center">
                        <MessageSquareQuote className="w-24 h-24 md:w-32 md:h-32 text-primary/20" />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
