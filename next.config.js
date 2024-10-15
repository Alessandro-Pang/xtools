/*
 * @Author: zi.yang
 * @Date: 2024-10-15 11:40:36
 * @LastEditors: zi.yang
 * @LastEditTime: 2024-10-15 14:20:49
 * @Description: 
 * @FilePath: /xtools/next.config.js
 */
/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  'react-syntax-highlighter',
  'shrinkpng',
  'figlet',
]);

const nextConfig = withPlugins([withTM], {
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/',
  redirects: process.env.NODE_ENV === 'development' ? async () => {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  } : undefined,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.experiments = {
      asyncWebAssembly: true,
    };
    return config;
  },
});

module.exports = nextConfig;
