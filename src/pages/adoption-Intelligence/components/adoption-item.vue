<template>
  <div class="w-full">
    <div class="flex justify-center">
      <!-- <Movie /> -->
    </div>
    <!-- <hr class="my-[80px] border-[1px] border-[#0E1B47] border-solid" /> -->
    <div class="flex justify-between">
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
