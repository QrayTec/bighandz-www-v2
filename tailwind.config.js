/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        NotoSansJP: ['Noto-Sans-JP', 'sans-serif'],
        Shippori: ['Shippori-Mincho', 'sans-serif']
      },
      backgroundImage: {
        primarygradient:
          'linear-gradient(90deg, #597EE5 0%, #597EE5 26.04%, #00FFB2 100%)',
        Business: 'linear-gradient(0deg, #111f4e 0%, #2e4a9e 100%)'
      }
    }
  },
  plugins: []
}
