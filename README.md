## 🚀KonsultanPro — Professional Services Landing Page Template

Template landing page modern untuk jasa profesional (konsultan bisnis, hukum, desain, dll) dibangun dengan Next.js 15 (App Router) + TypeScript + Tailwind CSS v4.

A modern landing page template for professional services (business consulting, legal, design, etc.), built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## 1. Key Features

• Hero, Services, About, Testimonials, Contact — all on a single page
• Dark/Light mode (next-themes, persisted in localStorage, system default)
• Lightweight on-scroll animations using Framer Motion
• Contact form with validation (react-hook-form + zod) + API Route + email via Resend
• SEO-ready — metadata, Open Graph, Twitter Card, sitemap.xml, robots.txt
• Fully responsive (mobile-first)
• Basic accessibility (ARIA labels, semantic HTML, focus visible)
• Easy to re-skin — colors & branding via CSS variables in globals.css
• Modular components — ready for reuse in other projects

## 2. Tech Stack

| Technology                   | Tools                        |
| ---------------------------- | ---------------------------- |
| Framework                    | Next.js (App Router)         |
| Languange                    | TypeScript (strict)          |
| Server state / data fetching | TanStack Query (React Query) |
| HTTP client                  | Axios                        |
| Client / UI state            | Zustand                      |
| Form                         | React Hook Form              |
| Validasi schema              | Zod                          |
| Komponen UI                  | shadcn/ui                    |
| Styling                      | Tailwind CSS                 |

## 3. Structure

```

├── app/
│ ├── api/contact/route.ts # Backend form kontak
│ ├── globals.css # Theme variables (reskin di sini)
│ ├── layout.tsx # Root layout + SEO metadata
│ ├── page.tsx # Single-page landing
│ ├── robots.ts
│ └── sitemap.ts
├── components/
│ ├── ui/ # Button, Card, Input, Label, Textarea, Avatar
│ ├── Navbar.tsx
│ ├── Hero.tsx
│ ├── Services.tsx
│ ├── About.tsx
│ ├── Testimonials.tsx
│ ├── Contact.tsx
│ ├── ContactForm.tsx
│ ├── Footer.tsx
│ ├── SectionWrapper.tsx # Animasi scroll
│ ├── ThemeProvider.tsx
│ └── ThemeToggle.tsx
├── lib/utils.ts # cn() helper
├── .env.example
└── README.md

```

How to Install and Run

1. Install dependencies :
   npm install

2. Setup environment variables :
   cp .env.example .env.local

3. Run development server :
   npm run dev

Open http://localhost:3000.

4. Build production :
   npm run build
   npm start

## 4. Aksesibilitas & SEO Checklist

[x] Semantic HTML (header, main, section, footer, nav)
[x] Heading hierarchy (h1 → h2 → h3)
[x] ARIA labels pada form, tombol, slider
[x] Focus visible (keyboard navigation)
[x] Contrast warna (WCAG-friendly via theme)
[x] Metadata + Open Graph + Twitter Card
[x] sitemap.xml & robots.txt
[x] lang="id"

Created with ❤️ using Next.js + Tailwind CSS.
