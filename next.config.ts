/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-backend.com",
        pathname: "/**", // Match all paths from this hostname
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // Match all paths from this hostname
      },
    ],
  },
};

export default nextConfig;
