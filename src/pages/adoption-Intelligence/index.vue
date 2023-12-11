<template>
  <div class="w-full">
    <div class="message_from_president_main">
      <SubPageTitleBg :data="SubPageTitleData" />
    </div>
    <div class="m_b_240 healthcare_business m_t_150 m_t_150">
      <div class="healthcare_business_box">
        <AdoptionItem />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SubPageTitleType } from '@/data/pages_interface'
import CompanyStaffObservation from '@/assets/images/sub_page_title/AdoptionIntelligence.jpg'
import AdoptionItem from './components/adoption-item.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: '採用情報',
  TitleCn_2: '',
  TitleEn: 'Adoption Intelligence',
  ImgSrc: CompanyStaffObservation
})
</script>

<style scoped>
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
