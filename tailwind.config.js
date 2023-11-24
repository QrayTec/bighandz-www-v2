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
        Business: 'linear-gradient(0deg, #111f4e 0%, #2e4a9e 100%)',
        GartnerCard:
          'linear-gradient(to right, rgba(217, 217, 217, 0), rgba(14, 27, 71, 1))'
      },
      backgroundPosition: {
        'center-35': 'center 120px , center'
      },
      animation: {
        moveContainer: 'moveContainer 3s infinite alternate'
      },
      keyframes: {
        moveContainer: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: ' translateY(-30%)' }
        }
      }
    }
  },
  plugins: []
}
