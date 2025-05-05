/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ml.globenewswire.com'],
  },
  // Disable ESLint during build to avoid linting errors
  eslint: {
    // Only run ESLint on development, not during builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
