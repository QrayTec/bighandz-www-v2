<template>
  <div class="w-full">
    <sub-page-title :data="SubPageTitleData" />
    <div class="my-[120px] flex justify-center">
      <CompanyInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SubPageTitleType } from '@/data/pages_interface'
import AssociatedCompany from '@/assets/images/sub_page_title/associated-company.png'
import CompanyInfo from './components/company-info.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: '関連',
  TitleCn_2: '会社',
  TitleEn: 'Associated Company',
  ImgSrc: AssociatedCompany,
  bold: 1,
  type: 1
})
</script>

<style></style>
