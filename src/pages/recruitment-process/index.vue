<template>
  <div class="page">
    <TheHeader
      class="Header"
      :checked="3"
    />
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

    <div class="page_center">
      <div class="occupy"></div>
      <RecruitmentItem />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import handleScroll from '@/data/PageNav'

import RecruitmentItem from './components/recruitment-item.vue'

import {
  SubPageTitleType,
  PageNavType,
  PageNavStyleType
} from '@/data/pages_interface'
import RecruitmentProcess from '@/assets/images/sub_page_title/recruitment-process.png'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: '採用の · ',
  TitleCn_2: '流れ',
  TitleEn: 'Recruitment process',
  ImgSrc: RecruitmentProcess,
  bold: 1,
  type: 2
})

const PageNavData: PageNavType[] = [
  { id: 1, anchor: '#STEP1', anchor_title: 'STEP1' },
  { id: 2, anchor: '#STEP2', anchor_title: 'STEP2' },
  { id: 3, anchor: '#STEP3', anchor_title: 'STEP3' },
  { id: 4, anchor: '#STEP4', anchor_title: 'STEP4' }
]

const pagetype = ref<PageNavStyleType>({ type: 2 })

// 检测是否吸顶 修改高度
const isSticky = ref(false)
const navSticky = ref<HTMLElement>()

const localSticky = handleScroll({ isSticky, navSticky })

onMounted(() => {
  localSticky()
  window.addEventListener('scroll', localSticky)
})

onUnmounted(() => {
  window.removeEventListener('scroll', localSticky)
})
</script>

<style scoped></style>
