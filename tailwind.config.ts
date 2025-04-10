import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'primary-hover': 'rgb(var(--primary-hover) / <alpha-value>)',
        'light-bg': 'rgb(var(--light-bg) / <alpha-value>)',
        'dark-text': 'rgb(var(--dark-text) / <alpha-value>)',
        'light-text': 'rgb(var(--light-text) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'nav-break': '1024px',
      },
    },
  },
  plugins: [],
} satisfies Config
