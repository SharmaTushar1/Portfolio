/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'transparent-zinc-100': 'rgba(244, 244, 245, 0.9)',
        'transparent-zinc-900': 'rgba(24, 24, 27, 0.9)',
        primary: {
          50: 'rgb(239 246 255)',
          100: 'rgb(219 234 254)',
          200: 'rgb(191 219 254)',
          300: 'rgb(147 197 253)',
          400: 'rgb(96 165 250)',
          500: 'rgb(59 130 246)',
          600: 'rgb(37 99 235)',
          700: 'rgb(29 78 211)',
          800: 'rgb(30 64 175)',
          900: 'rgb(30 58 138)',
        },
        surface: {
          light: 'rgb(250 250 250)',
          dark: 'rgb(18 18 18)',
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        body: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        'content': '72rem',
      },
      spacing: {
        'section': '4rem',
        'section-lg': '6rem',
      },
    },
  },
  plugins: [],
};
