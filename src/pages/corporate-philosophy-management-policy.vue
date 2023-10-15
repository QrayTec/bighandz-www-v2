<template>
  <div class="page">
    <TheHeader
      class="Header"
      :checked="1"
    />
    <sub-page-title :data="SubPageTitleData" />
    <div class="philosophy_policy_box">
      <div class="philosophy_policy_content">111</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface SubPageTitleType {
  TitleCn: string
  TitleEn: string
  ImgSrc: string
}

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn: '企業理念 · 経営方針',
  TitleEn: 'Corporate Philosophy Management Policy',
  ImgSrc: 'Corporate_Philosophy_Management_Policy_banner'
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
.philosophy_policy_box {
  width: 100%;
  margin-top: 120px;
  margin-bottom: 120px;
  display: flex;
  justify-content: center;
}
.philosophy_policy_content {
  width: 1200px;
}
</style>
