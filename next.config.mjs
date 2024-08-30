/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/contact/hr',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
