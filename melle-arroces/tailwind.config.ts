import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: '#E07B00',
          light: '#F59E42',
          dark: '#B85F00',
        },
        terracotta: {
          DEFAULT: '#C4A77D',
          light: '#D4C09D',
          dark: '#A88A5D',
        },
        bone: {
          DEFAULT: '#FAF8F5',
          dark: '#F0EDE8',
        },
        olive: {
          DEFAULT: '#5B6B4F',
          light: '#7A8B6F',
          dark: '#3C4D30',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'warm': '0 10px 40px -10px rgba(224, 123, 0, 0.15)',
        'warm-lg': '0 20px 60px -15px rgba(224, 123, 0, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
