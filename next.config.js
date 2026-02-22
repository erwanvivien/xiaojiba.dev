/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/CV",
        destination: "/CV.pdf",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
