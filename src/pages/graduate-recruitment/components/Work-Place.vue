<template>
  <div
    id="Work-related"
    class="font-NotoSansJP relative h-auto flex justify-center text-white"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="bg-deep_blue absolute z-[-1] h-full w-[calc(100%-120px)]"></div>
    <div class="w-full">
      <ThePageMinTitle2 data-aos="fade-up">勤務地</ThePageMinTitle2>
      <div
        class="mt-[60px] px-[90px]"
        data-aos="fade-up"
      >
        <TheIconList :type="2">
          <p class="text-white">東京、神奈川</p>
        </TheIconList>
      </div>
      <div
        class="mt-[30px] px-[90px]"
        data-aos="fade-up"
      >
        <p class="text-[.875rem] leading-normal font-[400]">
          ※勤務地は相談の上、決定します。
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
