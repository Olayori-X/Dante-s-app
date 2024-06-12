/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#481986',
        light: '#F6F3F9',
        secondary: 'rgba(0, 0, 0, 0.6)',
        black: '#000000',
        black2: '#646464',
        black3: '#8b8b8b',
        shade: '#121111',
        disable: '#f2f2f2',
        fa: '#fafafa',
        c4: '#c4c4c4',
        e5: '#e5e5e5',
        red: '#CC4424',
        red2: '#FCF5F4',
        success: '#009688',
        success2: '#EBF7F5',
        pend: '#EDBB00',
        blue: '#2196F3'
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'], // Change 'Roboto' to your desired font
      }
    },
  },
  plugins: [],
}

