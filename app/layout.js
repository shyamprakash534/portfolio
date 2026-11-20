import './globals.css';

const siteUrl = 'https://syam-prakash-portfolio-live.onrender.com/';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Syam Prakash Vemula | Software Developer — Python, AI/ML & Backend',
  description: 'Portfolio of Syam Prakash Vemula, a software developer with a master’s degree in Computer Applications (2026), building backend systems, source-grounded AI applications, cloud data pipelines and practical software projects.',
  keywords: ['Syam Prakash Vemula','Software Developer','Python Developer','AI/ML','Backend Developer','FastAPI','AWS','GenAI'],
  authors: [{ name: 'Syam Prakash Vemula' }],
  creator: 'Syam Prakash Vemula',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Syam Prakash Vemula | Software Developer',
    description: 'Software developer with a master’s degree in Computer Applications (2026), building Python backends, grounded AI applications, cloud and data projects.',
    url: siteUrl,
    siteName: 'Syam Prakash Vemula',
    type: 'website',
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syam Prakash Vemula | Software Developer',
    description: 'Python backend, AI/ML, cloud and data projects by Syam Prakash Vemula, who earned a master’s degree in Computer Applications in 2026.'
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
