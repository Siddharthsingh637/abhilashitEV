import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // ✅ REQUIRED for static hosting
  reactCompiler: true,

  turbopack: {
    root: __dirname,
  },

  images: {
    unoptimized: true,       // ✅ REQUIRED for static hosting
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/siddharth637/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
