/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes
  // If you need static export for other pages, consider using 
  // a hybrid approach with selective static generation
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
