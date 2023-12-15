<template>
  <div
    class="h-[987px] w-full flex justify-center bg-[url(@/assets/images/Business-Companies/bg-3.png)] bg-cover bg-no-repeat"
  >
    <div
      class="font-NotoSansJP h-full text-[#fff]"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <div class="mt-[80px] text-[2.25rem] leading-[3.375rem] font-[500]">
        事業内容・グループ企業
      </div>
      <BusinessItem2 />
      <BusinessBall />
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import BusinessItem2 from './Business-item2.vue'
import BusinessBall from './Business-Ball.vue'
</script>
<style scoped></style>
