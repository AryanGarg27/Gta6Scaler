# GTA6Scaler — Next.js Blog

GTA 6 news, guides, and Leonida coverage. Built with Next.js 14 App Router + Tailwind CSS + file-based markdown blog.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel (free)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Next.js — just click Deploy
4. Your site is live at `your-project.vercel.app`

To use a custom domain (e.g. gta6scaler.com):
- Buy domain at Namecheap / GoDaddy / Cloudflare
- In Vercel: Settings → Domains → Add your domain
- Update nameservers as Vercel instructs

---

## Adding Blog Posts

Create a new `.md` file in the `/posts` folder:

```
posts/
  gta6-pre-order-guide-2026.md   ← existing
  your-new-post.md               ← add here
```

Every post needs this frontmatter at the top:

```yaml
---
title: "Your Post Title Here"
meta_description: "150-character SEO description for Google."
date: "2026-06-25"
category: "News"       # News | Guides | Tips | Pre-Order
tags: ["GTA 6", "tag2"]
read_time: "5 min read"
---

Your markdown content starts here...
```

The filename becomes the URL slug:
- `gta6-vice-city-map.md` → `gta6scaler.com/blog/gta6-vice-city-map`

---

## Affiliate Links

Replace `YOUR_TAG` with your actual Amazon Associates tag in these files:

| File | Line to update |
|---|---|
| `components/Navbar.jsx` | `PS5_AFFILIATE` constant |
| `components/Footer.jsx` | `PS5_AFF` and `XBOX_AFF` constants |
| `app/page.js` | `PS5_AFF` and `XBOX_AFF` constants |
| `app/blog/[slug]/page.js` | `PS5_AFF` and `XBOX_AFF` constants |

---

## Adding Google AdSense

Once your AdSense account is approved:

1. Get your ad unit code from Google AdSense
2. Open `app/blog/[slug]/page.js`
3. Find the comment `{/* AdSense slot */}` in the sidebar
4. Replace the placeholder `<div>` with your AdSense `<ins>` tag

---

## Project Structure

```
gta6scaler/
├── app/
│   ├── layout.js          Root layout: fonts, Navbar, Footer, NewsTicker
│   ├── page.js            Homepage: hero, stats, featured post, grid
│   ├── blog/
│   │   ├── page.js        All posts listing
│   │   └── [slug]/
│   │       └── page.js    Individual post with sidebar
│   ├── sitemap.js         Auto-generated sitemap for SEO
│   ├── robots.js          robots.txt for search crawlers
│   └── globals.css        Global styles + article content styles
├── components/
│   ├── Navbar.jsx         Sticky nav with mobile menu
│   ├── NewsTicker.jsx     Scrolling GTA-style breaking news bar
│   ├── PostCard.jsx       Blog card (standard + featured variants)
│   └── Footer.jsx         Links, social, affiliate CTA
├── lib/
│   └── posts.js           Reads .md files, parses frontmatter, renders HTML
├── posts/                 ← Add your .md blog posts here
│   └── gta6-pre-order-guide-2026.md
├── public/                Static assets (images, favicon)
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── postcss.config.js
```

---

## Updating the News Ticker

Open `components/NewsTicker.jsx` and update the `HEADLINES` array with your latest news items.

---

## Tech Stack

- [Next.js 14](https://nextjs.org) — App Router, SSG, file-system routing
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [gray-matter](https://github.com/jonschlinkert/gray-matter) — markdown frontmatter parsing
- [remark](https://github.com/remarkjs/remark) + [remark-html](https://github.com/remarkjs/remark-html) — markdown to HTML
- [Google Fonts](https://fonts.google.com) — Russo One (headings) + Inter (body)
- [Vercel](https://vercel.com) — deployment (free tier)
