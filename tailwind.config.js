/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
          introduction: {
              words: ['a developer.', 'an engineer.', 'a photographer.', 'Jaime Costeira.'],
              delay: 2,
              pauseBetween: 2
          }
      }
    }),
    require("tw-elements/dist/plugin.cjs")
  ],
}