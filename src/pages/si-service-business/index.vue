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
      <the-page-nav
        :pagenavdata="PageNavData"
        :pagenavstyletype="pagetype"
      />
    </div>
    <div class="my-[120px] w-full flex flex-col items-center justify-center">
      <AdvancedSIServices />
      <SystemDev class="mt-[120px]" />
      <SystemMaintenance class="mt-[120px]" />
      <EPR class="mt-[120px]" />
      <LatestTechnology class="mt-[120px]" />
      <IndustryDev class="mt-[120px]" />
      <IndustryExperience class="mt-[120px]" />
      <ExamplesAchievements class="mt-[120px]" />
      <AutomatedTestingTools class="my-[120px]" />
      <PlatformsConfig />
      <UseTest />
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
import SiServiceBusiness from '@/assets/images/sub_page_title/Si_Service_Business_1.jpg'
import IndustryDev from './components/Industry-Dev.vue'
import IndustryExperience from './components/Industry-Experience.vue'
import ExamplesAchievements from './components/Examples-Achievements.vue'
import AutomatedTestingTools from './components/Automated-Testing-Tools.vue'
import PublicationsImage from '@/assets/images/Publications/Publications_1.png'
import SystemDev from './components/System-Dev.vue'
import PlatformsConfig from './components/Platforms-Config.vue'
import LatestTechnology from './components/Latest-Technology.vue'
import SystemMaintenance from './components/System-Maintenance.vue'
import UseTest from './components/Use-Test.vue'
import EPR from './components/EPR.vue'

const SolutionData = ref<SolutionType>({
  title: 'オフショアリング完全ガイド',
  Image: PublicationsImage,
  content: [
    { list: '呉勇 主筆（中国担当）' },
    { list: '出版社 :  日経BP (2004/10/23)' },
    {
      list: '中国・インドのソフト開発事情は、カギを握る「ブリッジSE」とは、なぜコスト削減は一筋縄ではいかないのか。苦労を重ねた先進エンジニアたちが経験と失敗事例を基に、日本からのオフショア開発の問題点と対策を語る国内初の書。'
    }
  ]
})

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'SIサービス',
  TitleCn_2: '事業',
  TitleEn: 'Si service business',
  ImgSrc: SiServiceBusiness
})

const PageNavData = ref<PageNavType[]>([
  { id: 1, anchor: '#SiServiceBusiness', anchor_title: '先進SIサービス' },
  {
    id: 2,
    anchor: '#System-Development',
    anchor_title: 'システム開発の最新技術'
  },
  { id: 2, anchor: '#IndustryDev', anchor_title: '業界の実績と開発言語' },

  {
    id: 5,
    anchor: '#AutomatedTestingTools',
    anchor_title: '携帯アプリテスト自動化ツール'
  },
  {
    id: 6,
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
