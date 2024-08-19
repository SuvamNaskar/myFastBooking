/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './views/index.ejs',
      './views/*.{ejs,html,js}'
  ],
  theme: {
    extend: {
        colors: {
            'main-blue': '#A3D8FF',
        },
    },
  },
  plugins: [],
}

