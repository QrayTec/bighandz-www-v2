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
    <div class="my-[120px] w-full flex flex-col items-center">
      <LogisticsChallenges />
      <LogisticsPromotion class="mt-[120px]" />
      <LogisticsPlatform class="mt-[120px]" />
      <LogisticsManagement class="mt-[120px]" />
      <AIOptimization class="mt-[120px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import methods from '@/data/methods'

import LogisticsBusiness from '@/assets/images/sub_page_title/Logistics-Business.png'
import {
  SubPageTitleType,
  PageNavType,
  PageNavStyleType
} from '@/data/pages_interface'

import LogisticsChallenges from './components/Logistics-Challenges.vue'
import LogisticsPromotion from './components/Logistics-Promotion.vue'
import LogisticsPlatform from './components/Logistics-Platform.vue'
import LogisticsManagement from './components/Logistics-Management.vue'
import AIOptimization from './components/AI-Optimization.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: '物流',
  TitleCn_2: '事業',
  TitleEn: 'Logistics business',
  ImgSrc: LogisticsBusiness
})

const PageNavData = ref<PageNavType[]>([
  {
    id: 1,
    anchor: '#LogisticsChallenges',
    anchor_title: '物流業界が直面する課題'
  },
  {
    id: 2,
    anchor: '#LogisticsDXPromotion',
    anchor_title: '物流DX推進'
  },
  {
    id: 3,
    anchor: '#LogisticsDXPlatform',
    anchor_title: '物流DXプラットフォーム'
  },
  {
    id: 4,
    anchor: '#LogisticsManagement',
    anchor_title: '物流全般管理'
  },
  {
    id: 5,
    anchor: '#AiDelivery',
    anchor_title: 'AIによる配送最適化'
  }
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
