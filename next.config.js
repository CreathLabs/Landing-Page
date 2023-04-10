/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "res.cloudinary.com"],
  },
  env: {
    TOKEN: "2464900e3b939c8cf7efe7e9a447a2eae1bf3baa078a1bf9a2e85a1ac13fb221c",
  },
};

module.exports = nextConfig;
