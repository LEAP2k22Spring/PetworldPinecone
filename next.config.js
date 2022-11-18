/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
