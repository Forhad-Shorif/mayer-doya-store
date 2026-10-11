import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // অথবা নির্দিষ্ট কোনো ডোমেইন যেমন lh3.googleusercontent.com
      },
    ],
  },
};

export default nextConfig;
