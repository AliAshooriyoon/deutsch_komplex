import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'deutsch-komplex.com',
          },
        ],
        destination: 'https://www.deutsch-komplex.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
