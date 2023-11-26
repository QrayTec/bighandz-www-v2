<template>
  <div class="w-full">
    <sub-page-title :data="SubPageTitleData" />
    <div class="my-[120px] w-full flex items-center justify-center">
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SubPageTitleType } from '@/data/pages_interface'
import PrivacyPolicy from '@/assets/images/sub_page_title/privacy-policy.jpg'
import Content from './components/Content.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: '個人情報保護方針',
  TitleCn_2: '',
  TitleEn: 'Privacy Policy',
  ImgSrc: PrivacyPolicy,
  bold: 1,
  type: 2
})
</script>

<style></style>
