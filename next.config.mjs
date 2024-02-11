/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  reactStrictMode: true,
};

import withVideos from 'next-videos';

export default withVideos(nextConfig);
