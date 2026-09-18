import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [new URL("https://images.unsplash.com/**")],
    unoptimized: true,
  },
};

export default nextConfig;
