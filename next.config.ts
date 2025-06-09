/** @type {import('next').NextConfig} */
const nextConfig = {
  // let builds succeed even if ESLint/type errors are present
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // same for TS errors: allow production builds to succeed
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
