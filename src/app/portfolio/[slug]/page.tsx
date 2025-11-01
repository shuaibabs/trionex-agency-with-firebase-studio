import { notFound } from 'next/navigation';
import Image from 'next/image';
import { caseStudies, placeholderImages } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BarChart, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

const resultIcons = [BarChart, TrendingUp, Zap];

export default function CaseStudyPage({ params }: { params: { slug:string } }) {
  const study = caseStudies.find((p) => p.slug === params.slug);

  if (!study) {
    notFound();
  }

  const portfolioImage = placeholderImages.find(p => p.id === study.imageId);

  return (
    <article className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
           <Badge variant="outline">{study.category}</Badge>
           <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl mt-2">
            {study.title}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">{study.shortDescription}</p>
        </header>
        
        {portfolioImage && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-12 shadow-lg">
            <Image
              src={portfolioImage.imageUrl}
              alt={study.title}
              fill
              className="object-cover"
              data-ai-hint={portfolioImage.imageHint}
              priority
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className='prose prose-lg dark:prose-invert max-w-none'>
                <h2 className='font-headline'>The Challenge</h2>
                <p>{study.challenge}</p>
                <h2 className='font-headline'>Our Solution</h2>
                <p>{study.solution}</p>
            </div>
            <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold">Key Results</h2>
                {study.results.map((result, index) => {
                    const Icon = resultIcons[index % resultIcons.length];
                    return (
                        <Card key={index} className="bg-secondary/50 dark:bg-secondary/20">
                            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                <div className="bg-primary/10 p-2 rounded-full">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-3xl font-bold">{result.metric}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">{result.value}</p>
                                <p className="text-sm text-muted-foreground">{result.description}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>

        <div className="mt-16 text-center">
            <h2 className="font-headline text-2xl font-bold">Have a similar project?</h2>
            <p className="text-muted-foreground mt-2 mb-4">Let's build your success story together.</p>
            <Button asChild size="lg">
                <Link href="/contact">Get a Free Quote</Link>
            </Button>
        </div>

      </div>
    </article>
  );
}
