import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const PS5_AFF  = 'https://www.amazon.in/s?k=PS5+console&tag=YOUR_TAG';
const XBOX_AFF = 'https://www.amazon.in/s?k=Xbox+Series+X&tag=YOUR_TAG';
const BASE_URL = 'https://gta6scaler.com';

const CATEGORY_STYLE = {
  guides:      'bg-pink-900/40 text-pink-300 border-pink-800',
  news:        'bg-blue-900/40 text-blue-300 border-blue-800',
  tips:        'bg-purple-900/40 text-purple-300 border-purple-800',
  'pre-order': 'bg-yellow-900/40 text-yellow-300 border-yellow-800',
  default:     'bg-gta-card text-gta-muted border-gta-border',
};

/* ── Static paths ──────────────────────────────────────────────── */
export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

/* ── Per-page metadata ─────────────────────────────────────────── */
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title:       post.title,
    description: post.description,
    openGraph: {
      title:         post.title,
      description:   post.description,
      type:          'article',
      publishedTime: post.date,
      url:           `${BASE_URL}/blog/${post.slug}`,
    },
    twitter: {
      card:        'summary_large_image',
      title:       post.title,
      description: post.description,
    },
  };
}

/* ── Page component ────────────────────────────────────────────── */
export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const catKey   = post.category?.toLowerCase();
  const catStyle = CATEGORY_STYLE[catKey] ?? CATEGORY_STYLE.default;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${BASE_URL}/blog/${post.slug}`)}&via=gta6scaler`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">

        {/* ── Article ─────────────────────────────────────────── */}
        <article className="flex-1 min-w-0">

          {/* Back */}
          <Link href="/blog"
            className="inline-flex items-center gap-1.5 text-gta-muted hover:text-gta-text text-sm mb-8 transition-colors">
            ← All articles
          </Link>

          {/* Header */}
          <header className="mb-8 pb-8 border-b border-gta-border">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className={`text-[11px] px-2 py-0.5 rounded border font-medium uppercase tracking-wider ${catStyle}`}>
                {post.category}
              </span>
              <span className="text-xs text-gta-muted">{post.date}</span>
              <span className="text-xs text-gta-muted">{post.readTime}</span>
            </div>

            <h1 className="font-russo text-3xl md:text-4xl text-gta-text leading-tight mb-4">
              {post.title}
            </h1>

            {post.description && (
              <p className="text-gta-muted text-lg leading-relaxed">{post.description}</p>
            )}
          </header>

          {/* Body */}
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-gta-border flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag}
                  className="text-xs px-2.5 py-1 bg-gta-card border border-gta-border rounded text-gta-muted">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Share */}
          <div className="mt-8 p-5 bg-gta-card border border-gta-border rounded-xl">
            <p className="text-sm text-gta-muted mb-3 font-medium">Share this article</p>
            <div className="flex gap-3 flex-wrap">
              <a href={tweetUrl} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-gta-surface border border-gta-border text-gta-text text-xs rounded-lg hover:border-gta-pink transition-colors">
                Share on X / Twitter
              </a>
              <a href="https://instagram.com/gta6scaler" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-gta-surface border border-gta-border text-gta-text text-xs rounded-lg hover:border-gta-pink transition-colors">
                Follow on Instagram
              </a>
            </div>
          </div>
        </article>

        {/* ── Sidebar ─────────────────────────────────────────── */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="sticky top-20 flex flex-col gap-4">

            {/* Pre-order CTA */}
            <div className="bg-gta-card border border-gta-pink/30 rounded-xl p-5">
              <p className="text-gta-pink text-[11px] font-medium uppercase tracking-widest mb-1">
                Pre-orders open June 25
              </p>
              <p className="font-russo text-gta-text text-sm mb-1">GTA 6 — Nov 19, 2026</p>
              <p className="text-gta-muted text-xs mb-4 leading-relaxed">
                Make sure your console is ready before stock runs out.
              </p>
              <a href={PS5_AFF} target="_blank" rel="noopener noreferrer"
                className="block text-center bg-gta-pink text-white text-xs font-medium px-4 py-2.5 rounded-lg hover:bg-pink-600 transition-colors mb-2">
                Buy PS5 on Amazon India →
              </a>
              <a href={XBOX_AFF} target="_blank" rel="noopener noreferrer"
                className="block text-center border border-gta-border text-gta-text text-xs font-medium px-4 py-2.5 rounded-lg hover:border-gta-pink transition-colors">
                Buy Xbox Series X →
              </a>
              <p className="text-gta-muted text-[10px] mt-3 text-center leading-tight">
                Affiliate links — we earn a small commission at no extra cost to you
              </p>
            </div>

            {/* Quick facts */}
            <div className="bg-gta-card border border-gta-border rounded-xl p-5">
              <p className="font-russo text-gta-text text-[11px] tracking-widest mb-4 uppercase">
                Quick Facts
              </p>
              {[
                ['Release',   'Nov 19, 2026'],
                ['Platforms', 'PS5 / Xbox Series X/S'],
                ['Price',     '~$79.99 standard'],
                ['PC',        'Not at launch'],
                ['Setting',   'Leonida / Vice City'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-start gap-2 text-xs py-2 border-b border-gta-border last:border-0">
                  <span className="text-gta-muted shrink-0">{k}</span>
                  <span className="text-gta-text font-medium text-right">{v}</span>
                </div>
              ))}
            </div>

            {/* AdSense slot — replace with your code once approved */}
            <div className="bg-gta-card border border-dashed border-gta-border rounded-xl p-4 text-center min-h-[120px] flex items-center justify-center">
              <p className="text-gta-muted text-xs">Advertisement</p>
              {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
            </div>

          </div>
        </aside>

      </div>
    </div>
  );
}
