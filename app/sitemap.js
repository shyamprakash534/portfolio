const baseUrl = 'https://syam-prakash-portfolio-live.vercel.app';

export default function sitemap() {
  return [{
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }];
}
