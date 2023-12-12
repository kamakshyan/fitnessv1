/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "img.clerk.com",
      "avatars.dicebear.com",
    ],
  },
}

module.exports = nextConfig
