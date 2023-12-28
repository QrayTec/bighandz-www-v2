<template>
  <div
    class="font-NotoSansJP text-deep_blue relative h-auto flex justify-center px-[15px] lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="absolute z-[-1] h-full w-[calc(100%-60px)] bg-white lg:w-[calc(100%-120px)]"
    ></div>
    <div class="w-full">
      <ThePageMinTitle2 data-aos="fade-up"
        >テンプレートのダウンロード</ThePageMinTitle2
      >
      <div class="px-[30px] lg:px-[90px]">
        <div class="mt-[60px]">
          <TheDownloadBtn
            :img-src="DownLoadBg"
            data-aos="fade-up"
            :href="'rirekisyo.xlsx'"
            >履歴書テンプレート</TheDownloadBtn
          >
        </div>
        <div
          class="mt-[60px] text-[1rem] font-[400]"
          data-aos="fade-up"
        >
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
import DownLoadBg from '@/assets/images/DownLoadBtn/bg-1.svg'
</script>
<style lang=""></style>
