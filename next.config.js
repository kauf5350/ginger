/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Only use this if you want to ignore all ESLint errors during build
  },
}

module.exports = nextConfig 