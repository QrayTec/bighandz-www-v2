<template>
  <div class="relative h-[360px] w-[585px]">
    <div class="absolute left-0 top-0 h-full w-full">
      <img
        :src="CardData.BackgroundImage"
        alt=""
      />
    </div>
    <div
      class="font-NotoSansJP relative left-0 top-0 h-full w-full bg-[#0E1B47] bg-opacity-40 px-[40px] text-white"
    >
      <a
        :href="CardData.link"
        class="flex flex-col"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="pt-[240px] text-[24px] leading-[30px] font-[500]">
          {{ CardData.title }}
        </div>
        <div class="mt-[30px] w-full flex">
          <p>詳細はこちら</p>
          <img
            class="ml-[20px]"
            src="@/assets/images/index_Business/link.svg"
            alt=""
          />
        </div>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { AdoptionCardType } from '../types/index'

const props = defineProps<{ carddata: AdoptionCardType }>()

const CardData = ref<AdoptionCardType>(
  props.carddata || { BackgroundImage: '', title: '', link: '' }
)
</script>
<style lang=""></style>
