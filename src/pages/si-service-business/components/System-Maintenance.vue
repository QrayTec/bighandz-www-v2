<template>
  <div
    class="font-NotoSansJP"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle data-aos="fade-right">システム運用保守</ThePageMinTitle>
    <div
      class="mt-[60px] flex justify-between"
      data-aos="fade-right"
    >
      <div
        class="text-cobalt_blue w-[710px] text-[1rem] leading-[2rem] font-[400]"
      >
        私たちの会社では、システム運用保守に必要な技術と知識を持ったエンジニアが、24時間体制でサポートを行っています。私たちは、お客様のビジネスが円滑に運営されることを確認するために、高度な監視システムを導入しており、システムが正常に動作しているかを常に確認しています。
      </div>
      <div class="w-[460px] overflow-hidden">
        <img
          class="transition-all duration-800 ease-in-out hover:transform-scale-[1.2] hover:duration-800"
          src="@/assets/images/si-service-business/si_9.png"
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
