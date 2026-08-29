import { Mail } from 'lucide-react';

/**
 * Footer sederhana dengan link & copyright.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t bg-muted/30'>
      <div className='container mx-auto px-4 md:px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Brand */}
          <div>
            <div className='flex items-center gap-2 font-bold text-lg'>
              <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold'>
                KP
              </span>
              KonsultanPro
            </div>
            <p className='mt-3 text-sm text-muted-foreground max-w-xs'>
              Mitra terpercaya untuk pertumbuhan bisnis Anda sejak 2015.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className='font-semibold mb-3'>Navigasi</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <a
                  href='#layanan'
                  className='hover:text-foreground transition-colors'
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href='#tentang'
                  className='hover:text-foreground transition-colors'
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href='#testimoni'
                  className='hover:text-foreground transition-colors'
                >
                  Testimoni
                </a>
              </li>
              <li>
                <a
                  href='#kontak'
                  className='hover:text-foreground transition-colors'
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className='font-semibold mb-3'>Ikuti Kami</h3>
            <div className='flex gap-3'>
              {/* LinkedIn SVG */}
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent transition-colors'
                aria-label='LinkedIn'
              >
                <svg className='h-4 w-4 fill-current' viewBox='0 0 24 24'>
                  <path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.35c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z' />
                </svg>
              </a>

              {/* Instagram SVG */}
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent transition-colors'
                aria-label='Instagram'
              >
                <svg
                  className='h-4 w-4 fill-none stroke-current stroke-2'
                  viewBox='0 0 24 24'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                  <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                </svg>
              </a>

              {/* Email */}
              <a
                href='mailto:hello@konsultanpro.id'
                className='flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent transition-colors'
                aria-label='Email'
              >
                <Mail className='h-4 w-4' />
              </a>
            </div>
          </div>
        </div>

        <div className='mt-10 pt-6 border-t text-center text-sm text-muted-foreground'>
          © {year} KonsultanPro. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
