/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/zeur',
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
