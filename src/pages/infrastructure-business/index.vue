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
      <CloudEnhancementStrategy />
      <operational class="mt-[60px]" />
    </div>
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
import DataSolution from '@/assets/images/sub_page_title/infrastructure-business.png'
import CloudEnhancementStrategy from './components/Cloud-Enhancement-Strategy.vue'
import operational from './components/operational-efficiency-improvement.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'インフラ',
  TitleCn_2: '事業',
  TitleEn: 'infrastructure business',
  ImgSrc: DataSolution,
  bold: 1,
  type: 1
})

const PageNavData = ref<PageNavType[]>([
  {
    id: 1,
    anchor: '#Cloud-Enhancement-Strategy',
    anchor_title: 'クラウド強化戦略'
  },
  {
    id: 2,
    anchor: '#operational-efficiency-improvement',
    anchor_title: '運用効率向上'
  },
  {
    id: 3,
    anchor: '#Plans&Supported-Areas-Skill-Sets',
    anchor_title: '対応領域とスキルセット'
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
