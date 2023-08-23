/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'call-a-doctor-api.herokuapp.com', 'api.calladoc247.net'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
