
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services, caseStudies, placeholderImages } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const relatedCaseStudies = caseStudies.filter(cs => service.caseStudyIds.includes(cs.id));
  const serviceImage = placeholderImages.find(p => p.id.includes(service.id));

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline">Service</Badge>
          <h1 className="mt-2 font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            {service.longDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">

            {/* What's Included Section */}
            <section>
              <h2 className="font-headline text-2xl font-bold mb-4">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.scope.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-secondary/50 dark:bg-secondary/20 p-4 rounded-lg">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Our Process Section */}
            <section>
              <h2 className="font-headline text-2xl font-bold mb-6">Our Process</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:-translate-x-px">
                {service.process.map((step) => (
                  <div key={step.step} className="relative flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold font-headline flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="ml-6">
                      <h3 className="font-headline text-lg font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Case Studies Section */}
            {relatedCaseStudies.length > 0 && (
              <section>
                <h2 className="font-headline text-2xl font-bold mb-4">Related Case Studies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedCaseStudies.map(study => {
                    const studyImage = placeholderImages.find(p => p.id === study.imageId);
                    return (
                      <Card key={study.id} className="group overflow-hidden">
                        <Link href={`/portfolio/${study.slug}`} className="block">
                          {studyImage && (
                              <div className="aspect-video relative">
                                  <Image src={studyImage.imageUrl} alt={study.title} fill className="object-cover transition-transform group-hover:scale-105" data-ai-hint={studyImage.imageHint} />
                              </div>
                          )}
                          <CardHeader>
                              <Badge variant="secondary" className="w-min mb-2">{study.category}</Badge>
                              <CardTitle className="font-headline text-lg">{study.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <span className="text-primary hover:underline">
                                  Read Case Study <ArrowRight className="ml-2 h-4 w-4 inline" />
                              </span>
                          </CardContent>
                        </Link>
                      </Card>
                    )
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {serviceImage && (
                <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image src={serviceImage.imageUrl} alt={service.title} fill className="object-cover" data-ai-hint={serviceImage.imageHint} />
                </div>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Pricing Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.pricingOptions.map(option => (
                    <div key={option.plan} className="p-4 rounded-md bg-secondary/50 dark:bg-secondary/20">
                        <h4 className="font-semibold">{option.plan}</h4>
                        <p className="text-primary font-bold">{option.price}</p>
                        <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                            {option.features.map(f => <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> {f}</li>)}
                        </ul>
                    </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground text-center">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Ready to get started?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Let's discuss how our {service.title} services can help your business grow.</p>
                </CardContent>
                <CardFooter>
                    <Button variant="secondary" size="lg" className="w-full" asChild>
                        <Link href="/contact">Schedule a Free Consultation</Link>
                    </Button>
                </CardFooter>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
