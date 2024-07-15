/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/porfolio",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  // images: { unoptimized: true },
};

module.exports = nextConfig;
