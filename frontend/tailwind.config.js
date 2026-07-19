/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1E1B4B',
          light: '#2D2A5E'
        },
        purple: {
          DEFAULT: '#7C3AED',
          dark: '#6D28D9'
        },
        tint: '#FAF5FF',
        surface: '#F9FAFB'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
