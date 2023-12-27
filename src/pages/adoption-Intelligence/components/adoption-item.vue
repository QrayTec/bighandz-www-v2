<template>
  <div
    class="font-NotoSansJP px-[15px] lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="flex flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between"
    >
      <div
        v-for="card in AdoptionCardData"
        :key="card.title"
      >
        <AdoptionCard :carddata="card" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import AdoptionCard from './adoptionCard.vue'
import { AdoptionCardType } from '../types/index'
import graduates from '@/assets/images/adoption/graduates.png'
import careers from '@/assets/images/adoption/careers.png'

const AdoptionCardData = ref<AdoptionCardType[]>([
  {
    BackgroundImage: graduates,
    title: '新卒採用',
    link: '/graduate-recruitment'
  },
  {
    BackgroundImage: careers,
    title: 'キャリア採用',
    link: '/social-recruitment'
  }
])
</script>
<style lang=""></style>
