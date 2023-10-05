/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: {
    serverActions: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["media.graphassets.com"],
  },
};

module.exports = nextConfig;
