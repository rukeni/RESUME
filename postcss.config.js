/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.jsx',
    './src/**/*.js',
    './src/index.html',
  ],
  css: ['./src/**/*.css'],
  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/ig) || [],
});
const cssnano = require('cssnano')({
  preset: 'default',
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : [],
  ],
};
