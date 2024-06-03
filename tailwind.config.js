/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#244856',
        'custom-text': '#E74833',
      },
    },
  },
  plugins: [],
};
