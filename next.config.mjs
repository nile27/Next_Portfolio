/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["github.com"],
  },
};

export default nextConfig;
