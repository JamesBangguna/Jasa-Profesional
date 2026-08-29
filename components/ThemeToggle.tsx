'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

/**
 * Toggle Dark/Light mode.
 * Mengikuti system preference secara default.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Menggunakan React.useSyncExternalStore untuk mengecek status mount
  // tanpa memicu warning setState-in-effect.
  const mounted = React.useSyncExternalStore(
    React.useCallback(() => () => {}, []),
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <Button variant='ghost' size='icon' aria-label='Toggle tema' disabled>
        <Sun className='h-5 w-5' />
      </Button>
    );
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={
        theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'
      }
    >
      {theme === 'dark' ? (
        <Sun className='h-5 w-5 transition-transform' />
      ) : (
        <Moon className='h-5 w-5 transition-transform' />
      )}
    </Button>
  );
}
