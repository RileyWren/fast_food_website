// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.theatomicburger.com',
      'www.burgerandsauce.com',
      'cdn.prod.website-files.com',
      'cdn-icons-png.flaticon.com',
    ],
    // Alternatively, you can use remotePatterns (newer approach)
    /*
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.theatomicburger.com',
      },
      {
        protocol: 'https',
        hostname: '**.burgerandsauce.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
    ],
    */
  },
};

export default nextConfig;