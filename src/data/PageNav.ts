// 检测是否吸顶 修改高度

import { Ref } from 'vue'

interface ScrollHandlerOptions {
  isSticky: Ref<boolean>
  navSticky: Ref<HTMLElement | undefined>
}

const handleScroll = ({ isSticky, navSticky }: ScrollHandlerOptions) => {
  const handleSticky = isSticky // 创建一个本地变量来避免直接更改参数
  const scrollEvent = () => {
    const distanceFromTop = navSticky.value?.getBoundingClientRect().top

    if (distanceFromTop !== undefined && distanceFromTop === 76) {
      handleSticky.value = true
    } else {
      handleSticky.value = false
    }
  }

  return scrollEvent
}

export default handleScroll
