<template>
  <div class="w-full">
    <SubPageTitleBg :data="SubPageTitleData" />
    <the-page-nav
      :pagenavdata="PageNavData"
      :pagenavstyletype="pagetype"
    />
    <div class="mb-[120px] w-full flex flex-col items-center justify-center">
      <HealthcareBusinessItem />
      <!-- <Brand /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import {
  SubPageTitleType,
  PageNavType,
  PageNavStyleType
} from '@/data/pages_interface'
import methods from '@/data/methods'
import HealthcareBusiness from '@/assets/images/sub_page_title/Healthcare_Business_1.jpg'
import HealthcareBusinessItem from './components/HealthcareBusinessItem.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'ヘルスケア',
  TitleCn_2: '事業',
  TitleEn: 'Healthcare business',
  ImgSrc: HealthcareBusiness
})

const PageNavData = ref<PageNavType[]>([
  {
    id: 1,
    anchor: '#Technology',
    anchor_title: '運営とコンサルティング  '
  },
  { id: 2, anchor: '#Management', anchor_title: '人材育成と紹介' },
  {
    id: 3,
    anchor: '#Plans&Equipment',
    anchor_title: '介護・リハビリ機器'
  },
  { id: 4, anchor: '#Nursing', anchor_title: '医療ツーリズム' }
  // { id: 5, anchor: '#Brand', anchor_title: 'ブランドの紹介' }
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

<style>
.page {
  width: 100%;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.Header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
}
.message_from_president_main {
  flex-direction: column;
}
.healthcare_business {
  width: 100%;
  display: flex;
  justify-content: center;
}
.healthcare_business_box {
  width: 1200px;
}

@media screen and (max-width: 1299px) {
  .healthcare_business_box {
    width: 80%;
  }

  .shrink {
    height: auto;
  }
}
</style>
@/data/methods
