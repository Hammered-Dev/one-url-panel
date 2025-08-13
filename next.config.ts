import type { NextConfig } from "next";
import { makeEnvPublic } from "next-runtime-env";

const nextConfig: NextConfig = {};

makeEnvPublic("API_URL");

export default nextConfig;
