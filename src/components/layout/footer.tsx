
import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from '../icons/logo';
import { Button } from '@/components/ui/button';

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
