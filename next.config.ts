import path from 'path'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    // Use remotePatterns instead of the deprecated `domains` option
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  // Set turbopack.root dynamically to the project directory to avoid
  // pointing to an incorrect absolute path that can make Turbopack panic.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
