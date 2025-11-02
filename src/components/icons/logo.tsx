import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 170 25"
      className={cn('h-6 w-auto', className)}
      aria-label="Trionex Digital Logo"
    >
      <title>Trionex Digital Logo</title>
      <text
        x="0"
        y="20"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="hsl(var(--primary))"
      >
        Trionex
      </text>
      <text
        x="85"
        y="20"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="24"
        fontWeight="500"
        fill="hsl(var(--foreground))"
      >
        Digital
      </text>
    </svg>
  );
}
