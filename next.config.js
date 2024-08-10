/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'call-a-doctor-api.herokuapp.com', 'api.calladoc247.net', 'api.calladoc247.com', 'api.calladoc247.comuploads'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
