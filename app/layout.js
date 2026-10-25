import './globals.css';

const siteUrl = 'https://syam-prakash-portfolio-live.onrender.com/';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Syam Prakash Vemula | Software Developer — Python, AI/ML & Backend',
  description: 'Portfolio of Syam Prakash Vemula, a software developer building practical products with Python, AI/ML, backend engineering, cloud and data systems.',
  keywords: ['Syam Prakash Vemula','Software Developer','Python Developer','AI/ML','Backend Developer','FastAPI','AWS','GenAI'],
  authors: [{ name: 'Syam Prakash Vemula' }],
  creator: 'Syam Prakash Vemula',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Syam Prakash Vemula | Software Developer',
    description: 'Practical software across Python, AI/ML, backend engineering, cloud and data.',
    url: siteUrl,
    siteName: 'Syam Prakash Vemula',
    type: 'website',
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syam Prakash Vemula | Software Developer',
    description: 'Python, AI/ML, backend engineering, cloud and data projects.'
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } }
};

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#0b0d10', colorScheme: 'dark' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Syam Prakash Vemula',
  jobTitle: 'Software Developer',
  url: siteUrl,
  sameAs: ['https://github.com/shyamprakash534', 'https://www.linkedin.com/in/shyam-prakash-vemula-721029263'],
  knowsAbout: ['Python','Artificial Intelligence','Machine Learning','Backend Development','Cloud Computing','Data Engineering']
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>;
}
