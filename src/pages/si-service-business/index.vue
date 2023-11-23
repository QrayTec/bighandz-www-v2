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
    <div class="my-[120px] w-full flex flex-col items-center justify-center">
      <AdvancedSIServices />
      <IndustryDev class="mt-[120px]" />
      <IndustryExperience class="mt-[120px]" />
      <ExamplesAchievements class="mt-[120px]" />
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
import AdvancedSIServices from './components/Advanced-SI-Services.vue'
import SiServiceBusiness from '@/assets/images/sub_page_title/Si_Service_Business.png'
import IndustryDev from './components/Industry-Dev.vue'
import IndustryExperience from './components/Industry-Experience.vue'
import ExamplesAchievements from './components/Examples-Achievements.vue'
import PublicationsImage from '@/assets/images/Publications/Publications_1.png'

const SolutionData = ref<SolutionType>({
  title: 'オフショアリング完全ガイド',
  Image: PublicationsImage,
  content: [
    { list: '出版社 :  日経BP (2004/10/23)' },
    { list: '呉勇 主筆（中国担当）' },
    {
      list: '中国・インドのソフト開発事情は、カギを握る「ブリッジSE」とは、なぜコスト削減は一筋縄ではいかないのか。苦労を重ねた先進エンジニアたちが経験と失敗事例を基に、日本からのオフショア開発の問題点と対策を語る国内初の書。'
    }
  ]
})

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'SIサービス',
  TitleCn_2: '事業',
  TitleEn: 'Si service business',
  ImgSrc: SiServiceBusiness,
  bold: 1,
  type: 1
})

const PageNavData = ref<PageNavType[]>([
  { id: 1, anchor: '#SiServiceBusiness', anchor_title: '先進SIサービス' },
  { id: 2, anchor: '#IndustryDev', anchor_title: '業界の実績と開発言語' },
  {
    id: 3,
    anchor: '#Industry&Experience',
    anchor_title: '様々な業界と技術経験'
  },
  {
    id: 4,
    anchor: '#ExamplesAchievements',
    anchor_title: '開発実績一例'
  },
  {
    id: 5,
    anchor: '#Publications',
    anchor_title: '出版物'
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
