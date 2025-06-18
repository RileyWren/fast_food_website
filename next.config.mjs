// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.theatomicburger.com',
      },
      {
        protocol: 'https',
        hostname: 'www.burgerandsauce.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
    ],
  },
};

export default nextConfig;