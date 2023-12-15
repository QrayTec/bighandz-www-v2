<template>
  <div
    class="h-[150px] w-full flex items-center justify-center bg-[#09122e] text-[#fff]"
  >
    <div
      class="h-full flex items-center justify-between py-[41px]"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <div
        class="h-full w-[200px] flex items-center transition-all duration-800 hover:opacity-60"
      >
        <router-link
          v-smooth-scroll="{
            duration: 1
          }"
          href="#app"
          to="/"
          class="h-full flex items-center justify-between py-[5px]"
        >
          <img
            src="/src/assets/images/logo.png"
            alt="logo"
          />
        </router-link>
      </div>
      <div class="h-[22px] w-[650px] flex items-center justify-between">
        <div
          v-for="item in NavData"
          :key="item.id"
          class="h-[22px] min-w-[86px] w-full flex items-center justify-center"
        >
          <div class="h-[12px] w-[1px] bg-[#fff] bg-opacity-20"></div>
          <div
            class="mx-[20px] w-full flex justify-center text-[15px] text-[#fff]"
          >
            <router-link
              v-smooth-scroll="{
                duration: 1
              }"
              :href="item.href === '/' ? '#app' : ''"
              :to="item.href"
              >{{ item.title }}</router-link
            >
          </div>
        </div>
        <div class="h-[12px] w-[1px] bg-[#fff] bg-opacity-20"></div>
      </div>
      <div
        class="font-feature-settings-cilg-liga font-NotoSansJP h-[22px] w-[350px] text-right text-[14.4px] font-[400] not-italic text-[#fff]"
      >
        Copyright © BigHandz Co.Ltd. All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

interface FooterNavData {
  id: number
  title: string
  href: string
}

const NavData = ref<FooterNavData[]>([
  { id: 1, title: 'ホーム', href: '/' },
  { id: 1, title: '利用規約', href: '/terms-conditions' },
  { id: 1, title: '個人情報保護方針', href: '/privacy-policy' },
  { id: 1, title: 'お問い合わせ', href: '/contact-us' }
])
</script>

<style>
.footer-main {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #09122e;
  color: #fff;
}
.footer-content {
  width: 1200px;
  height: 100%;
  padding: 41px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer_logo {
  widows: 68px;
  height: 68px;
}
.footer_title {
  width: 350px;
  height: 22px;
  color: #fff;
  text-align: right;
  font-feature-settings: 'clig' off, 'liga' off;
  /* 导航栏文字 */
  font-family: Noto Sans JP;
  font-size: 14.4px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.footer_nav {
  width: 500px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 120px;
}
.footer_NavLink_line {
  width: 1px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.2);
}
.footer_Link {
  color: #fff;
  font-size: 15px;
  margin: 0px 20px;
}
.footer_NavLink {
  min-width: 86px;
  height: 22px;
  display: flex;
  align-items: center;
}
</style>
