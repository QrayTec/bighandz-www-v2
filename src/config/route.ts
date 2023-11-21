// scrollToTop.ts

import { onBeforeRouteLeave } from 'vue-router'

export const useScrollToTop = () => {
  onBeforeRouteLeave(() => {
    window.scrollTo(0, 0)
  })
}
