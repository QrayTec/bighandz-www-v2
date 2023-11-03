<template>
  <div class="page">
    <TheHeader
      class="Header"
      :checked="2"
    />
    <div class="message_from_president_main">
      <sub-page-title :data="SubPageTitleData" />
    </div>
    <div
      ref="navSticky"
      class="page_nav_sticky"
      :class="{ shrink: isSticky }"
    >
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
import { onMounted, onUnmounted, ref } from 'vue'
import HealthcareBusiness from '@/assets/images/sub_page_title/Healthcare_Business.png'

interface SubPageTitleType {
  TitleCn_1: string
  TitleCn_2: string
  TitleEn: string
  ImgSrc: string
  bold: number
}
interface PageNavType {
  id: number
  anchor: string
  anchor_title: string
}
const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'ヘルスケア',
  TitleCn_2: ' · 事業',
  TitleEn: 'Healthcare business',
  ImgSrc: HealthcareBusiness,
  bold: 1
})

const PageNavData = ref<PageNavType[]>([
  { id: 1, anchor: '#Technology', anchor_title: 'リハビリテーション技術' },
  { id: 2, anchor: '#Management', anchor_title: 'リハビリテーション管理' },
  { id: 3, anchor: '#Plans&Equipment', anchor_title: 'リハビリプランと器具' },
  { id: 4, anchor: '#Nursing', anchor_title: 'リハビリテーション看護' },
  { id: 5, anchor: '#Brand', anchor_title: 'ブランドの紹介' }
])

const isSticky = ref(false)
const navSticky = ref<HTMLElement>()
// Function to handle scroll event
const handleScroll = () => {
  const distanceFromTop = navSticky.value?.getBoundingClientRect().top

  if (distanceFromTop !== undefined && distanceFromTop === 76) {
    isSticky.value = true
  } else {
    isSticky.value = false
  }
}

// Register scroll event listener when component is mounted
onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

// Remove scroll event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.m_b_240 {
  margin-bottom: 240px;
}
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
.page_nav_sticky {
  position: sticky;
  height: 140px;
  top: 76px;
  left: 0;
  z-index: 5;
  transition: height 0.3s; /* 添加过渡效果 */
}
.shrink {
  height: 72px; /* 修改高度为 100px */
}

@media screen and (max-width: 1299px) {
  .healthcare_business_box {
    width: 80%;
  }
  .page_nav_sticky {
    height: auto;
  }
  .shrink {
    height: auto;
  }
}
</style>
