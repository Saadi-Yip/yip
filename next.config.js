/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "next.thepic.store",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "yip-storage.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "www.yourinternetprovider.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/revalidate",
        destination: "http://localhost:3000/api/revalidate",
      },
      {
        source: "/state/:name*",
        destination: "/",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/state/:name*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
