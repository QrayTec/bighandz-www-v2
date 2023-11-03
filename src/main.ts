import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import VueSmoothScroll from 'vue3-smooth-scroll'
// import Previewer from 'virtual:vue-component-preview'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'animate.css'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ctx => {
    ctx.app.use(VueSmoothScroll)
    // install all modules under `modules/`
    Object.values(
      import.meta.glob<{ install: UserModule }>('./modules/*.ts', {
        eager: true
      })
    ).forEach(i => i.install?.(ctx))
  }
)
if (typeof document !== 'undefined') {
  AOS.init({
    duration: 800, // 动画持续时间
    offset: 50
  })
}
