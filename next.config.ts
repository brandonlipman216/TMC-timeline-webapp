import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['ml.globenewswire.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ml.globenewswire.com',
        pathname: '/Resource/Download/**'
      }
    ],
  },
};

export default nextConfig;
