/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR', 'en', 'es'],
    defaultLocale: 'pt-BR',
    localeDetection: true, 
  },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
}

export default nextConfig;
