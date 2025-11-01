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
      { href: '/privacy-policy', name: 'Privacy Policy' },
      { href: '/terms-of-service', name: 'Terms of Service' },
    ],
  },
];

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: '#' },
  { icon: <Github className="h-5 w-5" />, href: '#' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 text-secondary-foreground border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="max-w-xs text-muted-foreground">
              A modern marketing and web development agency for growing businesses.
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold">Subscribe to our newsletter</h3>
              <form action="#" className="mt-2 flex items-center gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h3 className="font-semibold">{nav.label}</h3>
                <ul className="mt-4 space-y-2">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Trionex Tech. All rights reserved.
          </p>
          <div className="mt-4 flex items-center space-x-4 sm:mt-0">
            {socialLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Social link ${i + 1}`}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
