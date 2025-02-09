import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "www.prisma.io",
      },
      {
        hostname: "assets.vercel.com",
      },
      {
        hostname: "ucarecdn.com",
      },
      {
        hostname: "aceternity.com",
      },
    ],
  },
};

export default nextConfig;
