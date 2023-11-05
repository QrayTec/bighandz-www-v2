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
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import handleScroll from '@/data/PageNav'
import { SubPageTitleType, PageNavType } from '@/data/pages_interface'
import LogisticsBusiness from '@/assets/images/sub_page_title/Logistics-Business.png'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: '物流 · ',
  TitleCn_2: '事業',
  TitleEn: 'Logistics business',
  ImgSrc: LogisticsBusiness,
  bold: 1
})

const PageNavData = ref<PageNavType[]>([
  { id: 1, anchor: '#Technology', anchor_title: '物流DXプラットフォーム' },
  {
    id: 2,
    anchor: '#Management',
    anchor_title: '物流マネージメントフルラインナップ'
  },
  { id: 3, anchor: '#Plans&Equipment', anchor_title: 'AIによる配送最適化' }
])

// 检测是否吸顶 修改高度
const isSticky = ref(false)
const navSticky = ref<HTMLElement>()

const localSticky = handleScroll({ isSticky, navSticky })

onMounted(() => {
  localSticky()
  window.addEventListener('scroll', localSticky)
})

onUnmounted(() => {
  window.removeEventListener('scroll', localSticky)
})
</script>

<style></style>
