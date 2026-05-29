/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        corporate: {
          green: '#047857',
          'green-dark': '#065f46',
          'green-alt': '#15803d',
          'green-alt-dark': '#166534',
          accent: '#ca8a04',
        },
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.07)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.14)',
        'emerald-glow': '0 8px 32px rgba(4, 120, 87, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(4, 120, 87, 0.4)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(4, 120, 87, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(4, 120, 87, 0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease forwards',
        'slide-left': 'slide-left 0.5s ease forwards',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 1.5s infinite',
        'pulse-ring': 'pulse-ring 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
