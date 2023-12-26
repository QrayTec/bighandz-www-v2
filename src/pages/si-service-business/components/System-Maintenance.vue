<template>
  <div
    class="font-NotoSansJP px-[15px] lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle3 data-aos="fade-up">システム運用保守</ThePageMinTitle3>
    <div
      class="mt-[60px] flex flex-col justify-between lg:flex-row"
      data-aos="fade-up"
    >
      <div
        class="text-cobalt_blue order-1 mt-[30px] text-[1rem] leading-[2rem] font-[400] lg:order-0 lg:mt-0 lg:w-[710px]"
      >
        私たちの会社では、システム運用保守に必要な技術と知識を持ったエンジニアが、24時間体制でサポートを行っています。私たちは、お客様のビジネスが円滑に運営されることを確認するために、高度な監視システムを導入しており、システムが正常に動作しているかを常に確認しています。
      </div>
      <div class="order-0 w-full overflow-hidden lg:order-1 lg:w-[460px]">
        <img
          class="w-full transition-all duration-800 ease-in-out hover:transform-scale-[1.2] hover:duration-800"
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
