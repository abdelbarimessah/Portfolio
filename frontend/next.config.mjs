/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          { hostname: "localhost" },
          { hostname: "api.microlink.io" },
          { hostname: "images.unsplash.com" },

          
        ],
      },
};

export default nextConfig;
