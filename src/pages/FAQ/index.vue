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

    <div class="page_center">
      <div class="occupy"></div>
      <FAQItems />
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
import FAQ from '@/assets/images/sub_page_title/FAQ.png'
import FAQItems from './components/FAQ-items.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'FAQ · ',
  TitleCn_2: 'よくあるご質問',
  TitleEn: 'FAQ Frequently Asked Questions',
  ImgSrc: FAQ,
  bold: 1,
  type: 2
})

const PageNavData = ref<PageNavType[]>([
  { id: 1, anchor: '#Part1', anchor_title: 'Part１' }
])

const pagetype = ref<PageNavStyleType>({ type: 2 })

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
