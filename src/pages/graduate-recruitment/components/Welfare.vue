<template>
  <div
    class="font-NotoSansJP relative h-auto flex justify-center text-white"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="bg-deep_blue absolute z-[-1] h-full w-[calc(100%-120px)]"></div>
    <div class="w-full">
      <ThePageMinTitle2>福利厚生</ThePageMinTitle2>
      <div class="mt-[60px] px-[90px]">
        <TheIconList :type="2">
          <p class="text-white">社会保険加入（健康、厚生、雇用、労災）</p>
        </TheIconList>
      </div>
      <div class="mt-[30px] px-[90px]">
        <TheIconList :type="2">
          <p class="text-white">資格取得支援制度</p>
        </TheIconList>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
