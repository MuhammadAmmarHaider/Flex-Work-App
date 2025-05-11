/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#108a00',
        primaryHover: '#0c6c00',
        textPrimary: '#1f2937',
        textSecondary: '#4b5563',
        borderLight: '#e5e7eb',
        accent: '#3b82f6',
        error: '#ef4444',
        success: '#22c55e',
        warning: '#f59e0b',
        forest: '#228B22',
        darkforest:'#0f4f1a',
      },
      fontFamily: {
        'permanent-marker': ['Permanent Marker', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({ addComponents }) {
      addComponents({
        '.no-scrollbar': {
          '::-webkit-scrollbar': {
            display: 'none', 
          },
          'scrollbar-width': 'none', 
          '-ms-overflow-style': 'none',
        },
      });
    },
  ],
}
