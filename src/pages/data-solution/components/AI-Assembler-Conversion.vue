<template>
  <div
    id="AIAssemblerConversion"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[42px] py-[17px] text-[36px] font-[500] text-white"
    >
      AIアセンブラ変換
    </div>
    <div
      class="font-NotoSansJP mt-[60px] w-[654px] text-[20px] leading-[32px] font-[400]"
    >
      生成AIを活用したアセンブラ解析・変換サービス<br />
      生成AIによる変換処理の説明責任（アカウンタビリティー）を考慮し、変換ソース作成とあわせて構造解析レポートおよびロジック解析レポートも作成します。
    </div>
    <div class="mt-[60px] w-full flex justify-center">
      <img
        src="@/assets/images/data-solution/Solution_7.png"
        alt=""
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
