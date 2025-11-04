
'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts, placeholderImages } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import LoadingLink from '@/components/loading-link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogPostPage({ params }: { params: { slug:string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const blogImage = placeholderImages.find(p => p.id === post.imageId);
  const authorAvatar = placeholderImages.find(p => p.id === post.author.avatarId);

  return (
    <article className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Button variant="ghost" asChild className="mb-8">
              <LoadingLink href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4"/>
                  Back to Blog
              </LoadingLink>
          </Button>
        </motion.div>

        {blogImage && (
          <motion.div 
            className="relative aspect-video rounded-lg overflow-hidden mb-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src={blogImage.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={blogImage.imageHint}
              priority
            />
          </motion.div>
        )}

        <header className="mb-12">
          <motion.h1 
            className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {post.title}
          </motion.h1>
          
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3">
              {authorAvatar && (
                <Avatar className="h-10 w-10">
                  <AvatarImage src={authorAvatar.imageUrl} alt={post.author.name} data-ai-hint={authorAvatar.imageHint} />
                  <AvatarFallback>{post.author.name.substring(0, 1)}</AvatarFallback>
                </Avatar>
              )}
              <div>
                <p className="font-semibold text-foreground">{post.author.name}</p>
                <p className="text-xs">Author</p>
              </div>
            </div>
             <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5"/>
                <span>{post.date}</span>
             </div>
             <div className="flex items-center gap-3">
                <Clock className="h-5 w-5"/>
                <span>{post.readTime}</span>
             </div>
          </motion.div>
        </header>


        <motion.div 
          className="prose prose-lg dark:prose-invert max-w-none mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="lead text-xl text-muted-foreground">{post.excerpt}</p>
          
          <h2>The Core Idea</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
          </p>

          <ul>
            <li>First, we need to understand the problem space.</li>
            <li>Second, we identify the key stakeholders.</li>
            <li>Third, we develop a phased approach to the solution.</li>
          </ul>

          <h2 className="font-headline">Diving Deeper</h2>
          <p>
            Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augu. Praesent egestas leo in pede. Praesent blanitac, tellus.
          </p>
          <blockquote>
            "The journey of a thousand miles begins with a single step. This is that step."
          </blockquote>
          <p>
            Fusce tristique, nisl Sign in to write a review. Aliquam erat volutpat. Nulla facilisi. Duis sit amet felis. Morbi nisl `nulla`, pulvinar `nulla`, commodo `nulla`, porttitor `nulla`, et `nulla`. This approach allows for iterative development and feedback, ensuring the final product aligns perfectly with user needs and business goals.
          </p>
        </motion.div>
      </div>
    </article>
  );
}
