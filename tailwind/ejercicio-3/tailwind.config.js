module.exports = {
  darkMode: 'class',
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1F2937', 
          light: '#374151'     
        },
        primary: {
          DEFAULT: '#FFA500', 
          dark: '#CC8400'     
        },
        secondary: '#3498DB'
      },
      fontFamily: {
        sans: ['sans-serif']
      },
      spacing: {
        'mi-espacio': '4.5rem'
      }
    }
  },
  plugins: [],
}