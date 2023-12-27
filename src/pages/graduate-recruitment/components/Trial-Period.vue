<template>
  <div
    class="font-NotoSansJP relative h-auto flex justify-center px-[15px] text-white lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="bg-deep_blue absolute z-[-1] h-full w-[calc(100%-60px)] lg:w-[calc(100%-120px)]"
    ></div>
    <div class="w-full">
      <ThePageMinTitle2 data-aos="fade-up">試用期間</ThePageMinTitle2>
      <div
        class="mt-[60px] px-[30px] lg:px-[90px]"
        data-aos="fade-up"
      >
        <TheIconList :type="2">
          <p class="text-white">試用期間あり（6か月）</p>
        </TheIconList>
      </div>
      <div
        class="mt-[30px] px-[30px] lg:px-[90px]"
        data-aos="fade-up"
      >
        <p class="text-[.875rem] leading-normal font-[400]">
          ※試用期間と本採用後の、労働条件の変更はありません。
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
