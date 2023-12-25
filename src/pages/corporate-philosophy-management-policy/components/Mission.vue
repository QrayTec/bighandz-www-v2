<template>
  <div
    class="relative w-[375px] flex flex-col justify-center px-[15px] lg:h-[348px] lg:w-[1920px] md:w-[700px] lg:flex-row lg:px-0"
  >
    <div
      class="font-NotoSansJP text-deep_blue"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <div class="w-full lg:mt-[60px] lg:w-[calc(50%-30px)]">
        <div class="text-[2.25rem] leading-normal font-[700]">使命</div>
        <div class="mt-[30px] text-[1rem] leading-[2rem] font-[400]">
          私たちの使命は、顧客に優れた技術ソリューションとサービスを提供し、彼らがビジネス目標を達成し、信頼できるテクノロジーパートナーとなることを支援することです。
        </div>
      </div>
    </div>
    <div class="mt-[30px] lg:absolute lg:right-0 lg:mt-0">
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
