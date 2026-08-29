'use client';

import { Award, Clock, Shield, TrendingUp } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';

const stats = [
  { value: '500+', label: 'Klien Dilayani', icon: UsersIcon },
  { value: '10+', label: 'Tahun Pengalaman', icon: Clock },
  { value: '98%', label: 'Kepuasan Klien', icon: Award },
  { value: '3x', label: 'Rata-rata ROI Klien', icon: TrendingUp },
];

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
      <circle cx='9' cy='7' r='4' />
      <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
    </svg>
  );
}

const values = [
  {
    icon: Shield,
    title: 'Terpercaya & Transparan',
    description:
      'Setiap rekomendasi didukung data dan laporan jelas. Tidak ada hidden agenda.',
  },
  {
    icon: TrendingUp,
    title: 'Hasil yang Terukur',
    description:
      'Kami fokus pada KPI nyata: pertumbuhan revenue, efisiensi, dan kepuasan pelanggan.',
  },
  {
    icon: Award,
    title: 'Tim Berpengalaman',
    description:
      'Konsultan dengan latar belakang industri, MBA, dan sertifikasi profesional.',
  },
];

/**
 * About / Why Us Section — Value proposition & kredibilitas.
 */
export function About() {
  return (
    <SectionWrapper id='tentang' className='py-20 md:py-28'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left content */}
          <div>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
              Mengapa Memilih <span className='text-primary'>KonsultanPro</span>
              ?
            </h2>
            <p className='mt-4 text-muted-foreground text-lg leading-relaxed'>
              Sejak 2015, kami telah mendampingi ratusan bisnis di Indonesia
              untuk meraih pertumbuhan berkelanjutan. Pendekatan kami praktis,
              berbasis data, dan disesuaikan dengan konteks lokal.
            </p>

            <div className='mt-8 space-y-5'>
              {values.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className='flex gap-4'>
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                      <Icon className='h-5 w-5' aria-hidden='true' />
                    </div>
                    <div>
                      <h3 className='font-semibold'>{item.title}</h3>
                      <p className='text-sm text-muted-foreground mt-0.5'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right stats */}
          <div className='grid grid-cols-2 gap-4 sm:gap-6'>
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className='rounded-xl border bg-card p-6 text-center shadow-sm hover:shadow-md transition-shadow'
                >
                  <div className='mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary'>
                    <Icon className='h-5 w-5' aria-hidden='true' />
                  </div>
                  <div className='text-3xl font-bold text-foreground'>
                    {stat.value}
                  </div>
                  <div className='mt-1 text-sm text-muted-foreground'>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
