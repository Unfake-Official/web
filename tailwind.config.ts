/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from 'tailwindcss'

const svgToDataUri = require('mini-svg-data-uri')
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        red: {
          50: '#FCECEC',
          100: '#FBE2E2',
          200: '#F6C3C3',
          300: '#E13E3E',
          400: '#CB3838',
          500: '#B43232',
          600: '#A92F2F',
          700: '#872525',
          800: '#651C1C',
          900: '#4F1616',
        },
        orange: {
          50: '#FFF1E9',
          100: '#FFEADD',
          200: '#FFD3BA',
          300: '#FF701F',
          400: '#E6651C',
          500: '#CC5A19',
          600: '#BF5417',
          700: '#994313',
          800: '#73320E',
          900: '#59270B',
        },
        yellow: {
          50: '#FEF5E9',
          100: '#FEF0DE',
          200: '#FCE1BB',
          300: '#F59D23',
          400: '#DD8D20',
          500: '#C47E1C',
          600: '#B8761A',
          700: '#935E15',
          800: '#6E4710',
          900: '#56370C',
        },
        purple: {
          50: '#F3EAF9',
          100: '#ECDFF5',
          200: '#D8BDEB',
          300: '#8229BE',
          400: '#7525AB',
          500: '#682198',
          600: '#621F8F',
          700: '#4E1972',
          800: '#3A1255',
          900: '#2E0E43',
        },
        pink: {
          50: '#FBEDF6',
          100: '#F8E4F1',
          200: '#F1C8E2',
          300: '#D24DA1',
          400: '#BD4591',
          500: '#A83E81',
          600: '#9E3A79',
          700: '#7E2E61',
          800: '#5E2348',
          900: '#4A1B38',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        shimmer: 'shimmer 2s linear infinite',
      },
      dropShadow: {
        globe: '0 0 160px rgba(225, 62, 62, 0.55)',
      },
      blur: {
        blob: '150px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      )
    },
  ],
} satisfies Config

export default config
