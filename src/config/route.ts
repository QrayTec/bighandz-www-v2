// scrollToTop.ts

import { onBeforeRouteLeave } from 'vue-router'

export const useScrollToTop = () => {
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 10
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep)
      } else {
        clearInterval(scrollInterval)
      }
    }, 1)
  }

  onBeforeRouteLeave(() => {
    scrollToTop()
  })
}
