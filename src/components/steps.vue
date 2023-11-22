<template>
  <div
    data-aos="zoom-in-right"
    class="relative z-4 h-[84px] w-[204px] flex flex-col justify-end bg-[#fff]"
  >
    <div class="absolute left-[30px] top-[20px] z-3">
      <div
        class="font-NotoSansJP font-feature-settings-cilg-liga text-[24px] leading-[44px] font-[400] not-italic text-[#0E1B47]"
      >
        {{ StepsData.subheading }}
      </div>
    </div>
    <div class="w-full flex justify-end">
      <div class="bg-primarygradient h-[40px] w-[144px]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { StepsType } from '@/data/pages_interface'

const props = defineProps<{ stepsdata: StepsType }>()

const StepsData = ref<StepsType>(props.stepsdata)
</script>

<style scoped></style>
