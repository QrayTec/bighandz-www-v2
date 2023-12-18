<template>
  <div
    class="font-NotoSansJP"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle3 data-aos="fade-right">
      生成AIを活用したアセンブラ解析・変換サービス
    </ThePageMinTitle3>
    <div
      class="mt-[30px]"
      data-aos="fade-right"
    >
      <div class="w-[654px] text-[1rem] leading-[2rem] font-[400]">
        生成AIによる変換処理の説明責任（アカウンタビリティー）を考慮し、変換ソース作成とあわせて構造解析レポートおよびロジック解析レポートも作成します。
      </div>
      <div class="mt-[60px] flex justify-center">
        <img
          class="w-[1000px] object-contain"
          src="@/assets/images/data-solution/AnalyticsTransformationServices_1.png"
          alt=""
        />
      </div>
    </div>
    <div
      data-aos="fade-right"
      class="text-deep_blue mt-[120px] text-[1rem] leading-[2rem] font-[400]"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
