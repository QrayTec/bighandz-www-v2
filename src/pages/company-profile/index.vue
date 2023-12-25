<template>
  <div class="w-full">
    <div class="w-full flex justify-center">
      <SubPageTitleBg :data="SubPageTitleData" />
    </div>
    <div class="w-full flex flex-col items-center">
      <CompanyProfileContent class="my-[60px] lg:my-[120px]" />
      <!-- <CompanyHistory /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SubPageTitleType } from '@/data/pages_interface'
import CompanyProfile from '@/assets/images/sub_page_title/Company_Profile_1.jpg'
// import CompanyHistory from './components/CompanyHistory.vue'
import CompanyProfileContent from './components/CompanyProfileContent.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: '会社',
  TitleCn_2: '概要',
  TitleEn: 'Company Profile',
  ImgSrc: CompanyProfile
})
</script>

<style>
ul li {
  list-style-type: none;
}
hr {
  color: #dfe4f2;
}
</style>
