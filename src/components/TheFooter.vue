<template>
  <div class="footer-main">
    <div class="footer-content">
      <div class="footer_logo">
        <router-link to="/">
          <img
            src="/src/assets/images/logo.svg"
            alt="logo"
        /></router-link>
      </div>
      <div class="footer_nav">
        <div
          v-for="item in NavData"
          :key="item.id"
          class="footer_NavLink"
        >
          <div class="footer_NavLink_line"></div>
          <div class="footer_Link">
            <router-link :to="item.href">{{ item.title }}</router-link>
          </div>
        </div>
        <div class="footer_NavLink_line"></div>
      </div>
      <div class="footer_title">
        Copyright © BigHandz Co.Ltd. All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FooterNavData {
  id: number
  title: string
  href: string
}

const NavData = ref<FooterNavData[]>([
  { id: 1, title: 'ホーム', href: '/' },
  { id: 1, title: 'プライバシーポリシー', href: '/' },
  { id: 1, title: '個人情報の取扱いについて', href: '/' }
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
