<template>
  <div class="w-full">
    <div class="message_from_president_main">
      <SubPageTitleBg :data="SubPageTitleData" />
    </div>
    <the-page-nav
      :pagenavdata="PageNavData"
      :pagenavstyletype="pagetype"
    />
    <div class="my-[120px] w-full flex flex-col items-center">
      <Introduce id="Introduce" />
      <AIApplicationArea
        id="AIApplicationArea"
        class="mt-[120px]"
      />

      <AICase class="mt-[60px]" />
      <AnalyticsTransformationServices class="mt-[120px]" />
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
import DataSolution from '@/assets/images/sub_page_title/Data-Solution_1.jpg'
import PublicationsImage from '@/assets/images/Publications/Publications_2.png'

import Introduce from './components/Introduce.vue'
import AICase from './components/AI-Case.vue'
import AnalyticsTransformationServices from './components/Analytics-Transformation-Services.vue'
import AIApplicationArea from './components/AI-Application-Area.vue'

const SolutionData = ref<SolutionType>({
  title: 'ニューラルコンピュータ ',
  title_2: '—統計物理学からのアプローチ',
  Image: PublicationsImage,
  content: [
    {
      list: 'J. ハーツ (著), R.G. パルマー (著), A. クロー (著),',
      list_2: ' 呉 勇 (翻訳),  笹川 辰弥 (翻訳)'
    },
    { list: '出版社 :トッパン (1994/5/1)' },
    {
      list: '神経細胞の構造にヒントを得て考え出されたのが、神経回路網的な計算を行うニューラルコンピュータである。その計算理論の入門書である)'
    }
  ]
})
const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'データ',
  TitleCn_2: 'ソリューション',
  TitleEn: 'data solution',
  ImgSrc: DataSolution
})

const PageNavData = ref<PageNavType[]>([
  { id: 1, anchor: '#Introduce', anchor_title: 'AIビジネス展開' },
  { id: 2, anchor: '#AIApplicationArea', anchor_title: 'AIの産業活用領域' },
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
