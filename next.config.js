/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["www.google.com", "www.shutterstock.com", "cdn.sanity.io"],
    },
};
