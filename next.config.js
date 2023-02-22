/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  env: {
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
  },
  exportPathMap: function () {
    return {
      '/': { page: `/` },
      '/works': { page: `/works` },
      '/contact': { page: `/contact` },
      '/about': { page: `/about` },
      '/thank-you': { page: `/thank-you` },
    }
  },
  images: {
    loader: 'default',
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}
