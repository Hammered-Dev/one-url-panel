import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverRuntimeConfig: {
    api_url: process.env.API_URL,
  },
};

export default nextConfig;
