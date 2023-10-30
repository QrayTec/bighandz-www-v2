<template>
  <div class="page">
    <TheHeader
      class="Header"
      :checked="1"
    />
    <sub-page-title :data="SubPageTitleData" />
    <div class="philosophy_policy_box">
      <practices-guidelines />
      <mission />
      <vision />
      <values />
    </div>
    <innovation />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CorporatePhilosophy from '@/assets/images/sub_page_title/Corporate_Philosophy_Management_Policy_banner.png'

interface SubPageTitleType {
  TitleCn: string
  TitleEn: string
  ImgSrc: string
}

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn: '企業理念 · 経営方針',
  TitleEn: 'Corporate Philosophy Management Policy',
  ImgSrc: CorporatePhilosophy
})
</script>

<style>
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

.m_l_30 {
  margin-left: 30px;
}
</style>
