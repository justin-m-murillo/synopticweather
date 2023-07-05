/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: '#ffffff',
        day: '#f1f5f9',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(text)-(dark|day)/
    }
  ]
}

