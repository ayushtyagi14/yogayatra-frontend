const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: { esmExternals: true },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    // Add the following lines to include the required modules
    config.resolve.alias['react-slick'] = 'react-slick';
    config.resolve.alias['slick-carousel/slick/slick-theme.css'] = 'slick-carousel/slick/slick-theme.css';
    config.resolve.alias['slick-carousel/slick/slick.css'] = 'slick-carousel/slick/slick.css';

    return config
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
