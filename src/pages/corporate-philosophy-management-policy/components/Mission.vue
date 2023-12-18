<template>
  <div class="relative h-[348px] w-[1920px] flex justify-center">
    <div
      class="font-NotoSansJP text-deep_blue"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <div class="mt-[60px] w-[calc(50%-30px)]">
        <div class="text-[2.25rem] leading-normal font-[700]">使命</div>
        <div class="mt-[30px] text-[1rem] leading-[2rem] font-[400]">
          私たちの使命は、顧客に優れた技術ソリューションとサービスを提供し、彼らがビジネス目標を達成し、信頼できるテクノロジーパートナーとなることを支援することです。
        </div>
      </div>
    </div>
    <div class="absolute right-0">
      <img
        src="@/assets/images/corporate-philosophy-management-policy/pic-Misson.png"
        alt=""
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
