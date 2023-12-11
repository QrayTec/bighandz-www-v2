<template>
  <div class="w-full flex justify-center bg-[#F8F8F8]">
    <div :style="{ width: MAIN_CONTENT_WIDTH + 'px' }">
      <ThePageMinTitle
        class="mt-[60px]"
        data-aos="fade-right"
      >
        プラットフォームの構成図
      </ThePageMinTitle>
      <div class="my-[60px]">
        <img
          src="@/assets/images/si-service-business/si_8.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
