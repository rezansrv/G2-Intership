module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
        autoprefixer: {},
      },
    },
  },
  
}
