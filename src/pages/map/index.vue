<template>
  <div class="w-full">
    <div class="message_from_president_main">
      <SubPageTitleBg :data="SubPageTitleData" />
    </div>
    <div
      ref="navSticky"
      class="page_nav_sticky"
      :class="{ shrink: isSticky }"
    >
      <the-page-nav :pagenavdata="PageNavData" />
    </div>
    <div class="my-[120px] w-full flex flex-col items-center justify-center">
      <CompanyInfo />
      <PublicTransit class="mt-[120px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import methods from '@/data/methods'
import { SubPageTitleType, PageNavType } from '@/data/pages_interface'

import MapPageHeaderImage from '@/assets/images/sub_page_title/Map_1.jpg'

import CompanyInfo from './components/Company-Info.vue'
import PublicTransit from './components/Public-Transit.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'アクセス',
  TitleCn_2: '',
  TitleEn: 'Access',
  ImgSrc: MapPageHeaderImage
})

const PageNavData = ref<PageNavType[]>([
  { id: 1, anchor: '#TrainTravel', anchor_title: '電車で行く' },
  { id: 2, anchor: '#BusTravel', anchor_title: 'バスで行く' },
  {
    id: 3,
    anchor: '#ShuttleBus',
    anchor_title: '「東京ダイヤビルディング」無料シャトルバス運行ルート'
  }
])

// 检测是否吸顶 修改高度
const isSticky = ref(false)
const navSticky = ref<HTMLElement>()

const localSticky = methods.handleScroll({ isSticky, navSticky })

onMounted(() => {
  localSticky()
  window.addEventListener('scroll', localSticky)
})

onUnmounted(() => {
  window.removeEventListener('scroll', localSticky)
})
</script>

<style></style>
