<template>
  <div
    id="Subject-application"
    class="font-NotoSansJP relative h-auto flex justify-center text-white"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="bg-deep_blue absolute z-[-1] h-full w-[calc(100%-120px)]"></div>
    <div class="w-full">
      <ThePageMinTitle2>募集対象</ThePageMinTitle2>
      <div class="mt-[60px] px-[90px]">
        <TheIconList :type="2">
          <p class="text-white">
            2022年3月末までに高専、専門学校、大学、大学院を卒業見込みの方
          </p>
        </TheIconList>
      </div>
      <div class="mt-[30px] px-[90px]">
        <TheIconList :type="2">
          <p class="text-white">
            2022年3月末時点で、最終学歴卒業後3年未満の方もご応募いただけます<br />
            就労経験の有無は問いません。
          </p>
        </TheIconList>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
