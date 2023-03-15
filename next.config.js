/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bordeaux',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
