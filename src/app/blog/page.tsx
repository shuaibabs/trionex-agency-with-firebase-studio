
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts, placeholderImages } from '@/lib/data';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CardSkeleton } from '@/components/ui/card-skeleton';

export default function BlogPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
            Our Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Insights, trends, and expert advice on digital marketing and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
             Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)
          ) : (
            blogPosts.map((post, i) => {
              const blogImage = placeholderImages.find(p => p.id === post.imageId);
              return (
                <motion.div
                  key={post.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  variants={cardVariants}
                >
                  <Card className="overflow-hidden group h-full">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="aspect-video relative">
                        {blogImage && (
                          <Image
                            src={blogImage.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={blogImage.imageHint}
                          />
                        )}
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
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-3">
                          {post.excerpt}
                        </p>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
              );
            })
          )}
        </div>
        {/* Simple Pagination Placeholder */}
        <div className="flex justify-center mt-12">
            {/* In a real app, this would be dynamic pagination component */}
        </div>
      </div>
    </div>
  );
}

    
