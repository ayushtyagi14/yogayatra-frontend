const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true
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
    return defaultPathMap
  },
};

module.exports = nextConfig;
