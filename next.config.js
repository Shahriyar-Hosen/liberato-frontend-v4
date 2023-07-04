// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');
/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n,
  images: {
    domains: [
      'images.unsplash.com',
      'wp.udruga-liberato.hr',
      'tailwindui.com',
      'dev.udruga-liberato.hr',
      'i.ibb.co',
      'api.udruga-liberato.hr',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
