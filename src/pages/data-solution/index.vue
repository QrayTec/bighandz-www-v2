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
      <LLMApplications class="mt-[120px]" />
      <AIAssemblerConversion class="mt-[120px]" />
      <Publications
        :publications="SolutionData"
        class="mt-[120px]"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import methods from '@/data/methods'
import {
  SubPageTitleType,
  PageNavType,
  PageNavStyleType,
  SolutionType
} from '@/data/pages_interface'
import DataSolution from '@/assets/images/sub_page_title/Data-Solution.png'
import SolutionItem from './components/solution-item.vue'
import AICases from './components/AI-Cases.vue'
import LLMApplications from './components/LLM-Applications.vue'
import AIAssemblerConversion from './components/AI-Assembler-Conversion.vue'
import PublicationsImage from '@/assets/images/Publications/Publications_2.png'

const SolutionData = ref<SolutionType>({
  title: 'ニューラルコンピュータ―統計物理学からのアプローチ ',
  Image: PublicationsImage,
  content: [
    { list: '出版社 :トッパン (1994/5/1)' },
    {
      list: 'J. ハーツ (著), R.G. パルマー (著), A. クロー (著), 呉 勇 (翻訳),  笹川 辰弥 (翻訳)'
    },
    {
      list: '神経細胞の構造にヒントを得て考え出されたのが、神経回路網的な計算を行うニューラルコンピュータである。その計算理論の入門書である)'
    }
  ]
})
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
  { id: 4, anchor: '#AI-Business&Development', anchor_title: 'AIビジネス展開' },
  { id: 5, anchor: '#AI-Cases', anchor_title: 'AI事例' },

  { id: 8, anchor: '#Publications', anchor_title: '出版物' }
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
