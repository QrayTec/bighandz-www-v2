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
      <Introduce />
      <DevResults class="mt-[120px]" />
      <Operations class="mt-[120px]" />
      <InfrastructureBusiness class="mt-[120px]" />
      <VirtualizationEngineer class="mt-[120px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import methods from '@/data/methods'
import {
  SubPageTitleType,
  PageNavType,
  PageNavStyleType
} from '@/data/pages_interface'
import DataSolution from '@/assets/images/sub_page_title/infrastructure-business.png'

import Introduce from './components/Introduce.vue'
import DevResults from './components/Dev-Results.vue'
import Operations from './components/Operations.vue'
import InfrastructureBusiness from './components/Infrastructure-Business.vue'
import VirtualizationEngineer from './components/Virtualization-Engineer.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'インフラ',
  TitleCn_2: '事業',
  TitleEn: 'infrastructure business',
  ImgSrc: DataSolution
})

const PageNavData = ref<PageNavType[]>([
  {
    id: 1,
    anchor: '#Dev-RESULTS',
    anchor_title: 'インフラ開発実績'
  },
  {
    id: 2,
    anchor: '#Infrastructure-Business',
    anchor_title: 'インフラ事業内容'
  },
  {
    id: 3,
    anchor: '#VirtualizationEngineers',
    anchor_title: '仮想化技術者が多数在籍'
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
