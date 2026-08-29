import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

/**
 * API Route: /api/contact
 * Menerima data form kontak, validasi server-side, lalu kirim email via Resend.
 *
 * Alasan memilih Resend:
 * - Setup sangat sederhana (hanya API key)
 * - Free tier cukup untuk template/landing page (100 email/hari)
 * - Native support untuk Vercel & serverless
 * - Tidak perlu database/server terpisah
 * - Email delivery rate tinggi
 *
 * Opsional: bisa ditambahkan Prisma + SQLite untuk menyimpan leads,
 * tapi SQLite tidak persisten di Vercel serverless. Untuk production
 * gunakan Postgres (Vercel Postgres / Neon / Supabase) jika butuh history.
 */

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  message: z.string().min(10).max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Data tidak valid', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = parsed.data;

    // Pastikan RESEND_API_KEY sudah di-set di environment
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY tidak ditemukan');
      // Di development, tetap return success agar UI bisa diuji
      if (process.env.NODE_ENV === 'development') {
        console.log('[DEV] Contact form submitted:', {
          name,
          email,
          phone,
          message,
        });
        return NextResponse.json({
          success: true,
          message: 'Pesan diterima (mode development — email tidak dikirim)',
        });
      }
      return NextResponse.json(
        { error: 'Konfigurasi server belum lengkap' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Email tujuan pemilik jasa (ubah di .env)
    const toEmail = process.env.CONTACT_EMAIL || 'hello@konsultanpro.id';
    const fromEmail =
      process.env.FROM_EMAIL || 'KonsultanPro <onboarding@resend.dev>';

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[Lead Baru] ${name} — Konsultasi dari Website`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f766e;">Lead Baru dari Website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Nama</td>
              <td style="padding: 8px 0;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Telepon</td>
              <td style="padding: 8px 0;">${escapeHtml(phone)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Pesan</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e2e8f0;" />
          <p style="color: #64748b; font-size: 13px;">
            Email ini dikirim otomatis dari form kontak website KonsultanPro.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Gagal mengirim email. Silakan coba lagi.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Pesan berhasil dikirim',
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}

/** Escape HTML sederhana untuk mencegah XSS di email */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
