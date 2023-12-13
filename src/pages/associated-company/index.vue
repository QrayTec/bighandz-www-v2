<template>
  <div class="w-full">
    <SubPageTitleBg :data="SubPageTitleData" />
    <div class="my-[120px] flex justify-center">
      <CompanyInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SubPageTitleType } from '@/data/pages_interface'
import AssociatedCompany from '@/assets/images/sub_page_title/associated-company_1.jpg'
import CompanyInfo from './components/company-info.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: '関連',
  TitleCn_2: '会社',
  TitleEn: 'Associated Company',
  ImgSrc: AssociatedCompany
})
</script>

<style></style>
