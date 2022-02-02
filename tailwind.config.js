module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {        'hero-pattern': "url('./components/layout/assets/bckg.jpg')",        'footer-texture': "url('/img/footer-texture.png')",      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
