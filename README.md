# DermNexus — Web

Kozmetik kimyasında yapay zekâ: ürünler arası kimyasal çakışmaları ve cilt uyumunu RAG mimarisiyle denetleyen landing page.

**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion · Supabase

## Kurulum

```bash
npm install
```

`.env.example` dosyasını kopyalayın ve Supabase bilgilerinizi girin:

```bash
cp .env.example .env.local
```

## Geliştirme

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresinde açılır.

## Supabase

`waitlist` tablosu gerekli. Supabase dashboard'dan SQL editöründe çalıştırın:

```sql
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz default now()
);
```

## Komutlar

| Komut | Açıklama |
|---|---|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
