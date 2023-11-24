<template>
  <div class="w-full">
    <sub-page-title :data="SubPageTitleData" />
    <div class="philosophy_policy_box">
      <PracticesGuidelines />
      <Mission />
      <Vision />
      <Values />
    </div>
    <Innovation />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SubPageTitleType } from '@/data/pages_interface'
import CorporatePhilosophy from '@/assets/images/pic_innovation_bg.png'
import Innovation from './components/Innovation.vue'
import Mission from './components/Mission.vue'
import PracticesGuidelines from './components/PracticesGuidelines.vue'
import Values from './components/Values.vue'
import Vision from './components/Vision.vue'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: '企業理念',
  TitleCn_2: '経営方針',
  TitleEn: 'Corporate Philosophy Management Policy',
  ImgSrc: CorporatePhilosophy,
  bold: 1,
  type: 3
})
</script>

<style>
.philosophy_policy_box {
  width: 100%;
  margin-top: 120px;
  margin-bottom: 120px;
}
.m_top_30 {
  margin-top: 30px;
}
.m_top_60 {
  margin-top: 60px;
}

.Realization_of_Corporate_Philosophy {
  width: 1200px;
}
.Realization_title {
  color: #071027;
  /* 正文一级标题加粗 */
  font-family: Noto Sans JP;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.Realization_min_text {
  color: #071027;
  /* 正文一级标题加粗 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
}
.vision {
  margin-top: 120px;
}
.Practices_guidelines {
  display: flex;
  justify-content: center;
}
</style>
