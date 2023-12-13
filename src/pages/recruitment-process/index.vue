<template>
  <div class="w-full">
    <div class="message_from_president_main">
      <SubPageTitle-Bg :data="SubPageTitleData" />
    </div>
    <div
      ref="navSticky"
      class="page_nav_sticky"
      :class="{ shrink: isSticky }"
    >
      <ThePageNav :pagenavdata="PageNavData" />
    </div>

    <div class="relative h-auto bg-[#F4F4F4]">
      <div class="absolute z-[1] h-full w-[full] bg-[#DFE4F2]"></div>
      <div class="relative z-2 w-full flex flex-col items-center">
        <RecruitmentItem />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import methods from '@/data/methods'

import RecruitmentItem from './components/recruitment-item.vue'

import { SubPageTitleType, PageNavType } from '@/data/pages_interface'
import RecruitmentProcess from '@/assets/images/sub_page_title/recruitment-process.png'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: '採用の',
  TitleCn_2: '流れ',
  TitleEn: 'Recruitment process',
  ImgSrc: RecruitmentProcess
})

const PageNavData: PageNavType[] = [
  { id: 1, anchor: '#STEP1', anchor_title: 'STEP1' },
  { id: 2, anchor: '#STEP2', anchor_title: 'STEP2' },
  { id: 3, anchor: '#STEP3', anchor_title: 'STEP3' },
  { id: 4, anchor: '#STEP4', anchor_title: 'STEP4' }
]

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

<style scoped></style>
@/data/methods
