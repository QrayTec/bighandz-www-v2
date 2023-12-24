<template>
  <div
    data-aos="fade-in"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    class="relative min-h-[100vh] w-full px-[15px] lg:px-0"
  >
    <div
      class="absolute left-[15px] top-[50%] w-[350px] lg:top-[470px] lg:w-[760px]"
    >
      <img src="@/assets/images/index_main/pic_Speed_is_the_Power.png" />
    </div>
    <div
      class="absolute bottom-[120px] text-[1.125rem] text-[#fff] lg:bottom-[80px] lg:text-[1.5rem]"
    >
      最先端のテクノロジーを追求し
      お客様に寄り添い、お客様の企業価値創造に貢献します
    </div>
    <div
      class="absolute bottom-[50px] right-0 h-[60px] w-[60px] lg:bottom-[120px] lg:right-[-230px] lg:h-[120px] lg:w-[120px]"
    >
      <img src="@/assets/images/index_main/25th.png" />
    </div>
    <div
      v-if="MAIN_CONTENT_WIDTH === 1200"
      class="flex flex-col animate-[moveContainer_3s_infinite_alternate] lg:absolute lg:bottom-[120px] lg:left-[-274px]"
    >
      <div
        class="translate-x-[-50%] translate-y-[-100%] rotate-[270deg] text-[14px] text-[#fff]"
      >
        SCROLL
      </div>
      <div class="Scroll_Line mt-[20px] h-[80px] w-[1px]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style scoped>
.Scroll_Line {
  background: linear-gradient(
    297deg,
    rgba(255, 255, 255, 0) -33.34%,
    #fff 133.34%
  );
}
</style>
