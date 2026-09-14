module.exports = {
  content: [
    // Rutas donde el compilador de tailwind escaneara para extraer las clases utilizadas
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
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