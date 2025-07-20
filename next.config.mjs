/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rikii.ir',
            },
        ]
    }
};

export default nextConfig;
