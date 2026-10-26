const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization (required for static export)
  },
  assetPrefix: isProd ? "" : "",
  basePath: isProd ? "" : "",
  // Ensure trailing slash is disabled for consistency with static exports
  trailingSlash: false,
};

export default nextConfig;