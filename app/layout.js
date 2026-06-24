import './globals.css';
import Navbar     from '@/components/Navbar';
import Footer     from '@/components/Footer';
import NewsTicker from '@/components/NewsTicker';

export const metadata = {
  metadataBase: new URL('https://gta6scaler.com'),
  title: {
    default:  'GTA 6 Scaler — Leonida News, Guides & Pre-Order',
    template: '%s | GTA 6 Scaler',
  },
  description:
    'Your #1 source for GTA 6 news, pre-order guides, Vice City maps, and everything Leonida. Stay ahead with GTA6Scaler.',
  keywords: ['GTA 6', 'Grand Theft Auto 6', 'Leonida', 'Vice City', 'pre-order', 'Rockstar Games'],
  openGraph: {
    type:     'website',
    locale:   'en_US',
    url:      'https://gta6scaler.com',
    siteName: 'GTA 6 Scaler',
  },
  twitter: {
    card:    'summary_large_image',
    site:    '@gta6scaler',
    creator: '@gta6scaler',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Russo+One&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NewsTicker />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
