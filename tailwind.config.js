module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Adaptações para as cores do design
    extend: {
      backgroundColor: {
        'green-color': '#46C09D',
        'yellow-color': '#FFC86C',
        'black-color': '#101114'
      },
      textColor: {
        'green-color': '#46C09D',
        'yellow-color': '#FFC86C',
        'black-color': '#101114'
      }
    },
  },
  plugins: [],
}
