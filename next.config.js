/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "cdn2.vectorstock.com",
      "cdn5.vectorstock.com",
      "as1.ftcdn.net",
    ],
  },
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
