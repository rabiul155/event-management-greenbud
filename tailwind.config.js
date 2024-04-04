/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3bb44a',
        primaryDark: '#006808',
        secondary: '#03770E',
        baseline: '#3A3A3A',
        lightGray: '#EDF6EE',
        heading: '#2C4468',
        light: '#CB017A',
      },
    },
  },
  plugins: [],
}
