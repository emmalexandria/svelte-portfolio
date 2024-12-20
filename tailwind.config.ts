import type { Config } from 'tailwindcss';
import accessibleVariants from 'tailwindcss-accessible-variants'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  accessibleVariants: 'selector',
  theme: {
    borderRadius: {
      none: '0',
      small: '0.125rem',
      normal: '0.25rem',
      DEFAULT: '0.25rem',
      large: '0.375rem',
      giant: '0.5rem',
      full: '9999px'
    },
    strokeWidth: {
      none: '0px',
      thin: '1px',
      regular: '1.5px',
      thick: '2px',
    },
    borderWidth: {
      none: '0px',
      thin: '1px',
      DEFAULT: '1.5px',
      regular: '1.5px',
      thick: '2px',
    },
    extend: {
      fontFamily: {
        serif: ['Vollkorn Variable', 'sans-serif'],
        sans: ['"Exo 2 Variable"', 'serif'],
        sc: ['Vollkorn SC', 'serif']
      },
      boxShadow: {
        'inner-hard': 'inset 4px 4px 0px 0',
        'hard-low': '2px 2px 0px 0',
        'hard': '3px 3px 0px 0',
        'hard-high': '6px 6px 0px 0'
      },
      dropShadow: ({ theme }) => ({
        'star': `1px 1px ${theme('colors.primary.900')}`,
        'star-dark': `1px 1px ${theme('colors.primary.400')}`,
        'primary-layers': [`2px 2px ${theme('colors.primary.700')}`, `2px 2px ${theme('colors.primary.800')}`],
        'primary': [`2px 2px ${theme('colors.primary.400')}`],
        'primary-dark': [`2px 2px ${theme('colors.primary.700')}`],
      }),
      fontSize: {
        "body-small": ["0.8rem", { lineHeight: "1.6", fontWeight: 400, letterSpacing: "0.03em" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: 400, letterSpacing: "0.03em" }],
        "body-large": ["1.25rem", { lineHeight: "1.6", fontWeight: 400, letterSpacing: "0.03em" }],
        "hero": ["4.77rem", { lineHeight: "1", fontWeight: 900, letterSpacing: "0.00em" }],
        "hero-mobile": ["3.052rem", { lineHeight: "1.2", fontWeight: 900, letterSpacing: "0.00em" }],
        "title": ["3.815rem", { lineHeight: "1.2", fontWeight: 700, letterSpacing: "0.03em" }],
        "header": ["3.052rem", { lineHeight: "1.2", fontWeight: 700, letterSpacing: "0.03em" }],
        "subheader": ["2.441rem", { lineHeight: "1.2", fontWeight: 600, letterSpacing: "0.03em" }],
        "subsubheader": ["1.953rem", { lineHeight: "1.2", fontWeight: 600, letterSpacing: "0.03em" }],
        "body-header": ["1.563rem", { lineHeight: "1.2", fontWeight: 500, letterSpacing: "0.03em" }],
      },
      colors: {
        'mono': {
          '50': '#F8F8F8',
          '100': '#eeeeee',
          '200': '#AFAFAF',
          'gray-dark': '#686868',
          '300': '#8A8A8A',
          '400': '#686868',
          '500': '#5A5A5A',
          '600': '#4D4D4D',
          '700': '#404040',
          'gray-light': '#4D4D4D',
          '800': '#333333',
          '900': '#262626',
          '950': '#191919',
        },
        'primary': {
          '50': '#fff8ed',
          '100': '#fef0d6',
          '200': '#fcddac',
          '300': '#f9c478',
          '400': '#f6a041',
          '500': '#f3841c',
          '600': '#e46a12',
          '700': '#bd5011',
          '800': '#963f16',
          '900': '#793515',
          '950': '#411909',
        }
      },
      spacing: {
        'content': '75ch'
      }
    },
  },

  plugins: [accessibleVariants]
} satisfies Config;
