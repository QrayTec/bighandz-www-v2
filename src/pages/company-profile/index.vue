<template>
  <div class="w-full">
    <div class="message_from_president_main">
      <sub-page-title :data="SubPageTitleData" />
    </div>
    <div class="company_profile_main">
      <CompanyProfileContent />
      <CompanyHistory />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SubPageTitleType } from '@/data/pages_interface'
import CompanyProfile from '@/assets/images/sub_page_title/Company_Profile.png'
import CompanyHistory from './components/CompanyHistory.vue'
import CompanyProfileContent from './components/CompanyProfileContent.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: '会社',
  TitleCn_2: '概要',
  TitleEn: 'Company Profile',
  ImgSrc: CompanyProfile,
  bold: 2,
  type: 1
})
</script>

<style>
ul li {
  list-style-type: none;
}
hr {
  color: #dfe4f2;
}
.m_t_30 {
  margin-top: 30px;
}
.m_b_30 {
  margin-bottom: 30px;
}

.message_from_president_main {
  width: 100%;
  height: auto;
  background: #0e1b47;
  display: flex;
  justify-content: center;
}
.company_profile_main {
  margin-top: 120px;
  margin-bottom: 240px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.company_profile_content {
  width: 1200px;
}
</style>
