/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'bg-overlay': "url('../src/assets/bg.jpeg')",
        'laptop':"url('../src/assets/laptop.jpeg')",
        'joinus':"url('../src/assets/skyline.png')",
        'notfound':"url('../src/assets/404.jpg')"
      },
    },
  },
  plugins: [],
}