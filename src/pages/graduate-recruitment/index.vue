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
    <div class="relative h-auto">
      <div class="absolute z-[-1] h-full w-[504px] bg-[#DFE4F2]"></div>
      <div class="z-1 w-full flex flex-col items-center">
        <ToGraduates class="mt-[120px] pb-[120px]" />
        <OpenPositions class="pb-[120px]" />
        <SubjectApplication class="pb-[120px]" />
        <RecruitingSubjects class="pb-[120px]" />
        <Salary class="pb-[120px]" />
        <Welfare class="pb-[120px]" />
        <WorkPlace class="pb-[120px]" />
        <WorkTimer class="pb-[120px]" />
        <TrialPeriod class="pb-[120px]" />
        <HolidaysVacation class="pb-[120px]" />
        <PersonnelSystem class="pb-[120px]" />
        <div class="mt-[120px]"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import methods from '@/data/methods'
import GraduateRecruitment from '@/assets/images/sub_page_title/graduate-recruitment.png'

import { SubPageTitleType2, PageNavType } from '@/data/pages_interface'

import ToGraduates from './components/To-Graduates.vue'
import OpenPositions from './components/Open-Positions.vue'
import SubjectApplication from './components/Subject-application.vue'
import RecruitingSubjects from './components/Recruiting-Subjects.vue'
import Salary from './components/Salary.vue'
import Welfare from './components/Welfare.vue'
import WorkPlace from './components/Work-Place.vue'
import WorkTimer from './components/Work-Timer.vue'
import TrialPeriod from './components/Trial-Period.vue'
import HolidaysVacation from './components/Holidays-Vacation.vue'
import PersonnelSystem from './components/Personnel-System.vue'

const SubPageTitleData = ref<SubPageTitleType2>({
  TitleCn_1: '他人に勝ちたい',
  TitleCn_2: 'まずは自分に勝つ',
  ImgSrc: GraduateRecruitment
})

const PageNavData = ref<PageNavType[]>([
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
