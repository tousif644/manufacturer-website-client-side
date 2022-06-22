/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#06113C",
          secondary: "#FF8C32",
          accent: "#37cdbe",
          neutral: "#DDDDDD",
          "base-100": "#FFFFED",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}