import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: imageHosts,
    minimumCacheTTL: 60,
  },

  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/Kontakt',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/kontakt',
        destination: '/Kontakt',
      },
    ];
  },
};
export default nextConfig;