import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { placeholderImages, team } from '@/lib/data';
import { CheckCircle } from 'lucide-react';

const aboutHeroImage = placeholderImages.find((img) => img.id === 'about-hero');

const values = [
  { title: 'Innovation', description: 'We constantly push boundaries to find better solutions.' },
  { title: 'Collaboration', description: 'We believe teamwork leads to the best outcomes.' },
  { title: 'Integrity', description: 'We operate with transparency and honesty.' },
  { title: 'Results', description: 'We are fiercely committed to driving client success.' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-secondary/50 dark:bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
            We are Synergy Digital
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            A passionate team of developers, designers, and marketers dedicated to crafting exceptional digital experiences that drive growth.
          </p>
        </div>
        <div className="container mx-auto px-4 mt-12">
            {aboutHeroImage && (
                <div className="relative aspect-[16/7] rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={aboutHeroImage.imageUrl}
                        alt={aboutHeroImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={aboutHeroImage.imageHint}
                        priority
                    />
                </div>
            )}
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline">Our Mission</Badge>
              <h2 className="mt-2 font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                To empower businesses through technology and creativity.
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Our mission is to be a true partner to our clients, providing them with the strategic insights, creative vision, and technical expertise needed to thrive in an ever-evolving digital landscape. We build more than websites; we build growth engines.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="p-4 rounded-lg bg-secondary/50 dark:bg-secondary/20">
                  <CheckCircle className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold font-headline">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-secondary/50 dark:bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline">Our Leaders</Badge>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The architects of your digital success.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => {
              const avatarImage = placeholderImages.find(p => p.id === member.avatarId);
              return (
              <Card key={member.id} className="text-center">
                <CardContent className="p-6">
                  {avatarImage && (
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={avatarImage.imageUrl} alt={member.name} data-ai-hint={avatarImage.imageHint} />
                      <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                  )}
                  <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            )})}
          </div>
        </div>
      </section>
    </div>
  );
}
