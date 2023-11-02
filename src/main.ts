import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import VueSmoothScroll from 'vue3-smooth-scroll'
// import Previewer from 'virtual:vue-component-preview'
import WOW from 'wow.js'
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

    // const wow = new WOW()

    // const windowHeight = window.innerHeight
    // window.onscroll = function () {
    //   if (window.scrollY > 0 && window.scrollY <= windowHeight) {
    //     wow.stop()
    //   } else {
    //     wow.init()
    //   }
    // }
  }
)

new WOW({
  boxClass: 'wow', // 类名，在用户滚动时显示隐藏的框。
  animateClass: 'animate__animated', // 触发CSS动画的类名称
  offset: 50, // 定义浏览器视口底部与隐藏框顶部之间的距离。当用户滚动并到达此距离时，隐藏的框会显示出来。
  mobile: true, // 在移动设备上打开/关闭WOW.js。
  live: true, // 在页面上同时检查新的WOW元素。
  loop: true
}).init()
