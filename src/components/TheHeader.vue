<template>
  <nav>
    <div
      ref="TabBar"
      class="h-[80px] w-full flex items-center justify-center"
    >
      <div class="w-[1780px] flex justify-between bg-transparent">
        <div class="h-[68px] w-[68px]">
          <router-link to="/">
            <img
              src="/src/assets/images/logo.svg"
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
import { useScrollToTop } from '@/config/route'

const $route = useRoute()
useScrollToTop()

interface NavLink {
  id: number
  title: string
  href: string
}

interface MenuItems {
  id: number
  title: string
  href: string
  align: string
}

const checked = ref<number>(0)

const NavLinkArray = ref<NavLink[]>([
  { id: 1, title: 'ホーム', href: '/' },
  { id: 2, title: '企業情報', href: '' },
  { id: 3, title: '事業概要', href: '' },
  { id: 4, title: '採用情報', href: '/adoption-Intelligence' },
  { id: 5, title: 'アクセス', href: '' }
])
const MenuData = ref<MenuItems[]>([])

const menus = [
  [
    {
      id: 1,
      title: '企業理念経営方針',
      href: '/corporate-philosophy-management-policy',
      align: 'left'
    },
    {
      id: 2,
      title: '社長挨拶',
      href: '/message-from-president',
      align: 'center'
    },
    { id: 3, title: '会社概要', href: '/company-profile', align: 'right' },
    { id: 4, title: 'イベント情報', href: '/event-information', align: 'left' }
  ],
  [
    {
      id: 1,
      title: 'Siサービス事業',
      href: '/si-service-business',
      align: 'left'
    },
    {
      id: 2,
      title: 'データソリューション',
      href: '/data-solution',
      align: 'center'
    },
    {
      id: 3,
      title: 'インフラ事業',
      href: '/infrastructure-business',
      align: 'right'
    },
    {
      id: 4,
      title: 'ヘルスケア事業',
      href: '/healthcare-business',
      align: 'left'
    },
    {
      id: 5,
      title: '物流事業',
      href: '/logistics-business',
      align: 'center'
    }
  ],
  [
    {
      id: 1,
      title: 'MOVIE',
      href: '/company-staff-observation',
      align: 'left'
    },
    {
      id: 2,
      title: '新卒採用',
      href: '/graduate-recruitment',
      align: 'center'
    },
    { id: 3, title: 'キャリア採用', href: '/', align: 'right' },
    { id: 4, title: '採用の流れ', href: '/recruitment-process', align: 'left' },
    { id: 5, title: 'FAQよくあるご質問', href: '/FAQ', align: 'center' },
    { id: 6, title: 'キャリア採社員インタビュー用', href: '/', align: 'right' }
  ]
]

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
