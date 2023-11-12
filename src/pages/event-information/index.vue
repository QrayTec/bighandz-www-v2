<template>
  <div class="w-full">
    <div class="message_from_president_main">
      <sub-page-title :data="SubPageTitleData" />
    </div>
    <div class="healthcare_business m_b_240">
      <div class="healthcare_business_box">
        <EventInformationItem />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SubPageTitleType } from '@/data/pages_interface'
import EventInformation from '@/assets/images/sub_page_title/event_information.png'
import EventInformationItem from './components/EventInformationItem.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: 'イベント ',
  TitleCn_2: '· 情報',
  TitleEn: 'event information',
  ImgSrc: EventInformation,
  bold: 1,
  type: 1
})
</script>

<style scoped>
.m_b_240 {
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
/* 大于等于1024px宽度的屏幕 */
@media (min-width: 1024px) and (max-width: 1299px) {
  .healthcare_business_box {
    width: 80%;
  }
}

/* 大于等于768px宽度，小于1024px宽度的屏幕 */
@media (min-width: 768px) and (max-width: 1023px) {
  .healthcare_business_box {
    width: 80%;
  }
}

/* 小于768px宽度的屏幕 */
@media (max-width: 767px) {
  .healthcare_business_box {
    width: 80%;
  }
}
</style>
