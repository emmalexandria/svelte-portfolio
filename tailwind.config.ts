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
      fontSize: {
        "body-small": ["0.8rem", { lineHeight: "1.6", fontWeight: 400, letterSpacing: "0.03em" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: 400, letterSpacing: "0.03em" }],
        "body-large": ["1.25rem", { lineHeight: "1.6", fontWeight: 400, letterSpacing: "0.03em" }],
        "hero": ["4.77rem", { lineHeight: "1", fontWeight: 900, letterSpacing: "0.00em" }],
        "hero-mobile": ["3.815rem", { lineHeight: "1.2", fontWeight: 900, letterSpacing: "0.00em" }],
        "title": ["3.815rem", { lineHeight: "1.2", fontWeight: 700, letterSpacing: "0.03em" }],
        "header": ["3.052rem", { lineHeight: "1.2", fontWeight: 700, letterSpacing: "0.03em" }],
        "subheader": ["2.441rem", { lineHeight: "1.2", fontWeight: 600, letterSpacing: "0.03em" }],
        "subsubheader": ["1.953rem", { lineHeight: "1.2", fontWeight: 600, letterSpacing: "0.03em" }],
        "body-header": ["1.563rem", { lineHeight: "1.2", fontWeight: 500, letterSpacing: "0.03em" }],
      },
      colors: {
        'mono': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          'gray-dark': '#d1d1d1',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          'gray-light': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#262626',
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
