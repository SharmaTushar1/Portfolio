/** @type {import('next').NextConfig} */

// ? https://nextjs.org/docs/messages/next-image-unconfigured-host

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

module.exports = nextConfig;
