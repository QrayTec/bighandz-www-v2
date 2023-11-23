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
      <SolutionItem />
      <AICases class="mt-[120px]" />
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
import DataSolution from '@/assets/images/sub_page_title/Data-Solution.png'
import SolutionItem from './components/solution-item.vue'
import AICases from './components/AI-Cases.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'データ',
  TitleCn_2: 'ソリューション',
  TitleEn: 'data solution',
  ImgSrc: DataSolution,
  bold: 1,
  type: 1
})

const PageNavData = ref<PageNavType[]>([
  { id: 1, anchor: '#AI-Innovation-Business', anchor_title: 'AI革新ビジネス' },
  {
    id: 2,
    anchor: '#Technological-Evolution&Value-Addition',
    anchor_title: '技術進化と付加価値'
  },
  { id: 3, anchor: '#AI-Quality&Efficiency', anchor_title: 'AI品質・効率化' },
  { id: 3, anchor: '#AI-Business&Development', anchor_title: 'AIビジネス展開' },
  { id: 3, anchor: '#AI-Cases', anchor_title: 'AI事例' }
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
