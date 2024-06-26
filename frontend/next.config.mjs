/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          { hostname: "localhost" },
          { hostname: "api.microlink.io" },
        ],
      },
};

export default nextConfig;
