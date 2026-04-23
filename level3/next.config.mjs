/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["asset.autocarindia.com"],
//   },
// };
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asset.autocarindia.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.hindustantimes.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
