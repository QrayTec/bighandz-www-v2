<template>
  <div
    data-aos="zoom-in-right"
    class="relative z-4 w-[204px] flex flex-col justify-end bg-[#fff]"
    :class="StepsData.subheading === '' ? 'h-[84px]' : 'h-[122px]'"
  >
    <div class="absolute left-[30px] top-[20px] z-3">
      <div
        v-if="StepsData.subheading !== ''"
        class="font-NotoSansJP font-feature-settings-cilg-liga text-[24px] leading-[44px] font-[400] not-italic text-[#6785c1]"
      >
        {{ StepsData.subheading }}
      </div>
      <div
        class="font-feature-settings-cilg-liga font-Shippori text-[40px] leading-[44px] font-[700] not-italic text-[#0e1b47]"
      >
        {{ StepsData.title_main }}
      </div>
    </div>
    <div class="w-full flex justify-end">
      <div class="bg-primary-gradient h-[40px] w-[144px]"></div>
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
