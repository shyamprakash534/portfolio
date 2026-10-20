import './globals.css';

export const metadata = {
  metadataBase: new URL('https://syam-prakash-portfolio-live.vercel.app/'),
  title: 'Vemula Syam Prakash — Software Developer | Python · AI/ML · Cloud',
  description: 'Portfolio of Vemula Syam Prakash — Software Developer building practical products across Python, AI/ML, backend engineering, cloud and data.',
  keywords: ['Vemula Syam Prakash','Software Developer','Python Developer','AI/ML','GenAI','Backend Developer','AWS','Data'],
  authors: [{ name: 'Vemula Syam Prakash' }],
  creator: 'Vemula Syam Prakash',
  alternates: { canonical: 'https://syam-prakash-portfolio-live.vercel.app/' },
  openGraph: {
    title: 'Vemula Syam Prakash — Software Developer',
    description: 'Practical software across Python, AI/ML, backend, cloud and data.',
    url: 'https://syam-prakash-portfolio-live.vercel.app/',
    siteName: 'Vemula Syam Prakash',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: 'Vemula Syam Prakash — Software Developer',
    description: 'Python, AI/ML, backend, cloud and data projects.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
};

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#f4243e', colorScheme: 'dark' };

const jsonLd = { '@context': 'https://schema.org', '@type': 'Person', name: 'Vemula Syam Prakash', jobTitle: 'Software Developer', url: 'https://syam-prakash-portfolio-live.vercel.app/', sameAs: ['https://github.com/shyamprakash534', 'https://www.linkedin.com/in/shyam-prakash-vemula-721029263'] };

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}<script dangerouslySetInnerHTML={{ __html: `(() => { const start = () => { const video = document.querySelector('.hero-video'); if (!video) return; video.muted = true; video.defaultMuted = true; const play = () => { if (video.paused) video.play().catch(() => {}); }; play(); video.addEventListener('loadedmetadata', play, { once: true }); video.addEventListener('canplay', play, { once: true }); }; if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true }); else start(); })();` }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>;
}
