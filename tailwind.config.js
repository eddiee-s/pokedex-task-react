/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pokelogo: "url('../public/pokelogo.png')",
        pokeball: "url('../public/pokeball.png')",
        pokeballgray: "url('../public/pokeball-w.png')",
      },
    },
    plugins: [],
  },
}
