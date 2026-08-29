'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Hero Section — Headline kuat + CTA utama.
 */
export function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id='beranda'
      className='relative min-h-[90vh] flex items-center overflow-hidden pt-16'
    >
      {/* Background gradient */}
      <div
        className='absolute inset-0 -z-10 bg-linear-to-br from-primary/10 via-background to-accent/30 dark:from-primary/5 dark:via-background dark:to-accent/10'
        aria-hidden='true'
      />
      <div
        className='absolute top-20 right-0 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl'
        aria-hidden='true'
      />

      <div className='container mx-auto px-4 md:px-6 py-20 md:py-28'>
        <div className='max-w-3xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className='inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6'>
              <CheckCircle2 className='h-4 w-4' />
              Konsultan Bisnis Terpercaya sejak 2015
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight'
          >
            Tingkatkan Skala Bisnis Anda dengan{' '}
            <span className='text-primary'>Strategi Terbukti</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'
          >
            Kami membantu UMKM dan perusahaan berkembang melalui konsultasi
            bisnis, strategi pemasaran, dan optimalisasi operasional yang
            terukur hasilnya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'
          >
            <Button size='lg' onClick={scrollToContact} className='gap-2'>
              Konsultasi Gratis
              <ArrowRight className='h-4 w-4' />
            </Button>
            <Button size='lg' variant='outline' asChild>
              <a href='#layanan'>Lihat Layanan Kami</a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground'
          >
            <div className='flex flex-col items-center'>
              <span className='text-2xl font-bold text-foreground'>500+</span>
              <span>Klien Puas</span>
            </div>
            <div className='h-8 w-px bg-border hidden sm:block' />
            <div className='flex flex-col items-center'>
              <span className='text-2xl font-bold text-foreground'>10+</span>
              <span>Tahun Pengalaman</span>
            </div>
            <div className='h-8 w-px bg-border hidden sm:block' />
            <div className='flex flex-col items-center'>
              <span className='text-2xl font-bold text-foreground'>98%</span>
              <span>Tingkat Kepuasan</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
