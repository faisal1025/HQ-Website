/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'www.nmims.edu', 'res.cloudinary.com', 'www.canva.com'],
    },
    env: {
        API_BASE_URL_DEV: 'http://127.0.0.1:1337/api',
        API_BASE_URL_PROD: 'https://admin.hqrooms.in/api',
        APP_ENV: 'development',
        NEXT_PUBLIC_EMAILJS_SERVICE_ID: "service_l6w2t6h",
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: "template_p4bia58",
        NEXT_PUBLIC_EMAILJS_USER_ID: "UgWLuwAQY1lOWud6A",
        STRAPI_USERNAME_DEV: '',
        STRAPI_EMAIL_DEV: '',
        STRAPI_PASSWORD_DEV: '',
    },
    reactStrictMode: false,
};

export default nextConfig;
