import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Allow local network origins used during development (prevents future Next.js warnings)
  // Add any other dev origins you use (include protocol and port)
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.100.67:3000',
  ],
};

export default nextConfig;
