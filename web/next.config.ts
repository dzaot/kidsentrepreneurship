import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Product files are capped at 4 MB; this leaves room under common serverless body limits.
    serverActions: { bodySizeLimit: "4.5mb" },
  },
};

export default nextConfig;
