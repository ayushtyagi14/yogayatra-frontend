const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  exportPathMap: async function (defaultPathMap) {
    delete defaultPathMap['/event/[id]']
    delete defaultPathMap['/events']
    delete defaultPathMap['/session/[id]']
    delete defaultPathMap['/sessions']
    return defaultPathMap
  },
};

module.exports = nextConfig;
