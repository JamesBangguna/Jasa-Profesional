'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { ContactForm } from '@/components/ContactForm';

/**
 * Contact Section — Form + info kontak.
 */
export function Contact() {
  return (
    <SectionWrapper id='kontak' className='py-20 md:py-28'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center max-w-2xl mx-auto mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
            Hubungi Kami
          </h2>
          <p className='mt-4 text-muted-foreground text-lg'>
            Siap mendiskusikan tantangan bisnis Anda? Isi formulir di bawah atau
            hubungi kami langsung. Konsultasi awal gratis.
          </p>
        </div>

        <div className='grid lg:grid-cols-5 gap-10 lg:gap-14 max-w-5xl mx-auto'>
          {/* Contact info */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='flex gap-4'>
              <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                <Mail className='h-5 w-5' aria-hidden='true' />
              </div>
              <div>
                <h3 className='font-semibold'>Email</h3>
                <a
                  href='mailto:hello@konsultanpro.id'
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  hello@konsultanpro.id
                </a>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                <Phone className='h-5 w-5' aria-hidden='true' />
              </div>
              <div>
                <h3 className='font-semibold'>Telepon / WhatsApp</h3>
                <a
                  href='https://wa.me/6281234567890'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  +62 812-3456-7890
                </a>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                <MapPin className='h-5 w-5' aria-hidden='true' />
              </div>
              <div>
                <h3 className='font-semibold'>Lokasi</h3>
                <p className='text-muted-foreground'>
                  Jakarta Selatan, Indonesia
                  <br />
                  (Konsultasi online & offline tersedia)
                </p>
              </div>
            </div>

            <div className='rounded-xl bg-primary/5 border border-primary/20 p-5 mt-8'>
              <p className='text-sm font-medium text-primary'>
                ⏱ Respon dalam 1×24 jam kerja
              </p>
              <p className='text-sm text-muted-foreground mt-1'>
                Tim kami siap membantu Anda menemukan solusi terbaik.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className='lg:col-span-3'>
            <div className='rounded-xl border bg-card p-6 md:p-8 shadow-sm'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
