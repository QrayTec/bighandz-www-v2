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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import methods from '@/data/methods'
import AdvancedSIServices from './components/Advanced-SI-Services.vue'
import {
  SubPageTitleType,
  PageNavType,
  PageNavStyleType
} from '@/data/pages_interface'
import SiServiceBusiness from '@/assets/images/sub_page_title/Si_Service_Business.png'
import IndustryDev from './components/Industry-Dev.vue'
import IndustryExperience from './components/Industry-Experience.vue'
import ExamplesAchievements from './components/Examples-Achievements.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'Siサービス',
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
