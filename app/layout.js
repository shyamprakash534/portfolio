import './globals.css';

export const metadata = {
  metadataBase: new URL('https://syam-prakash-portfolio.onrender.com'),
  title: 'Vemula Syam Prakash — Python · AI/ML · GenAI · Backend',
  description: 'Vemula Syam Prakash builds practical AI products, backend systems and cloud/data workflows with Python, GenAI and modern engineering tools.',
  keywords: ['Vemula Syam Prakash','Python Developer','AI/ML Engineer','GenAI','Backend Developer','AWS','Data Engineering'],
  authors: [{ name: 'Vemula Syam Prakash' }],
  creator: 'Vemula Syam Prakash',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Vemula Syam Prakash — Software Engineer & AI Builder',
    description: 'Practical AI products, backend systems and cloud/data workflows.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Vemula Syam Prakash, AI/ML & Python Developer' }],
    url: 'https://syam-prakash-portfolio.onrender.com',
    siteName: 'Vemula Syam Prakash',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.jpg'],
    title: 'Vemula Syam Prakash — Software Engineer & AI Builder',
    description: 'Practical AI products, backend systems and cloud/data workflows.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#050505',
  colorScheme: 'dark',
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'Person', name: 'Vemula Syam Prakash', jobTitle: 'AI/ML & Python Developer', url: 'https://syam-prakash-portfolio.onrender.com', sameAs: ['https://github.com/shyamprakash534', 'https://www.linkedin.com/in/shyam-prakash-vemula-721029263'] };

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>;
}
