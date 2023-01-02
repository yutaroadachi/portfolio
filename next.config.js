const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? require('@next/bundle-analyzer')({ enabled: true })
    : (config) => config

/** @type { import('next').NextConfig } */
const config = {
  eslint: {
    dirs: ['app', 'src'],
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
}

module.exports = withBundleAnalyzer(config)
