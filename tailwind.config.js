/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#08090D',
        surface: {
          DEFAULT: '#111318',
          card: '#161922',
          hover: '#1E2230',
          border: '#242A38',
          highlight: 'rgba(255, 255, 255, 0.05)',
        },
        primary: {
          DEFAULT: '#8B5CF6', // Electric violet
          light: '#A78BFA',
          dark: '#6D28D9',
          glow: 'rgba(139, 92, 246, 0.35)',
        },
        gold: {
          DEFAULT: '#D4AF37', // Soft luxury gold
          light: '#FDE047',
          dark: '#B45309',
          glow: 'rgba(212, 175, 55, 0.25)',
        },
        silver: {
          DEFAULT: '#94A3B8',
          light: '#E2E8F0',
          dark: '#64748B',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-violet': '0 0 25px -3px rgba(139, 92, 246, 0.45)',
        'glow-violet-lg': '0 0 50px -5px rgba(139, 92, 246, 0.3)',
        'glow-gold': '0 0 25px -3px rgba(212, 175, 55, 0.4)',
        'luxury-card': '0 10px 40px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.07)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.06)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
