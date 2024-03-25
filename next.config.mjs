/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'www.nmims.edu', 'res.cloudinary.com', 'www.canva.com'],
    },
    env: {
        API_BASE_URL_DEV: 'http://127.0.0.1:1337/api',
        API_BASE_URL_PROD: 'https://hq-api.onrender.com/api',
        APP_ENV: 'development',
        STRAPI_USERNAME_DEV: '',
        STRAPI_EMAIL_DEV: '',
        STRAPI_PASSWORD_DEV: '',
    },
    reactStrictMode: false,
};

export default nextConfig;
