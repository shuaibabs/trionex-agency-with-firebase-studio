import { ArrowRight, BarChart, Code, PenTool, Search } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';

const serviceIcons: { [key: string]: React.ElementType } = {
  'web-development': Code,
  'seo-optimization': Search,
  'digital-advertising': BarChart,
  'content-marketing': PenTool,
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide a comprehensive suite of digital services to elevate your brand and accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = serviceIcons[service.id] || Code;
            return (
              <Card
                key={service.id}
                className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary w-min">
                    <Icon className="h-8 w-8" />
                  </div>
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
