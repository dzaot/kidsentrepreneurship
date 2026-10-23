import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Product files are capped at 4 MB; Vercel functions accept request bodies up to 4.5 MB.
    serverActions: { bodySizeLimit: "4.5mb" },
  },
};

export default nextConfig;
