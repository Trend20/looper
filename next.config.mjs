/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '.',
    webpack: (config) => {
        config.output.publicPath = `./_next/`;
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
            },
        ],
    },
};

export default nextConfig;
