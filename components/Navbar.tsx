'use client';

import * as React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#tentang', label: 'Tentang Kami' },
  { href: '#testimoni', label: 'Testimoni' },
  { href: '#kontak', label: 'Kontak' },
];

/**
 * Navbar responsif dengan smooth scroll & mobile menu.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav
        className='container mx-auto flex h-16 items-center justify-between px-4 md:px-6'
        aria-label='Navigasi utama'
      >
        {/* Logo */}
        <a
          href='#beranda'
          onClick={(e) => handleClick(e, '#beranda')}
          className='flex items-center gap-2 font-bold text-lg tracking-tight'
        >
          <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold'>
            KP
          </span>
          <span className='hidden sm:inline'>KonsultanPro</span>
        </a>

        {/* Desktop nav */}
        <ul className='hidden md:flex items-center gap-1'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className='px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <Button asChild size='sm' className='hidden md:inline-flex'>
            <a href='#kontak' onClick={(e) => handleClick(e, '#kontak')}>
              Konsultasi Gratis
            </a>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className='md:hidden border-t bg-background/95 backdrop-blur-md'>
          <ul className='container mx-auto flex flex-col gap-1 px-4 py-4'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className='block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-accent'
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className='pt-2'>
              <Button asChild className='w-full'>
                <a href='#kontak' onClick={(e) => handleClick(e, '#kontak')}>
                  Konsultasi Gratis
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
