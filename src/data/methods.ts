// 检测是否吸顶 修改高度
import { Ref } from 'vue'
import { BreadcrumbPageData } from './breadcrumb-data'

interface ScrollHandlerOptions {
  isSticky: Ref<boolean>
  navSticky: Ref<HTMLElement | undefined>
}

const handleScroll = ({ isSticky, navSticky }: ScrollHandlerOptions) => {
  const handleSticky = isSticky // 创建一个本地变量来避免直接更改参数
  const scrollEvent = () => {
    const distanceFromTop = navSticky.value?.getBoundingClientRect().top

    if (distanceFromTop !== undefined && distanceFromTop <= 76) {
      handleSticky.value = true
    } else {
      handleSticky.value = false
    }
  }

  return scrollEvent
}
interface Route {
  path: string
  // 其他可能的属性
}
interface test {
  [key: string]: string | BreadcrumbPageData
}

const getPageCheck = ($route: Route, json: test) => {
  const routePath = $route.path
  const lowerCaseRoutePath = routePath.toLowerCase()
  const pageData = json[lowerCaseRoutePath]

  if (typeof pageData === 'string') {
    return 0
  }

  if (pageData && pageData.checked) {
    return pageData.checked
  }

  return pageData.checked // 这一行看起来有点多余，因为它总是会返回 undefined。
}

export default { handleScroll, getPageCheck }
