<template>
  <div class="w-full">
    <div class="message_from_president_main">
      <sub-page-title :data="SubPageTitleData" />
    </div>
    <div
      ref="navSticky"
      class="page_nav_sticky"
      :class="{ shrink: isSticky }"
    >
      <the-page-nav
        :pagenavdata="PageNavData"
        :pagenavstyletype="pagetype"
      />
    </div>
    <div>123</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import methods from '@/data/methods'
import {
  SubPageTitleType,
  PageNavType,
  PageNavStyleType
} from '@/data/pages_interface'
import LogisticsBusiness from '@/assets/images/sub_page_title/Logistics-Business.png'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: '物流 · ',
  TitleCn_2: '事業',
  TitleEn: 'Logistics business',
  ImgSrc: LogisticsBusiness,
  bold: 1,
  type: 1
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
const pagetype = ref<PageNavStyleType>({ type: 1 })

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
@/data/methods
