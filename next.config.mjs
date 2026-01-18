/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // ✅ REQUIRED for static hosting
  reactCompiler: true,

  images: {
    unoptimized: true,       // ✅ REQUIRED for static hosting
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/siddharth637/**",
      },
    ],
  },
};

export default nextConfig;
