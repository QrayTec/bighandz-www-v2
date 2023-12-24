<template>
  <div
    class="font-NotoSansJP min-h-[150px] w-full flex items-center justify-center bg-[#09122e] pb-[20px] text-[#fff] lg:pb-0"
  >
    <div
      class="md:() h-full flex flex-col items-start justify-center py-[0] lg:flex-row lg:items-center lg:justify-center lg:py-[41px]"
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
            :src="MAIN_CONTENT_WIDTH < 1200 ? Logo2 : Logo1"
            alt="logo"
          />
        </router-link>
      </div>
      <div class="sm:w-full w-full flex flex-col lg:w-[650px] lg:flex-row">
        <div
          v-for="item in NavData"
          :key="item.id"
          class="mt-[15px] w-full flex items-center lg:mt-0 lg:h-[22px] lg:min-w-[86px] lg:items-center lg:justify-center"
        >
          <div
            v-if="MAIN_CONTENT_WIDTH < 1200"
            class="h-[12px] w-[1px] bg-[#fff] bg-opacity-20"
          ></div>
          <div
            class="mx-[10px] lg:(mx-[20px] w-full flex justify-center text-[15px] text-[#fff])"
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
          <div class="h-[12px] w-[1px] bg-[#fff] bg-opacity-20"></div>
        </div>
        <div
          v-if="MAIN_CONTENT_WIDTH > 1200"
          class="h-[12px] w-[1px] bg-[#fff] bg-opacity-20"
        ></div>
      </div>
      <div
        class="mt-[15px] h-[22px] text-[.75rem] font-[400] not-italic text-[#fff] lg:(mt-0 w-[350px] text-right text-[.9rem])"
      >
        Copyright © BigHandz Co.Ltd. All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import Logo1 from '@/assets/images/logo.png'
import Logo2 from '@/assets/images/Header-Mobile/logo.svg'

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
