import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    typedEnv: true,
    turbopackFileSystemCacheForDev: true,
    turbopackFileSystemCacheForBuild: true
  },
  reactStrictMode: true
};

export default withPayload(nextConfig, {devBundleServerPackages: false});
