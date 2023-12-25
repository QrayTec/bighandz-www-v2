<template>
  <div
    class="font-NotoSansJP px-[15px] lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="flex justify-between">
      <div class="w-[654px] flex flex-col justify-between py-[30px]">
        <div class="text-deep_blue text-[2.25rem] leading-normal font-[700]">
          イノベーション
        </div>
        <div
          class="text-deep_blue mt-[30px] text-[1rem] leading-[2rem] font-[700]"
        >
          私たちは常に新しいアイデア、新しい方法、新しい技術を追求し、自身と顧客のイノベーションを推進します。
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
