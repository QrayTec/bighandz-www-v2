<template>
  <div class="w-full">
    <SubPageTitleBg :data="SubPageTitleData" />
    <div class="my-[120px] w-full flex flex-col items-center justify-center">
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SubPageTitleType } from '@/data/pages_interface'
import ContactUs from '@/assets/images/sub_page_title/Contact-Us.jpg'
import Content from './components/Content.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'お問い合わせ',
  TitleCn_2: '',
  TitleEn: 'contact us',
  ImgSrc: ContactUs
})
</script>

<style></style>
