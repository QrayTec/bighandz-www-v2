<template>
  <div class="w-full">
    <div class="message_from_president_main">
      <SubPageTitle_3 :data="SubPageTitleData" />
    </div>
    <div
      ref="navSticky"
      class="page_nav_sticky"
      :class="{ shrink: isSticky }"
    >
      <ThePageNav2 :pagenavdata="PageNavData" />
    </div>
    <div class="relative h-auto bg-[#F4F4F4]">
      <div class="absolute z-[1] h-full w-[504px] bg-[#DFE4F2]"></div>
      <div class="relative z-2 w-full flex flex-col items-center">
        <InexperiencedPerson class="mt-[120px] pb-[120px]" />
        <ExperiencedPerson class="pb-[120px]" />
        <DownloadTemplate class="pb-[120px]" />
        <div class="mt-[120px]"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import methods from '@/data/methods'
import SocialRecruitment from '@/assets/images/sub_page_title/social-recruitment.png'

import { SubPageTitleType2, PageNavType } from '@/data/pages_interface'

import InexperiencedPerson from './components/InexperiencedPerson.vue'
import ExperiencedPerson from './components/ExperiencedPerson.vue'
import DownloadTemplate from './components/Download-Template.vue'

const SubPageTitleData = ref<SubPageTitleType2>({
  TitleCn_1: '知恵は大義を照らし',
  TitleCn_2: '魂は世界を気遣う',
  ImgSrc: SocialRecruitment
})

const PageNavData = ref<PageNavType[]>([
  {
    id: 1,
    anchor: '#InexperiencedPerson',
    anchor_title: '未経験者'
  },
  {
    id: 2,
    anchor: '#ExperiencedPerson',
    anchor_title: '経験者'
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
