<template>
  <nav
    :class="
      isScrolled ? 'scroll-background' : 'scroll-background-to-transparent'
    "
  >
    <div class="Main-Header">
      <div class="Header_content">
        <div class="logo-images">
          <router-link to="/">
            <img
              src="../assets/images/logo.svg"
              alt="logo"
            />
          </router-link>
        </div>
        <div class="nav-link">
          <div
            v-for="(item, index) in NavLinkArray"
            :key="item.id"
            class="nav-link-title"
            @mouseover="iSCheck(index)"
            @mouseout="UnCheck(index)"
          >
            <router-link
              class="router_link"
              to="/"
              >{{ item.title }}</router-link
            >
          </div>
          <div
            ref="NavLine"
            class="nav-link-line"
          ></div>
        </div>
      </div>
    </div>
    <TheHeaderInfo
      v-if="MenuFlag"
      :menudata="MenuData"
      :menuindex="MenuIndex"
      @mouseenter="BlockMenu(true, LineIndex)"
      @mouseleave="BlockMenu(false, LineIndex)"
    />
  </nav>
</template>

<script setup lang="ts">
import { defineProps, onBeforeUnmount, onMounted, ref } from 'vue'

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

const props = defineProps<{ checked: number }>()

const checked = ref<number>(props.checked)

const NavLinkArray = ref<NavLink[]>([
  { id: 1, title: 'ホーム', href: '/' },
  { id: 2, title: '企業情報', href: '/' },
  { id: 3, title: '事業概要', href: '/' },
  { id: 4, title: '採用情報', href: '/' },
  { id: 5, title: 'アクセス', href: '/' }
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
    { id: 4, title: 'イベント情報', href: '/', align: 'left' }
  ],
  [
    { id: 1, title: 'Siサービス事業', href: '/', align: 'left' },
    { id: 2, title: 'データソリューション', href: '/', align: 'center' },
    { id: 3, title: 'インフラ事業', href: '/', align: 'right' },
    {
      id: 4,
      title: 'ヘルスケア事業',
      href: '/healthcare-business',
      align: 'left'
    }
  ],
  [
    { id: 1, title: 'MOVIE', href: '/', align: 'left' },
    { id: 2, title: '新卒採用', href: '/', align: 'center' },
    { id: 3, title: 'キャリア採用', href: '/', align: 'right' },
    { id: 4, title: '採用の流れ', href: '/', align: 'left' },
    { id: 5, title: 'FAQよくあるご質問', href: '/', align: 'center' },
    { id: 6, title: 'キャリア採社員インタビュー用', href: '/', align: 'right' }
  ]
]

const MenuFlag = ref<boolean>(false)
const MenuIndex = ref<number>(0)
const NavLine = ref<HTMLElement>()
const NavLineLeft = ref<number>(98)
const LineIndex = ref<number>()

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
    BlockMenu(true, index)
  }
  NavLine.value!.style.left = `${NavLineLeft.value * checked.value}px`
}
const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 0
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  NavLine.value!.style.left = `${NavLineLeft.value * checked.value}px`
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
@keyframes backgroundColorTransition {
  0% {
    background-color: transparent;
  }
  100% {
    background-color: #0e1b47;
  }
}
@keyframes backgroundColorTransitionToTransparent {
  0% {
    background-color: #0e1b47;
  }
  100% {
    background-color: transparent;
  }
}
.Main-Header {
  width: 100%;
  height: 80px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.scroll-background {
  animation: backgroundColorTransition 0.8s linear; /* 2秒的动画，可以根据需要进行调整 */
  background-color: #0e1b47; /* 初始背景色为透明 */
}
.scroll-background-to-transparent {
  animation: backgroundColorTransitionToTransparent 0.8s linear; /* 2秒的动画，可以根据需要进行调整 */
  background-color: transparent; /* 初始背景颜色为 #0e1b47 */
}
.logo-images {
  width: 68px;
  height: 68px;
}
.nav-link {
  width: 490px;
  height: 100%;
  display: flex;
  position: relative;
}
.nav-link-title {
  width: 98px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-family: Noto Sans JP;
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
}
.nav-link-line {
  width: 98px;
  height: 4px;
  background-color: #597be5;
  position: absolute;
  bottom: 0px;
  transition: left 0.8s;
}
.router_link {
  width: 100%;
  height: 100%;
  padding: 28px 19px 26px 19px;
}
.logo-images a {
  display: inherit;
  margin: 6px 0;
}
.logo-images img {
  width: 68px;
  height: 68px;
}
.Header_content {
  width: 1760px;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
}
</style>
