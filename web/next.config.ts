import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Product files are capped at 4 MB; Netlify functions accept up to 6 MB.
    serverActions: { bodySizeLimit: "5mb" },
  },
};

export default nextConfig;
