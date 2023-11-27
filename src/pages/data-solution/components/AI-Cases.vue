<template>
  <div
    id="AI-Cases"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[42px] py-[17px] text-[36px] font-[500] text-white"
    >
      AI事例
    </div>
    <div
      class="font-NotoSansJP mt-[60px] w-[654px] text-[20px] leading-[32px] font-[400] text-[#071027]"
    >
      AI事例：現新比較の画面差分の自動識別<br />
      本システムはREST
      APIを介したフロントエンド／バックエンドアーキテクチャを採用マルチブラウザにおける画面表示の差分を自動検知する
    </div>
    <div class="mt-[60px] w-full flex justify-center">
      <img
        src="@/assets/images/data-solution/Solution_5.png"
        alt=""
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
