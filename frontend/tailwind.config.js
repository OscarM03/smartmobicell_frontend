/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-500': "500px",
        'custom-450': "450px",
        'custom-950': "950px",
        'custom': "360px",
        'custom-550': "550px",
      },
      backgroundImage: {
        'phonebg': "url('assets/images/phonebg.jpg')",
        'affordablebg': "url('assets/images/affordablephones.jpg')",
        'buttonbg': "url('assets/images/buttonphone.png')",
        'hero': "url('assets/images/collection-background.svg')",
        'color-bg': "url('assets/images/bg-color.png')",
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        "thick-orange": "#fd5d00",
        "lighter-blue": "#10E7DC",
        "faded_blue": "#eceeff",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "lighter-yellow": "#ffd500",
        "display-bg": "#f7f6f6",
        "faded_pink": "#eeeadf",

        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
}

