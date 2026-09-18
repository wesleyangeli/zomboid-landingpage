import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/zomboid-landingpage",
  assetPrefix: "/zomboid-landingpage/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
