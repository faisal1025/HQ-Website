/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'www.nmims.edu', 'res.cloudinary.com', 'www.canva.com'],
    },
    env: {
        API_BASE_URL_DEV: 'http://127.0.0.1:1337/api',
        API_BASE_URL_PROD: 'https://hq-api.onrender.com/api',
        SOCKET_API_URL_DEV: 'http://127.0.0.1:1337/',
        SOCKET_API_URL_PROD: 'https://hq-api.onrender.com/',
        APP_ENV: 'development',
        NEXT_PUBLIC_GOOGLE_API_KEY: 'AIzaSyAmXiS-0NmNL6GjJ5IZ21BQ3VPeucTjFT4',
    },
    reactStrictMode: false,
};

export default nextConfig;
