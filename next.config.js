/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    // Specify remotePatterns as an object with domains or paths as keys
    domains: ["public/assets", "m.media-amazon.com"], // Replace with your actual domain/path
    formats: ["image/avif", "image/webp"], // Specify supported image formats for optimization
    // Allow SVG
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
