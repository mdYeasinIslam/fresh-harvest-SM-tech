import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            pathname: '/wikipedia/commons/8/8a/**',
          },
        ],
      },
};

export default nextConfig;
