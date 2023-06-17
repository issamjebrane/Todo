/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      gradient:{
        "check-background":['hsl(192, 100%, 67%)','hsl(280, 87%, 65%)']
      }
      ,
      "right_Blue": "hsl(220, 98%, 61%)",
      "Very_Dark_Blue": "hsl(235, 21%, 11%)",
       "Very_Dark_Desaturated_Blue": "hsl(235, 24%, 19%)",
       "Light_Grayish_Blue": "hsl(234, 39%, 85%)",
       "Light_Grayish_Blue_hover": "hsl(236, 33%, 92%)",
       "Dark_Grayish_Blue": "hsl(234, 11%, 52%)",
       "Darker_Grayish_Blue": "hsl(233, 14%, 35%)",
       "Very_Dark_Grayish_Blue": "hsl(237, 14%, 26%)"
    },
    fontFamily:{
      "sans": ['Josefin Sans', 'sans-serif'],
    }
  },
  plugins: [],
}