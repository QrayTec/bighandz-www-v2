<template>
  <div
    class="font-NotoSansJP text-deep_blue relative h-auto flex justify-center"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="absolute z-[-1] h-full w-[calc(100%-120px)] bg-white"></div>
    <div class="w-full">
      <ThePageMinTitle2>テンプレートのダウンロード</ThePageMinTitle2>
      <div class="px-[90px]">
        <div class="mt-[60px]">
          <TheDownloadBtn>履歴書テンプレート</TheDownloadBtn>
        </div>
        <div class="mt-[60px] text-[1rem] font-[400]">
          <p>
            上記の履歴書をクリックし、履歴書の書式ダウンロードして記入してください。
          </p>
          <p class="mt-[30px]">※解凍ソフトが必要</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
