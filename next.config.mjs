/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'www.nmims.edu', 'res.cloudinary.com'],
    },
    env: {
        API_BASE_URL_DEV: '',
        API_BASE_URL_PROD: '',
        APP_ENV: 'development',
        STRAPI_USERNAME_DEV: '',
        STRAPI_EMAIL_DEV: '',
        STRAPI_PASSWORD_DEV: '',
    },
    reactStrictMode: false,
};

export default nextConfig;
