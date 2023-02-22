module.exports = {
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
     exportPathMap: function () {
        return {
            '/': { page: `/` },
        }
    },
    images:{
        unoptimized : true
    }
};