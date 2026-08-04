/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Temporary: send every page back to the Coming Soon landing (/) while
    // the full site isn't ready to show yet. Remove this block to go live.
    return [
      { source: '/home', destination: '/', permanent: false },
      { source: '/partners', destination: '/', permanent: false },
      { source: '/events', destination: '/', permanent: false },
      { source: '/subprojects', destination: '/', permanent: false },
      { source: '/media', destination: '/', permanent: false },
    ];
  },
};

module.exports = nextConfig;
