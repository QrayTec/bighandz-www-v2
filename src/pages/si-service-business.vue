<template>
  <div class="page">
    <TheHeader
      class="Header"
      :checked="2"
    />
    <div class="message_from_president_main">
      <sub-page-title :data="SubPageTitleData" />
    </div>
    <div
      ref="navSticky"
      class="page_nav_sticky"
      :class="{ shrink: isSticky }"
    >
      <the-page-nav :pagenavdata="PageNavData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { SubPageTitleType, PageNavType } from '@/data/pages_interface'
import SiServiceBusiness from '@/assets/images/sub_page_title/Si_Service_Business.png'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'Siサービス · ',
  TitleCn_2: '事業',
  TitleEn: 'Si service business',
  ImgSrc: SiServiceBusiness,
  bold: 1
})

const PageNavData = ref<PageNavType[]>([
  { id: 1, anchor: '#Technology', anchor_title: 'システム開発' },
  { id: 2, anchor: '#Management', anchor_title: 'システム運用保守' },
  { id: 3, anchor: '#Plans&Equipment', anchor_title: '日中ソリューション' }
])
</script>

<style></style>
