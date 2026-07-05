import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        bg: '#FAF9F6',
        surface: '#FFFFFF',
        ink: '#14181A',
        muted: '#666D6A',
        primary: {
          DEFAULT: '#0E3B36',
          light: '#175951',
          dark: '#0A2B27',
        },
        accent: {
          DEFAULT: '#B08D57',
          light: '#C9AB7D',
        },
        sage: {
          DEFAULT: '#6B8F7A',
          light: '#E4EBE6',
        },
        line: '#E3E0D8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      maxWidth: {
        content: '1280px',
      },
      backgroundImage: {
        mesh: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%230E3B36' stroke-opacity='0.05' stroke-width='1'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
