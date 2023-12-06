<template>
  <div
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    class="font-NotoSansJP"
  >
    <ThePageMinTitle>AI事例：現新比較の画面差分の自動識別</ThePageMinTitle>
    <div class="mt-[30px]">
      <div
        class="text-deep_blue w-[654px] text-[1rem] leading-[2rem] font-[400]"
      >
        本システムはREST
        APIを介したフロントエンド／バックエンドアーキテクチャを採用マルチブラウザにおける画面表示の差分を自動検知する
      </div>
      <div class="mt-[60px] h-[522px] flex justify-center">
        <img
          class="h-full w-[1000px] object-contain"
          src="@/assets/images/data-solution/AICase_1.png"
          alt=""
        />
      </div>
    </div>
    <div class="mt-[60px]">
      <div
        class="text-deep_blue w-[654px] text-[1rem] leading-[2rem] font-[400]"
      >
        LLMの応用(OSS):Fine-tuningで安全なカスタマイズで差別化を加速
      </div>
      <div class="mt-[60px] h-[522px] flex justify-center">
        <img
          class="h-full w-[1000px] object-contain"
          src="@/assets/images/data-solution/AICase_2.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
