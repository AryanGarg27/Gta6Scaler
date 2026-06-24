import PostCard, { FeaturedCard } from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'GTA 6 News & Guides',
  description:
    'All GTA 6 articles — pre-order guides, Leonida news, character breakdowns, and Vice City coverage.',
};

export default function BlogPage() {
  const posts    = getAllPosts();
  const featured = posts[0];
  const rest     = posts.slice(1);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Header */}
      <div className="mb-10 pb-6 border-b border-gta-border">
        <h1 className="font-russo text-3xl text-gta-text mb-2">All Articles</h1>
        <p className="text-gta-muted text-sm">
          {posts.length} article{posts.length !== 1 ? 's' : ''} — GTA 6 news, guides, and Leonida coverage
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-russo text-gta-text text-xl mb-2">No articles yet</p>
          <p className="text-gta-muted text-sm">Drop a .md file in the /posts folder to publish.</p>
        </div>
      ) : (
        <>
          {/* Featured */}
          {featured && (
            <div className="mb-10">
              <FeaturedCard post={featured} />
            </div>
          )}

          {/* Grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map(post => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
