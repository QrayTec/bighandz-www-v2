<template>
  <div class="">
    <div
      class="font-Shippori relative inline-block bg-[#597BE5] px-[10px] py-[10px] lg:px-[30px] lg:py-[20px]"
    >
      <div
        class="relative z-2 text-[2.25rem] leading-[2.75rem] font-[700] text-[#fff]"
      >
        <slot></slot>
      </div>
    </div>
    <div class="h-[5px] w-[15px] lg:h-[10px] lg:w-[60px]">
      <img
        v-if="MAIN_CONTENT_WIDTH == 1200"
        src="@/assets/images/ThePageMinTitle2/bg.svg"
      />
      <img
        v-else
        src="@/assets/images/ThePageMinTitle2/bg_2.svg"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
