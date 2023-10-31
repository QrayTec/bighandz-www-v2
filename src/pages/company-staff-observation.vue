<template>
  <div class="page">
    <TheHeader
      class="Header"
      :checked="3"
    />
    <div class="message_from_president_main">
      <sub-page-title :data="SubPageTitleData" />
    </div>
    <div class="healthcare_business m_t_150 m_t_150 m_b_150">
      <div class="healthcare_business_box">
        <Movie-item />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CompanyStaffObservation from '@/assets/images/sub_page_title/Company_staff_observation.png'

interface SubPageTitleType {
  TitleCn_1: string
  TitleCn_2: string
  TitleEn: string
  ImgSrc: string
  bold: number
}

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'MOVIE',
  TitleCn_2: '',
  TitleEn: 'Company staff observation',
  ImgSrc: CompanyStaffObservation,
  bold: 1
})
</script>

<style scoped>
.m_t_150 {
  margin-top: 150px;
}
.m_b_150 {
  margin-bottom: 240px;
}
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
}
</style>
