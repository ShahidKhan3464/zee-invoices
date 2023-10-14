/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    removeConsole: true,
  },
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.resolve.modules.push(__dirname)
    return config;
  }
}

module.exports = nextConfig