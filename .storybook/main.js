const sveltePreprocess = require('svelte-preprocess');

module.exports = {
    stories: ['../src/stories/**/*.stories.js'],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-postcss',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
    ],

    webpackFinal: async config => {
        const svelteLoader = config.module.rules.find(r => r.loader && r.loader.includes('svelte-loader'));
        svelteLoader.options = {
            ...svelteLoader.options,
            preprocess: sveltePreprocess({ postcss: true }),
        };

        return config;
    },
};
