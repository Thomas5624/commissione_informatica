import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ nuovo modo per generare HTML statico
  images: {
    domains: ["via.placeholder.com"],
    unoptimized: true, // necessario per export statico
  },
};

export default nextConfig;
