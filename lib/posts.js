import fs   from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const POSTS_DIR = path.join(process.cwd(), 'posts');

/* ── Helpers ─────────────────────────────────────────────────── */

function formatDate(raw) {
  if (!raw) return '';
  return new Date(raw).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

function estimateReadTime(content) {
  const words = content.trim().split(/\s+/).length;
  const mins  = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

/* ── Public API ───────────────────────────────────────────────── */

/**
 * Returns all posts sorted newest-first.
 * Used in homepage and blog listing — does NOT parse full markdown.
 */
export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const slug     = filename.replace(/\.md$/, '');
      const raw      = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
      const { data, content } = matter(raw);

      return {
        slug,
        title:       data.title       || slug,
        description: data.meta_description || data.description || '',
        date:        formatDate(data.date),
        rawDate:     data.date ? new Date(data.date) : new Date(0),
        category:    data.category    || 'News',
        tags:        Array.isArray(data.tags) ? data.tags : [],
        readTime:    data.read_time   || estimateReadTime(content),
      };
    })
    .sort((a, b) => b.rawDate - a.rawDate);
}

/**
 * Returns a single post with full HTML content.
 * Used in the [slug] page.
 */
export async function getPostBySlug(slug) {
  const filepath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;

  const raw = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(raw);

  const processed   = await remark().use(html, { sanitize: false }).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title:       data.title       || slug,
    description: data.meta_description || data.description || '',
    date:        formatDate(data.date),
    category:    data.category    || 'News',
    tags:        Array.isArray(data.tags) ? data.tags.map(String) : [],
    readTime:    data.read_time   || estimateReadTime(content),
    contentHtml,
  };
}
