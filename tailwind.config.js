/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      small: 200,
      normal: 400,
      bold: 600
    },
    screens: {
      'sm': '320px',
      'md': '480px',
      'lg': '640px',
      'xl': '768px',
      '2xl': '1024px',
      '3xl': '1280px',
      '4xl': '1536px'
    },
    extend: {
      colors: {
        // Primary
        red: 'hsl(0, 78%, 62%)',
        cyan: 'hsl(180, 62%, 55%)',
        orange: 'hsl(34, 97%, 64%)',
        blue: 'hsl(212, 86%, 64%)',
        // Neutral
        veryDarkBlue: 'hsl(234, 12%, 34%)',
        veryDarkBlue: 'hsl(229, 6%, 66%)',
        veryDarkBlue: 'hsl(0, 0%, 98%)'
      },
      fontSize: {
        base: '15px'
      }
    }
  },
  plugins: [],
}

