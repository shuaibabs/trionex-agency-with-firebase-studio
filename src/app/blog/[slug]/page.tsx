
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts, placeholderImages } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

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
        <header className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
            {post.title}
          </h1>
          <div className="mt-6 flex justify-center items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              {authorAvatar && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src={authorAvatar.imageUrl} alt={post.author.name} data-ai-hint={authorAvatar.imageHint} />
                  <AvatarFallback>{post.author.name.substring(0, 1)}</AvatarFallback>
                </Avatar>
              )}
              <span>{post.author.name}</span>
            </div>
            <span>&bull;</span>
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {blogImage && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-12 shadow-lg">
            <Image
              src={blogImage.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={blogImage.imageHint}
              priority
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
          <p className="lead text-xl text-muted-foreground">{post.excerpt}</p>
          <p>{post.content}</p>
          {/* Add more paragraphs for a full article */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
          </p>
          <h2 className="font-headline">Subheading Here</h2>
          <p>
            Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augu. Praesent egestas leo in pede. Praesent blanitac, tellus.
          </p>
          <blockquote>
            "This is a blockquote. It's a great way to highlight a key point or a quote from an expert."
          </blockquote>
          <p>
            Fusce tristique, nisl Sign in to write a review. Aliquam erat volutpat. Nulla facilisi. Duis sit amet felis. Morbi nisl `nulla`, pulvinar `nulla`, commodo `nulla`, porttitor `nulla`, et `nulla`.
          </p>
        </div>
      </div>
    </article>
  );
}
