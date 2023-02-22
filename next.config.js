module.exports = {
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
     exportPathMap: function () {
        return {
            '/': { page: `/` },
            // '/posts/1': { page: 'posts/[id]' }
        }
    },
    runtime: 'nodejs',
    images:{
        unoptimized : true
    }
};