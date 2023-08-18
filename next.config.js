/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'call-a-doctor-api.herokuapp.com'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
