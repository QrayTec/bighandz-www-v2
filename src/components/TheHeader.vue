<template>
  <nav>
    <div
      ref="TabBar"
      class="h-[75px] w-full flex items-center justify-center"
    >
      <div class="w-[1780px] flex items-center justify-between bg-transparent">
        <div
          class="h-full w-[200px] flex items-center transition-all duration-800 hover:opacity-60"
        >
          <router-link
            to="/"
            class="h-full w-full flex items-center justify-between py-[5px]"
          >
            <img
              src="/src/assets/images/logo.png"
              alt="logo"
            />
          </router-link>
        </div>
        <div class="relative h-full w-[490px] flex">
          <div
            v-for="(item, index) in NavLinkArray"
            :key="item.id"
            class="font-NotoSansJP h-[76px] w-[98px] flex items-center justify-center text-[15px] font-[400] not-italic text-[#fff]"
            @click="ClickTitle(index)"
            @mouseover="iSCheck(index)"
            @mouseout="UnCheck(index)"
          >
            <router-link
              class="h-full w-full px-[19px] py-[28px]"
              :to="item.href"
              >{{ item.title }}</router-link
            >
          </div>
          <div
            ref="NavLine"
            class="absolute bottom-[0px] h-[4px] w-[98px] bg-[#597be5] transition-left duration-800"
          ></div>
        </div>
      </div>
    </div>
    <transition
      name="fade"
      enter-active-class="animate__animated animate__fadeIn custom-enter"
      leave-active-class="animate__animated animate__fadeOut custom-leave"
    >
      <TheHeaderInfo
        v-show="MenuFlag"
        class="animate__animated animated-element"
        :menudata="MenuData"
        :menuindex="MenuIndex"
        :click-title="ClickTitle"
        @mouseenter="BlockMenu(true, LineIndex)"
        @mouseleave="BlockMenu(false, LineIndex)"
      />
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { json } from '../data/breadcrumb-data'
import methods from '@/data/methods'
import { NavLinkArray, menus } from '@/data/HeaderData'
import { MenuItems } from '@/data/pages_interface'
import { useScrollToTop } from '@/config/route'

const $route = useRoute()
useScrollToTop()

const checked = ref<number>(0)

const MenuData = ref<MenuItems[]>([])

const MenuFlag = ref<boolean>(false)
const MenuIndex = ref<number>(0)
const NavLine = ref<HTMLElement>()
const TabBar = ref<HTMLElement>()
const NavLineLeft = ref<number>(98)
const LineIndex = ref<number>(0)

function BlockMenu(flag: boolean, index: number) {
  MenuFlag.value = flag
  if (flag) {
    NavLine.value!.style.left = `${NavLineLeft.value * index}px`
  }
  if (!flag && (index === 1 || index === 2 || index === 3)) {
    NavLine.value!.style.left = `${NavLineLeft.value * checked.value}px`
  }
}

function iSCheck(index: number) {
  NavLine.value!.style.left = `${NavLineLeft.value * index}px`
  if (index === 1 || index === 2 || index === 3) {
    BlockMenu(true, index)
    MenuData.value = menus[index - 1]
    MenuIndex.value = index - 1
  } else if (!(index === 1 || index === 2 || index === 3)) {
    BlockMenu(false, index)
  }
}

function UnCheck(index: number) {
  LineIndex.value = index

  if (index === 1 || index === 2 || index === 3) {
    BlockMenu(MenuFlag.value, index)
  }
  NavLine.value!.style.left = `${NavLineLeft.value * checked.value}px`
}
function ClickTitle(index: number) {
  if (!(index === 0 || index === 4)) {
    MenuFlag.value = !MenuFlag.value
    BlockMenu(MenuFlag.value, index)
  }
}
function handleScroll() {
  const scrollValue = window.scrollY
  const opacity = scrollValue / 500 // 这里设置透明度值，根据滚动值变化

  // 假设你想要修改背景颜色为蓝色，并根据滚动改变透明度
  const backgroundColor = `rgba(14, 27, 71, ${opacity})`

  // 将背景颜色应用到特定元素，这里假设是NavLine元素
  TabBar.value!.style.backgroundColor = backgroundColor
}
watch($route, newRoute => {
  // 调用 getPageCheck 方法更新 checked.value
  checked.value = methods.getPageCheck(newRoute, json)
})
onMounted(() => {
  handleScroll()
  checked.value = methods.getPageCheck($route, json)
  window.addEventListener('scroll', handleScroll)
  NavLine.value!.style.left = `${NavLineLeft.value * checked.value}px`
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.animate__animated,
.animate__fadeOut {
  --animate-duration: 0.8s;
}
</style>
