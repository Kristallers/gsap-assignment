/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["three"]);

const nextConfig = { withTM };

module.exports = nextConfig;
