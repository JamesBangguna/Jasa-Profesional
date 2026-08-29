'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

/** Schema validasi form kontak */
const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Nama minimal 2 karakter')
    .max(100, 'Nama terlalu panjang'),
  email: z.string().email('Format email tidak valid'),
  phone: z
    .string()
    .min(10, 'Nomor telepon minimal 10 digit')
    .max(20, 'Nomor telepon terlalu panjang')
    .regex(/^[0-9+\-\s()]+$/, 'Format nomor telepon tidak valid'),
  message: z
    .string()
    .min(10, 'Pesan minimal 10 karakter')
    .max(2000, 'Pesan terlalu panjang'),
});

type ContactFormData = z.infer<typeof contactSchema>;

/**
 * Contact Form — Validasi client-side + submit ke API Route.
 * Mengirim email via Resend.
 */
export function ContactForm() {
  const [status, setStatus] = React.useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMsg, setErrorMsg] = React.useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Gagal mengirim pesan');
      }

      setStatus('success');
      reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Terjadi kesalahan. Coba lagi.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div
        className='rounded-xl border bg-card p-8 text-center'
        role='status'
        aria-live='polite'
      >
        <CheckCircle2 className='mx-auto h-12 w-12 text-primary mb-4' />
        <h3 className='text-xl font-semibold'>Pesan Terkirim!</h3>
        <p className='mt-2 text-muted-foreground'>
          Terima kasih. Tim kami akan menghubungi Anda dalam 1×24 jam kerja.
        </p>
        <Button
          variant='outline'
          className='mt-6'
          onClick={() => setStatus('idle')}
        >
          Kirim Pesan Lain
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-5'
      noValidate
      aria-label='Formulir kontak'
    >
      <div className='space-y-2'>
        <Label htmlFor='name'>
          Nama Lengkap <span className='text-destructive'>*</span>
        </Label>
        <Input
          id='name'
          placeholder='Contoh: Budi Santoso'
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name')}
        />
        {errors.name && (
          <p id='name-error' className='text-sm text-destructive' role='alert'>
            {errors.name.message}
          </p>
        )}
      </div>

      <div className='grid sm:grid-cols-2 gap-5'>
        <div className='space-y-2'>
          <Label htmlFor='email'>
            Email <span className='text-destructive'>*</span>
          </Label>
          <Input
            id='email'
            type='email'
            placeholder='nama@email.com'
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p
              id='email-error'
              className='text-sm text-destructive'
              role='alert'
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='phone'>
            Telepon / WhatsApp <span className='text-destructive'>*</span>
          </Label>
          <Input
            id='phone'
            type='tel'
            placeholder='08xxxxxxxxxx'
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            {...register('phone')}
          />
          {errors.phone && (
            <p
              id='phone-error'
              className='text-sm text-destructive'
              role='alert'
            >
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='message'>
          Pesan <span className='text-destructive'>*</span>
        </Label>
        <Textarea
          id='message'
          placeholder='Ceritakan kebutuhan bisnis Anda secara singkat...'
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <p
            id='message-error'
            className='text-sm text-destructive'
            role='alert'
          >
            {errors.message.message}
          </p>
        )}
      </div>

      {status === 'error' && (
        <div
          className='flex items-center gap-2 rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive'
          role='alert'
        >
          <AlertCircle className='h-4 w-4 shrink-0' />
          {errorMsg}
        </div>
      )}

      <Button
        type='submit'
        size='lg'
        className='w-full gap-2'
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className='h-4 w-4 animate-spin' />
            Mengirim...
          </>
        ) : (
          <>
            <Send className='h-4 w-4' />
            Kirim Pesan
          </>
        )}
      </Button>
    </form>
  );
}
