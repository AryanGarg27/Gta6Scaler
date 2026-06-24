import Link from 'next/link';

const CATEGORY_STYLE = {
  guides:     'bg-pink-900/40 text-pink-300 border-pink-800',
  news:       'bg-blue-900/40 text-blue-300 border-blue-800',
  tips:       'bg-purple-900/40 text-purple-300 border-purple-800',
  'pre-order':'bg-yellow-900/40 text-yellow-300 border-yellow-800',
  default:    'bg-gta-card text-gta-muted border-gta-border',
};

function Badge({ category }) {
  const key = category?.toLowerCase();
  return (
    <span className={`text-[11px] px-2 py-0.5 rounded border font-medium uppercase tracking-wider ${CATEGORY_STYLE[key] ?? CATEGORY_STYLE.default}`}>
      {category ?? 'News'}
    </span>
  );
}

/* ── Featured card (large, full-width) ─────────────────────────── */
export function FeaturedCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-gta-card border border-gta-border rounded-xl overflow-hidden hover:border-gta-pink transition-colors duration-200">
        <div className="h-1 bg-gradient-to-r from-gta-pink to-gta-cyan" />
        <div className="p-7 md:p-9">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <Badge category={post.category} />
            <span className="text-xs text-gta-muted">{post.date}</span>
            {post.readTime && <span className="text-xs text-gta-muted">{post.readTime}</span>}
          </div>
          <h2 className="font-russo text-2xl md:text-3xl text-gta-text leading-tight mb-3 group-hover:text-gta-pink transition-colors">
            {post.title}
          </h2>
          <p className="text-gta-muted text-sm leading-relaxed line-clamp-3">
            {post.description}
          </p>
          <div className="mt-5 inline-flex items-center gap-1 text-gta-pink text-sm font-medium">
            Read article
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* ── Standard card (grid) ───────────────────────────────────────── */
export default function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="bg-gta-card border border-gta-border rounded-lg p-5 hover:border-gta-pink transition-colors duration-200 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <Badge category={post.category} />
          <span className="text-xs text-gta-muted">{post.date}</span>
        </div>
        <h3 className="font-russo text-base text-gta-text leading-snug mb-2 group-hover:text-gta-pink transition-colors flex-1">
          {post.title}
        </h3>
        <p className="text-gta-muted text-sm leading-relaxed line-clamp-2 mb-4">
          {post.description}
        </p>
        <div className="inline-flex items-center gap-1 text-gta-pink text-xs font-medium mt-auto">
          Read more
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </article>
    </Link>
  );
}
