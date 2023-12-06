<template>
  <div
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    class="font-NotoSansJP"
  >
    <ThePageMinTitle>ERP事業</ThePageMinTitle>
    <div class="text-deep_blue font-[400 mt-[30px] text-[1rem] leading-[2rem]">
      <p>
        企業の業務プロセスを自動化し、統合するためのソフトウェアシステムです。
      </p>
      <p>
        ERPソフトウェアには、会計、販売、購買、在庫管理、生産管理、人事管理など、企業の主要な業務プロセスを統合するためのモジュールが含まれています。
      </p>
    </div>
    <div class="w-full flex flex-col items-center">
      <div class="mt-[60px] w-full flex flex-wrap justify-between">
        <div
          v-for="(item, index) in EPRData1"
          :key="index"
          class="w-[338px] flex flex-col items-center"
        >
          <div class="flex justify-center">
            <img
              :src="item.Image"
              alt=""
            />
          </div>
          <div
            class="text-deep_blue mt-[6px] px-[10px] text-center text-[1.25rem] font-[700]"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
      <div class="mt-[60px] w-[749px] flex flex-wrap justify-between">
        <div
          v-for="(item, index) in EPRData2"
          :key="index"
          class="w-[338px] flex flex-col items-center"
        >
          <div class="flex justify-center">
            <img
              :src="item.Image"
              alt=""
            />
          </div>
          <div
            class="text-deep_blue mt-[6px] px-[10px] text-center text-[1.25rem] font-[700]"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { EPRType } from '../types/index'

import EPR1 from '@/assets/images/data-solution/EPR_1.png'
import EPR2 from '@/assets/images/data-solution/EPR_2.png'
import EPR3 from '@/assets/images/data-solution/EPR_3.png'
import EPR4 from '@/assets/images/data-solution/EPR_4.png'
import EPR5 from '@/assets/images/data-solution/EPR_5.png'

const EPRData1 = ref<EPRType[]>([
  { Image: EPR1, title: '業務プロセスの自動化と効率化' },
  { Image: EPR2, title: 'ビジネスプロセスの統合と可視化' },
  { Image: EPR3, title: 'より正確な予測と分析の実行' }
])
const EPRData2 = ref<EPRType[]>([
  { Image: EPR4, title: 'リアルタイムの情報共有とコラボレーションの促進' },
  { Image: EPR5, title: '品質管理やコンプライアンスなどの規制要件の遵守' }
])
</script>
<style lang=""></style>
