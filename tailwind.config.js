/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        modalOpen: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9) translateY(-30px)',
            filter: 'blur(2px)'
          },
          '50%': {
            opacity: '0.5',
            filter: 'blur(1px)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
            filter: 'blur(0)'
          },
        },
        overlayShow: {
          '0%': { 
            opacity: '0',
            backdropFilter: 'blur(0)'
          },
          '100%': { 
            opacity: '1',
            backdropFilter: 'blur(4px)'
          },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
        modalOpen: 'modalOpen 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        overlayShow: 'overlayShow 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
  },
  plugins: [],
}
