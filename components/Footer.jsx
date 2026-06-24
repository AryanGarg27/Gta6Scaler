import Link from 'next/link';

const PS5_AFF  = 'https://www.amazon.in/s?k=PS5+console&tag=YOUR_TAG';
const XBOX_AFF = 'https://www.amazon.in/s?k=Xbox+Series+X&tag=YOUR_TAG';

export default function Footer() {
  return (
    <footer className="border-t border-gta-border bg-gta-surface mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-gta-pink rounded flex items-center justify-center">
                <span className="font-russo text-white text-xs">6</span>
              </div>
              <span className="font-russo text-gta-text">
                GTA<span className="text-gta-pink">6</span>SCALER
              </span>
            </div>
            <p className="text-gta-muted text-sm leading-relaxed mb-4">
              Independent GTA 6 coverage. News, guides, and everything Leonida.
              Not affiliated with Rockstar Games.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/gta6scaler" target="_blank" rel="noopener noreferrer"
                className="text-gta-muted hover:text-gta-pink text-sm transition-colors">X / Twitter</a>
              <a href="https://instagram.com/gta6scaler" target="_blank" rel="noopener noreferrer"
                className="text-gta-muted hover:text-gta-pink text-sm transition-colors">Instagram</a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-russo text-gta-text text-xs tracking-widest mb-4 uppercase">Content</h4>
            <div className="flex flex-col gap-2.5">
              {[
                ['Latest News',    '/blog'],
                ['Pre-Order Guide','/blog/gta6-pre-order-guide-2026'],
                ['Leonida Map',    '/map'],
                ['All Guides',     '/blog?cat=guides'],
              ].map(([label, href]) => (
                <Link key={href} href={href}
                  className="text-gta-muted hover:text-gta-text text-sm transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Pre-order CTA */}
          <div className="bg-gta-card border border-gta-border rounded-lg p-5">
            <p className="text-gta-pink text-xs font-medium uppercase tracking-widest mb-1">Pre-orders open June 25</p>
            <p className="font-russo text-gta-text text-sm mb-1">GTA 6 launches Nov 19</p>
            <p className="text-gta-muted text-xs mb-4">Get your console ready before stock runs out</p>
            <a href={PS5_AFF} target="_blank" rel="noopener noreferrer"
              className="block text-center bg-gta-pink text-white text-xs font-medium px-4 py-2.5 rounded-lg hover:bg-pink-600 transition-colors mb-2">
              Buy PS5 on Amazon India →
            </a>
            <a href={XBOX_AFF} target="_blank" rel="noopener noreferrer"
              className="block text-center border border-gta-border text-gta-text text-xs font-medium px-4 py-2.5 rounded-lg hover:border-gta-pink transition-colors">
              Buy Xbox Series X →
            </a>
          </div>

        </div>

        <div className="border-t border-gta-border pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-gta-muted">
          <p>© 2026 GTA6Scaler. Fan site — not affiliated with Rockstar Games or Take-Two Interactive.</p>
          <p>This site contains affiliate links. We earn a commission on qualifying purchases at no extra cost to you.</p>
        </div>
      </div>
    </footer>
  );
}
