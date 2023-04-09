/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "res.cloudinary.com"],
  },
  env: {
    TOKEN: "23898fdebdd4702b2931e4ac067868371a2e2f93ef7b500fc59c4fe706c11642b",
  },
};

module.exports = nextConfig;
