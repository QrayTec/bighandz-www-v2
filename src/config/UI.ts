import { reactive, toRefs } from 'vue'

function calculateMainContentWidth(): number {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 768) {
      return 375 // 手机版心宽度
    }
    if (window.innerWidth < 1300) {
      return 600 // 平板版心宽度
    }
  }
  return 1200 // 大屏幕版心宽度
}
const state = reactive({
  MAIN_CONTENT_WIDTH: calculateMainContentWidth()
})
function handleResize() {
  state.MAIN_CONTENT_WIDTH = calculateMainContentWidth()
}

// 添加窗口大小变化的事件监听器
if (typeof window !== 'undefined') {
  window.addEventListener('resize', handleResize)
}

// 在应用启动时调用一次初始化
handleResize()

export const { MAIN_CONTENT_WIDTH } = toRefs(state)
