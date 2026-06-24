import { getAllPosts } from '@/lib/posts';

const BASE = 'https://gta6scaler.com';

export default function sitemap() {
  const posts = getAllPosts();

  const postEntries = posts.map(post => ({
    url:             `${BASE}/blog/${post.slug}`,
    lastModified:    new Date(),
    changeFrequency: 'weekly',
    priority:        0.8,
  }));

  return [
    { url: BASE,         lastModified: new Date(), changeFrequency: 'daily',  priority: 1   },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'daily',  priority: 0.9 },
    ...postEntries,
  ];
}
