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
      <div class="absolute z-[1] h-full w-[504px] bg-[#DFE4F2]"></div>
      <div class="relative z-2 w-full flex flex-col items-center">
        <FAQItems class="my-[120px]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import methods from '@/data/methods'
import { SubPageTitleType, PageNavType } from '@/data/pages_interface'
import FAQ from '@/assets/images/sub_page_title/FAQ.png'
import FAQItems from './components/FAQ-items.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'FAQ',
  TitleCn_2: 'よくあるご質問',
  TitleEn: 'FAQ Frequently Asked Questions',
  ImgSrc: FAQ
})

const PageNavData = ref<PageNavType[]>([
  { id: 1, anchor: '#STEP１', anchor_title: 'STEP１' }
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

<style scoped></style>
