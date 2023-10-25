<template>
  <div class="page">
    <TheHeader
      class="Header"
      :checked="2"
    />
    <div class="message_from_president_main">
      <sub-page-title :data="SubPageTitleData" />
      <the-page-nav :pagenavdata="PageNavData" />
    </div>
    <div class="healthcare_business m_b_240">
      <div class="healthcare_business_box">
        <healthcare-business-item />
        <Brand />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface SubPageTitleType {
  TitleCn: string
  TitleEn: string
  ImgSrc: string
}
interface PageNavType {
  id: number
  anchor: string
  anchor_title: string
}
const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn: 'ヘルスケア · 事業',
  TitleEn: 'Healthcare business',
  ImgSrc: 'Healthcare_Business'
})

const PageNavData = ref<PageNavType[]>([
  { id: 1, anchor: '#Technology', anchor_title: 'リハビリテーション技術' },
  { id: 2, anchor: '#Management', anchor_title: 'リハビリテーション管理' },
  { id: 3, anchor: '#Plans&Equipment', anchor_title: 'リハビリプランと器具' },
  { id: 4, anchor: '#Nursing', anchor_title: 'リハビリテーション看護' },
  { id: 5, anchor: '#Brand', anchor_title: 'ブランドの紹介' }
])
</script>

<style scoped>
.page {
  width: 100%;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.Header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
}
.message_from_president_main {
  flex-direction: column;
}
.healthcare_business {
  width: 100%;
  display: flex;
  justify-content: center;
}
.healthcare_business_box {
  width: 1200px;
}
.m_b_240 {
  margin-bottom: 240px;
}
@media screen and (max-width: 1299px) {
  .healthcare_business_box {
    width: 80%;
  }
}
</style>
