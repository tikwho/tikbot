/** @type {import('next').NextConfig} */
const nextConfig = {
  appDir: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1',
    NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3001/ws',
  },
}

module.exports = nextConfig