/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Next webpackconfig solve BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
  // future: {
  //   webpack5: true,
  // },
  webpack: (config) => {
    config.resolve.fallback = { util: false };

    return config;
  },
};

module.exports = nextConfig;
