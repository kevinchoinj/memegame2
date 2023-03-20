console.log('Loading Next.js config...');
module.exports = {
  async rewrites() {
    console.log('Loading rewrite rules...');
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
};