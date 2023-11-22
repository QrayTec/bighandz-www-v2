<template>
  <div class="w-full">
    <div class="flex justify-center">
      <Movie />
    </div>
    <hr class="my-[80px] border-[1px] border-[#0E1B47] border-solid" />
    <div class="flex justify-between">
      <AdoptionCard :data="AdoptionCardData[0]" />
      <AdoptionCard :data="AdoptionCardData[1]" />
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
  { Background_image: graduates, title: '新卒採用', link: '#' },
  { Background_image: careers, title: 'キャリア採用', link: '#' }
])
</script>
<style lang=""></style>
