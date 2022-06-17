module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        '24': '24px',
        '48': '48px',
      },
      height: {
        '24': '24px',
        '48': '48px',
      },
      colors: {
        'dark-green': '#0c5f07',
        'light-green': '#d2fbcf',
      },
    },
  },
  plugins: [],
};
