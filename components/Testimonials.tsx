'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionWrapper } from '@/components/SectionWrapper';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'CEO, PT Maju Jaya',
    image: '',
    initials: 'BS',
    rating: 5,
    content:
      'KonsultanPro membantu kami merestrukturisasi operasional. Dalam 8 bulan revenue naik 40% dan biaya operasional turun signifikan. Sangat recommended!',
  },
  {
    name: 'Siti Rahayu',
    role: 'Founder, Brand Lokal Fashion',
    image: '',
    initials: 'SR',
    rating: 5,
    content:
      'Dari branding sampai strategi digital marketing, mereka sangat detail. Sekarang brand kami dikenal di 5 kota besar. Timnya profesional dan responsif.',
  },
  {
    name: 'Andi Wijaya',
    role: 'Direktur, Distributor F&B',
    image: '',
    initials: 'AW',
    rating: 5,
    content:
      'Pendekatan data-driven mereka membuat keputusan bisnis kami lebih tepat. ROI dari proyek konsultasi jauh melebihi harapan.',
  },
  {
    name: 'Maya Putri',
    role: 'Owner, Startup EdTech',
    image: '',
    initials: 'MP',
    rating: 5,
    content:
      'Sebagai startup, kami butuh mentor yang paham growth. KonsultanPro memberikan roadmap yang jelas dan realistic. Sangat membantu!',
  },
];

/**
 * Testimonials Section — Slider review klien.
 */
export function Testimonials() {
  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  // Auto-play
  React.useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <SectionWrapper id='testimoni' className='py-20 md:py-28 bg-muted/40'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center max-w-2xl mx-auto mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
            Apa Kata Klien Kami
          </h2>
          <p className='mt-4 text-muted-foreground text-lg'>
            Testimoni nyata dari para pemimpin bisnis yang telah merasakan
            dampak kolaborasi bersama kami.
          </p>
        </div>

        <div className='max-w-3xl mx-auto relative'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className='border-none shadow-lg'>
                <CardContent className='p-8 md:p-10'>
                  {/* Stars */}
                  <div
                    className='flex gap-1 mb-6'
                    aria-label={`Rating ${t.rating} dari 5 bintang`}
                  >
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className='h-5 w-5 fill-primary text-primary'
                        aria-hidden='true'
                      />
                    ))}
                  </div>

                  <blockquote className='text-lg md:text-xl leading-relaxed text-foreground'>
                    &ldquo;{t.content}&rdquo;
                  </blockquote>

                  <div className='mt-8 flex items-center gap-4'>
                    <Avatar className='h-12 w-12'>
                      {t.image ? (
                        <AvatarImage src={t.image} alt={t.name} />
                      ) : null}
                      <AvatarFallback className='bg-primary/10 text-primary font-semibold'>
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className='font-semibold'>{t.name}</div>
                      <div className='text-sm text-muted-foreground'>
                        {t.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className='flex items-center justify-center gap-4 mt-8'>
            <Button
              variant='outline'
              size='icon'
              onClick={prev}
              aria-label='Testimoni sebelumnya'
            >
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <div className='flex gap-2'>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? 'w-6 bg-primary'
                      : 'w-2 bg-muted-foreground/30'
                  }`}
                  aria-label={`Ke testimoni ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant='outline'
              size='icon'
              onClick={next}
              aria-label='Testimoni berikutnya'
            >
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
