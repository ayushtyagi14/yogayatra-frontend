const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'],
  },
  env: {
    BACKEND: "https://yogayatra.in/api/",
  },
  exportPathMap: async function (defaultPathMap) {
    delete defaultPathMap['/event/[id]']
    delete defaultPathMap['/events']
    delete defaultPathMap['/session/[id]']
    delete defaultPathMap['/sessions']
    delete defaultPathMap['/testimonials']
    delete defaultPathMap['/instructors']
    delete defaultPathMap['/']
    return defaultPathMap
  },
};

module.exports = nextConfig;
