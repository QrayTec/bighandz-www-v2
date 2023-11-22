<template>
  <div
    id="AI-Cases"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      AI事例
    </div>
    <div class="mt-[30px]">生命保険 RFM分析によるセグメント</div>
    <div class="mt-[30px] flex text-center">
      <div class="w-[20%]">セグメンテーション</div>
      <div class="w-[10%]">RFM</div>
      <div class="w-[35%]">説明</div>
      <div class="w-[35%]">マーケティング</div>
    </div>
    <div
      v-for="(item, index) in CasesData"
      :key="index"
      class="flex text-center"
    >
      <div class="w-[20%] border-1 border-black border-solid">
        {{ item.Segmentation }}
      </div>
      <div class="w-[10%] border-1 border-black border-solid">
        {{ item.RFM }}
      </div>
      <div class="w-[35%] border-1 border-black border-solid">
        {{ item.Description }}
      </div>
      <div class="w-[35%] border-1 border-black border-solid">
        {{ item.Market }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { CasesType } from '../types/index'

const CasesData = ref<CasesType[]>([
  {
    Segmentation: '優良販売員',
    RFM: '111',
    Description: '最近契約を取りつつ、且つたくさんの契約を保有する',
    Market: '新たしい商品やセミナーを積極的に案内する'
  },
  {
    Segmentation: '安定販売員',
    RFM: 'X1X',
    Description: 'たくさんの契約を保有する',
    Market: 'R、M指標によって、詳細のセグメントを分ける'
  },
  {
    Segmentation: '大口販売員',
    RFM: 'XX1',
    Description: 'たくさんの新規契約を取っている',
    Market: '高い付加価値のある商品を案内する'
  },
  {
    Segmentation: '新規販売員',
    RFM: '144',
    Description: '新規販売員',
    Market: 'リソースを費やして育つ'
  },
  {
    Segmentation: '離反しつつある販売員',
    RFM: '311',
    Description: '多く契約を保有しているが、最近契約を取ってない',
    Market: '商品の価格に敏感'
  },
  {
    Segmentation: '離反販売員',
    RFM: '411',
    Description: '多く契約を保有しているが、最近契約を取ってない',
    Market: '商品の価格に敏感'
  },
  {
    Segmentation: '休眠販売員',
    RFM: '444',
    Description: '保有契約はすくないし、新しい契約もない',
    Market: 'あまりリソースを費すことがない'
  }
])
</script>
<style lang=""></style>
