/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
