'use client';

import {
  Briefcase,
  LineChart,
  Users,
  Target,
  Lightbulb,
  Settings,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { SectionWrapper } from '@/components/SectionWrapper';

const services = [
  {
    icon: Briefcase,
    title: 'Konsultasi Bisnis',
    description:
      'Analisis mendalam model bisnis, struktur organisasi, dan strategi pertumbuhan jangka panjang untuk UMKM maupun korporasi.',
  },
  {
    icon: LineChart,
    title: 'Strategi Pemasaran',
    description:
      'Perencanaan digital marketing, brand positioning, dan campaign yang terukur untuk meningkatkan awareness & konversi.',
  },
  {
    icon: Users,
    title: 'Pengembangan SDM',
    description:
      'Training leadership, sistem kinerja, dan talent development agar tim Anda lebih produktif dan solid.',
  },
  {
    icon: Target,
    title: 'Business Process',
    description:
      'Optimalisasi alur kerja, SOP, dan efisiensi operasional agar bisnis berjalan lebih lean dan scalable.',
  },
  {
    icon: Lightbulb,
    title: 'Inovasi Produk',
    description:
      'Riset pasar, validasi ide, dan roadmap produk baru yang sesuai kebutuhan pelanggan target.',
  },
  {
    icon: Settings,
    title: 'Transformasi Digital',
    description:
      'Implementasi tools, sistem CRM/ERP, dan otomasi proses untuk mendukung growth modern.',
  },
];

/**
 * Services Section — Grid cards layanan.
 */
export function Services() {
  return (
    <SectionWrapper id='layanan' className='py-20 md:py-28 bg-muted/40'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center max-w-2xl mx-auto mb-14'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
            Layanan Kami
          </h2>
          <p className='mt-4 text-muted-foreground text-lg'>
            Solusi lengkap untuk membantu bisnis Anda naik kelas dengan
            pendekatan praktis dan berbasis data.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className='group hover:shadow-md hover:border-primary/30 transition-all duration-300'
              >
                <CardHeader>
                  <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors'>
                    <Icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <CardTitle className='text-xl'>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-base leading-relaxed'>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
