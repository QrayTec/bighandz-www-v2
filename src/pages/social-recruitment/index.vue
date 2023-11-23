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
      <ToNewGraduates />
      <OpenPositions class="mt-[120px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import methods from '@/data/methods'
import CareerRecruitment from '@/assets/images/sub_page_title/Career-Recruitment.jpg'

import {
  SubPageTitleType,
  PageNavType,
  PageNavStyleType
} from '@/data/pages_interface'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'キャリア採用',
  TitleCn_2: '',
  TitleEn: 'Career Recruitment',
  ImgSrc: CareerRecruitment,
  bold: 1,
  type: 2
})

const PageNavData = ref<PageNavType[]>([
  {
    id: 1,
    anchor: '#ToNewGraduates',
    anchor_title: '新卒の皆さんへ'
  },
  {
    id: 2,
    anchor: '#OpenPositions',
    anchor_title: '募集職種'
  },
  {
    id: 3,
    anchor: '#Subject-application',
    anchor_title: '募集学部・学科'
  },
  {
    id: 4,
    anchor: '#Accepted-Faculties',
    anchor_title: '物流全般管理'
  },
  {
    id: 5,
    anchor: '#Salary&Benefits',
    anchor_title: '給与と福利厚生'
  },
  {
    id: 6,
    anchor: '#Work-related',
    anchor_title: '仕事関連'
  },
  {
    id: 7,
    anchor: '#PersonnelSystem',
    anchor_title: '人事制度'
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
