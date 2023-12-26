<template>
  <div
    class="font-NotoSansJP relative h-auto flex justify-center text-white"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="bg-deep_blue absolute z-[-1] h-full w-[calc(100%-120px)]"></div>
    <div class="w-full">
      <ThePageMinTitle2 data-aos="fade-up">募集学部・学科</ThePageMinTitle2>
      <div
        class="mt-[60px] px-[90px]"
        data-aos="fade-up"
      >
        <TheIconList :type="2">
          <p class="text-white">全学部、全学科</p>
        </TheIconList>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
