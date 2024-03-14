/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "phones": {
        "max": "450px"
      }
    },
    extend: {
      backgroundImage: {
        "back": "url(./components/images/background.png)",
        'history': "url(./components/images/movies.avif)",
        'med': "url(./components/images/islam.jpg)",
        'tech': "url(./components/images/programmer.jpg)",
      }
    },
  },
  plugins: [],
}

