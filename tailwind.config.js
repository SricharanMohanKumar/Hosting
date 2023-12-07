/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        myBlue: '#6caab7', // replace with your desired hex value
        darkBlue:'#0c4e94',
      },
    },
  },
  plugins: [],
}

