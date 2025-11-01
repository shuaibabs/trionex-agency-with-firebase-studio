import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';

export default function ServicesPage() {
  const webDevServices = services.filter(s => s.category === 'Web Development');
  const marketingServices = services.filter(s => s.category === 'Digital Marketing');

  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide a comprehensive suite of digital services to elevate your brand and accelerate your growth, from web development to digital marketing.
          </p>
        </div>

        {/* Web Development Services */}
        <section className="mb-20">
          <h2 className="font-headline text-3xl font-bold tracking-tight mb-8 text-center sm:text-4xl">Web Development Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevServices.map((service) => (
              <Card
                key={service.id}
                className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {service.shortDescription}
                  </p>
                  <Button variant="outline" asChild className="w-full mt-auto">
                    <Link href={`/services/${service.slug}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Digital Marketing Services */}
        <section>
          <h2 className="font-headline text-3xl font-bold tracking-tight mb-8 text-center sm:text-4xl">Digital Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service) => (
              <Card
                key={service.id}
                className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {service.shortDescription}
                  </p>
                  <Button variant="outline" asChild className="w-full mt-auto">
                    <Link href={`/services/${service.slug}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
