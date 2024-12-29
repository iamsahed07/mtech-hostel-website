/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-backend.com', 'res.cloudinary.com'], // Add the hostname of your image source
  },
};

module.exports = nextConfig;
