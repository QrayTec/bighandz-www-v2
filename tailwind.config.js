/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '768px',
      lg: '1300px'
    },
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
          'linear-gradient(to right, rgba(217, 217, 217, 0), rgba(14, 27, 71, 1))',
        AutomationTest_top_1:
          'linear-gradient(213deg, #FED776 -5.37%, #FED776 -5.37%, #F7806E 83.03%)',
        AutomationTest_1:
          'url(@/assets/images/si-service-business/AutomationTest_1.svg)',
        AutomationTest_top_2:
          'linear-gradient(224deg, #FF789A -3.55%, #F8436D 82.55%)',
        AutomationTest_2:
          'url(@/assets/images/si-service-business/AutomationTest_2.svg)',
        AutomationTest_top_3:
          'linear-gradient(231deg, #00BBF7 -1.17%, #017EF0 80%)',
        AutomationTest_3:
          'url(@/assets/images/si-service-business/AutomationTest_3.svg)',
        AutomationTest_top_4:
          'linear-gradient(238deg, #D877F3 11.94%, #935DFB 76.04%)',
        AutomationTest_4:
          'url(@/assets/images/si-service-business/AutomationTest_4.svg)',
        SubPageTitleBg:
          'linear-gradient(90deg, rgb(14, 27, 71) 0%, rgba(14, 27, 71, 0.6) 58.33%, rgba(14, 27, 71, 0.6) 100%)',
        BusinessBall: 'linear-gradient(180deg, #6078DA 0%, #192147 100%);'
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
      },
      boxShadow: {
        Graduates: '0px -4px 4px 0px rgba(14, 27, 71, 0.25)'
      }
    },
    colors: {
      deep_blue: '#0E1B47',
      navy_blue: '#6785C1',
      cobalt_blue: '#071027'
    }
  },
  plugins: []
}
