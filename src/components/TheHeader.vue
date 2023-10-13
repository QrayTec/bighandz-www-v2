<template>
  <nav>
    <div class="Main-Header">
      <div class="Header_content">
        <div class="logo-images">
          <router-link to="/">
            <img
              src="../assets/images/logo.svg"
              alt="logo"
          /></router-link>
        </div>
        <div class="nav-link">
          <div
            v-for="(item, index) in NavLinkArray"
            :key="item.id"
            class="nav-link-title"
            @mouseover="iSCheck(index)"
            @mouseout="UnCheck()"
          >
            <router-link
              class="router_link"
              to="/"
            >
              {{ item.title }}
            </router-link>
          </div>

          <div
            ref="NavLine"
            class="nav-link-line"
          ></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

interface NavLink {
  id: number
  title: string
  href: string
}

const props = defineProps<{
  checked: number
}>()

const checked = ref<number>(props.checked)

const NavLinkArray = ref<NavLink[]>([
  { id: 1, title: 'ホーム', href: '/' },
  { id: 2, title: '企業情報', href: '/' },
  { id: 3, title: '事業概要', href: '/' },
  { id: 4, title: '採用情報', href: '/' },
  { id: 5, title: 'アクセス', href: '/' }
])

const NavLine = ref<HTMLElement>()
const NavLineLeft = ref<number>(98)
function iSCheck(index: number) {
  NavLine.value!.style.left = `${NavLineLeft.value * index}px`
}
function UnCheck() {
  // console.log(false)
  NavLine.value!.style.left = `${NavLineLeft.value * checked.value}px`
}
</script>

<style>
.Main-Header {
  width: 100%;
  height: 80px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
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
  /* 导航栏文字 */
  font-family: Noto Sans JP;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.nav-link-line {
  width: 98px;
  height: 4px;
  background-color: #597be5;
  position: absolute;
  bottom: 0px;
  transition: left 0.5s;
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
