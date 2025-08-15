import type { NextConfig } from "next";
import modules from "../../modules.json";

const nextConfig: NextConfig = {
  transpilePackages: modules
};

export default nextConfig;
