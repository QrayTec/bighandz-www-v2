<template>
  <div class="w-full">
    <div class="message_from_president_main">
      <SubPageTitle_2 :data="SubPageTitleData" />
    </div>
    <div
      ref="navSticky"
      class="page_nav_sticky"
      :class="{ shrink: isSticky }"
    >
      <ThePageNav2 :pagenavdata="PageNavData" />
    </div>
    <div class="my-[7.5rem] w-full flex flex-col items-center">
      <ToGraduates />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import methods from '@/data/methods'
import GraduateRecruitment from '@/assets/images/sub_page_title/graduate-recruitment.png'

import { SubPageTitleType2, PageNavType } from '@/data/pages_interface'

import ToGraduates from './components/To-Graduates.vue'

const SubPageTitleData = ref<SubPageTitleType2>({
  TitleCn_1: '他人に勝ちたい',
  TitleCn_2: 'まずは自分に勝つ',
  ImgSrc: GraduateRecruitment
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
