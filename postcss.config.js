module.exports = {
  plugins: {
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true,
      },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
}
