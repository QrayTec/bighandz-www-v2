<template>
  <div
    class="font-NotoSansJP relative h-auto flex justify-center text-white"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="bg-deep_blue absolute z-[-1] h-full w-[calc(100%-120px)]"></div>
    <div class="w-full">
      <ThePageMinTitle2>勤務時間</ThePageMinTitle2>
      <div class="mt-[60px] px-[90px]">
        <TheIconList :type="2">
          <p class="text-white">9:30～18:30</p>
        </TheIconList>
      </div>
      <div class="mt-[30px] px-[90px]">
        <p class="text-[.875rem] leading-normal font-[400]">
          ※プロジェクトにより異なる場合もあり。
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
