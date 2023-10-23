<template>
  <div class="page">
    <TheHeader
      class="Header"
      :checked="1"
    />
    <div class="message_from_president_main">
      <sub-page-title :data="SubPageTitleData" />
    </div>
    <div class="company_profile_main">
      <company-profile-content />
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
  TitleCn: '会社 · 概要',
  TitleEn: 'Company Profile',
  ImgSrc: 'Company_Profile'
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
  justify-content: center;
}
.company_profile_content {
  width: 1200px;
}
</style>
