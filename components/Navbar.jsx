'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV = [
  { label: 'News', href: '/blog' },
  { label: 'Guides', href: '/blog?cat=guides' },
  { label: 'Pre-Order', href: '/blog/gta6-pre-order-guide-2026' },
  { label: 'Map', href: '/map' },
];

// ── Replace with your actual Amazon affiliate tag ──────────────────────────
const PS5_AFFILIATE = 'https://amzn.to/4w8nupb';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-gta-surface/95 backdrop-blur border-b border-gta-border">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <div className="w-7 h-7 bg-gta-pink rounded flex items-center justify-center group-hover:bg-pink-500 transition-colors">
            <span className="font-russo text-white text-xs leading-none">6</span>
          </div>
          <span className="font-russo text-gta-text text-base tracking-wide">
            GTA<span className="text-gta-pink">6</span>SCALER
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {NAV.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-gta-muted hover:text-gta-text hover:bg-gta-card rounded-lg transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={PS5_AFFILIATE}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block shrink-0 px-4 py-1.5 bg-gta-pink text-white text-sm font-medium rounded-lg hover:bg-pink-600 transition-colors"
        >
          Buy PS5 →
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-gta-muted hover:text-gta-text"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-px bg-current transition-all ${open ? 'rotate-45 translate-y-1' : ''} mb-1.5`} />
          <div className={`w-5 h-px bg-current transition-all ${open ? 'opacity-0' : ''} mb-1.5`} />
          <div className={`w-5 h-px bg-current transition-all ${open ? '-rotate-45 -translate-y-1' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gta-border bg-gta-surface px-4 pb-4">
          {NAV.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-sm text-gta-muted hover:text-gta-text border-b border-gta-border last:border-0"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={PS5_AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center py-2 bg-gta-pink text-white text-sm font-medium rounded-lg"
          >
            Buy PS5 →
          </a>
        </div>
      )}
    </header>
  );
}
