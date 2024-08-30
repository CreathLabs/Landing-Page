/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "res.cloudinary.com", "miro.medium.com", "media.publit.io"],
  },
  env: {
    TOKEN: "53edd150d8msh964d70d183fb559p1834f2jsn652cdb8a050b",
  },
};

module.exports = nextConfig;
