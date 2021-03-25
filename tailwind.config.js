const production = !process.env.ROLLUP_WATCH;

module.exports = {
    future: {},
    purge: {
        content: ['./src/**/*.svelte', './src/**/*.html'],
        enabled: production,
        options: {
            whitelist: [/svelte-/],
            defaultExtractor: content =>
                [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
