/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH || '',
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
