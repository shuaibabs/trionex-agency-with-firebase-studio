
import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from '../icons/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerNavs = [
  {
    label: 'Product',
    items: [
      { href: '/pricing', name: 'Pricing' },
      { href: '/services', name: 'Services' },
      { href: '/portfolio', name: 'Case Studies' },
      { href: '/roi-calculator', name: 'ROI Calculator' },
    ],
  },
  {
    label: 'Company',
    items: [
      { href: '/about', name: 'About Us' },
      { href: '/blog', name: 'Blog' },
      { href: '/contact', name: 'Contact' },
    ],
  },
  {
    label: 'Legal',
    items: [
      { href: '#', name: 'Privacy Policy' },
      { href: '#', name: 'Terms of Service' },
    ],
  },
];

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
  { icon: <Github className="h-5 w-5" />, href: '#', label: 'Github' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 border-t">
      <div className="container mx-auto px-4">
        {/* Top Section with Newsletter */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 lg:col-span-6">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground">Stay Ahead of the Curve</h2>
                <p className="text-muted-foreground mt-2">Subscribe to our newsletter for the latest insights on digital marketing, web trends, and tech innovation.</p>
            </div>
            <div className="md:col-span-7 lg:col-span-6">
                <form action="#" className="flex flex-col sm:flex-row items-center gap-2">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 bg-background"
                        aria-label="Email for newsletter"
                    />
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                        Subscribe
                    </Button>
                </form>
            </div>
        </div>
        
        <div className="border-t"></div>

        {/* Main Footer content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
                <Link href="/" aria-label="Back to homepage">
                    <Logo />
                </Link>
                <p className="text-muted-foreground text-sm">
                  A modern marketing and web development agency for growing businesses.
                </p>
                <div className="flex items-center space-x-3 mt-2">
                    {socialLinks.map((link, i) => (
                    <Button
                        key={i}
                        asChild
                        variant="outline"
                        size="icon"
                        className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                    >
                        <Link
                            href={link.href}
                            aria-label={link.label}
                        >
                            {link.icon}
                        </Link>
                    </Button>
                    ))}
                </div>
            </div>
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h3 className="font-headline font-semibold text-foreground">{nav.label}</h3>
                <ul className="mt-4 space-y-3">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Trionex Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
