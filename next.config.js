/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;

// https://via.placeholder.com/600/92c952
// https://m.media-amazon.com/images/M/MV5BOWE5NWZiZG…GRiZmFkXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_SX300.jpg