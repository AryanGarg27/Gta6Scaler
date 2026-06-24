import Link from 'next/link';
import PostCard, { FeaturedCard } from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';

const PS5_AFF = 'https://amzn.to/4w8nupb';
const XBOX_AFF = 'https://amzn.to/4fZgUwt';

const STATS = [
  { label: 'Release date', value: 'Nov 19, 2026' },
  { label: 'Pre-orders open', value: 'June 25, 2026' },
  { label: 'Platforms', value: 'PS5 + Xbox Series X/S' },
  { label: 'Expected price', value: '~$79.99' },
];

export default function HomePage() {
  const allPosts = getAllPosts();
  const featured = allPosts[0];
  const grid = allPosts.slice(1, 7);

  return (
    <div className="max-w-6xl mx-auto px-4">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-gta-border">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-6 bg-gta-pink rounded-full" />
            <span className="text-gta-pink text-xs font-medium tracking-widest uppercase">
              Leonida Coverage
            </span>
          </div>

          <h1 className="font-russo text-4xl md:text-5xl xl:text-6xl text-gta-text leading-tight mb-5">
            The #1 Source for<br />
            <span className="text-gta-pink" style={{ textShadow: '0 0 30px rgba(255,46,95,.4)' }}>
              GTA 6
            </span>{' '}News
          </h1>

          <p className="text-gta-muted text-lg leading-relaxed mb-8">
            Pre-order guides, Leonida maps, character breakdowns, and every
            Rockstar update — before anyone else.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog/gta6-pre-order-guide-2026"
              className="px-5 py-2.5 bg-gta-pink text-white text-sm font-medium rounded-lg hover:bg-pink-600 transition-colors"
            >
              Pre-Order Guide →
            </Link>
            <Link
              href="/blog"
              className="px-5 py-2.5 bg-gta-card border border-gta-border text-gta-text text-sm font-medium rounded-lg hover:border-gta-pink transition-colors"
            >
              All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────── */}
      <section className="py-6 border-b border-gta-border">
        <div className="flex flex-wrap gap-x-10 gap-y-3">
          {STATS.map(s => (
            <div key={s.label}>
              <p className="text-[11px] text-gta-muted uppercase tracking-widest mb-0.5">{s.label}</p>
              <p className="font-russo text-gta-text text-sm">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured post ─────────────────────────────────────── */}
      {featured && (
        <section className="py-10">
          <SectionLabel color="gta-pink" text="Latest" />
          <FeaturedCard post={featured} />
        </section>
      )}

      {/* ── Post grid ─────────────────────────────────────────── */}
      {grid.length > 0 && (
        <section className="pb-16">
          <SectionLabel color="gta-cyan" text="More Articles" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grid.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          {allPosts.length > 7 && (
            <div className="mt-8 text-center">
              <Link href="/blog"
                className="inline-block px-6 py-2.5 border border-gta-border text-gta-muted text-sm rounded-lg hover:border-gta-pink hover:text-gta-text transition-colors">
                View all articles →
              </Link>
            </div>
          )}
        </section>
      )}

      {/* ── Affiliate CTA ─────────────────────────────────────── */}
      <section className="mb-16 bg-gta-card border border-gta-border rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-gta-pink text-xs font-medium uppercase tracking-widest mb-1">Pre-orders open June 25</p>
          <p className="font-russo text-gta-text text-xl mb-1">Get your console ready</p>
          <p className="text-gta-muted text-sm">GTA 6 launches November 19 — don't get caught without a PS5.</p>
        </div>
        <div className="flex gap-3 shrink-0 flex-wrap">
          <a href={PS5_AFF} target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gta-pink text-white text-sm font-medium rounded-lg hover:bg-pink-600 transition-colors">
            Buy PS5 on Amazon →
          </a>
          <a href={XBOX_AFF} target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 border border-gta-border text-gta-text text-sm font-medium rounded-lg hover:border-gta-pink transition-colors">
            Buy Xbox →
          </a>
        </div>
      </section>

    </div>
  );
}

function SectionLabel({ color, text }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <div className={`w-1 h-4 bg-${color} rounded-full`} />
      <span className="text-gta-muted text-xs uppercase tracking-widest">{text}</span>
    </div>
  );
}
