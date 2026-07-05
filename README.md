# Shree Ganesh Marble Arts — website

Next.js 16 site for a marble handicraft business: product catalog, WhatsApp
enquiries, export info, and a password-protected admin panel at `/admin` for
managing products and photos.

## Local development

```bash
npm install
cp .env.example .env.local   # then edit ADMIN_PASSWORD and SESSION_SECRET
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Admin panel is at
[http://localhost:3000/admin](http://localhost:3000/admin).

## Editing content

- **Business details** (phone, address, WhatsApp number, etc.): `lib/site.ts`
- **Product categories, names, descriptions**: use `/admin`, or edit
  `data/products.json` directly
- **Product photos**: upload via `/admin`, or drop files into
  `public/products/<category>/` — see `public/products/README.md`

## Deploying on a VPS (e.g. AWS Lightsail)

This app needs to run as a **persistent Node.js process**, not a static
export or serverless function — the admin panel writes product data to
`data/products.json` and photos to `public/products/`, both on local disk.

1. Clone the repo on the server and run `npm install && npm run build`.
2. Create a real `.env.local` (or set environment variables directly) with
   a strong `ADMIN_PASSWORD` and a random `SESSION_SECRET`
   (`openssl rand -hex 32`).
3. Run it with a process manager so it survives reboots/crashes, e.g.:
   ```bash
   npm install -g pm2
   pm2 start npm --name handicraft-site -- start
   pm2 save
   pm2 startup
   ```
4. Put Nginx (or similar) in front for TLS and to proxy port 80/443 to the
   Next.js server's port (default 3000).
5. Back up `data/products.json` and `public/products/` periodically — those
   two are the only things that change after deploy.

## Tech

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.
