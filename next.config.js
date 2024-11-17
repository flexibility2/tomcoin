/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "etherscan.io",
      },
      {
        protocol: "https",
        hostname: "app.uniswap.org",
      },
    ],
  },
};

module.exports = nextConfig;
