<template>
  <div
    class="font-NotoSansJP"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle>物流DX推進</ThePageMinTitle>
    <div class="mt-[60px] flex justify-between">
      <div class="w-[480px]">
        <img
          src="@/assets/images/logistics-business/change_2.png"
          alt=""
        />
      </div>
      <div
        class="text-deep_blue w-[680px] text-[1rem] leading-[2rem] font-[400]"
      >
        <div>
          上記、現状をふまえ、物流を戦略と捉え、デジタル技術を活用した経営革新、物流DX導入が求められています。
        </div>
        <div class="mt-[2.25rem]">
          弊社では、サプライチェーン全体での視点から、戦略検討、全体最適、個別最適とゴールを設定し、
          戦略が絵に描いた餅とならないよう、外部環境の変化が激しい時代に、戦略策定から実装、実行、運用と一気通貫で
          SPEED感をもってサービスを提供し、
          物流POWERの最大化、物流サービスの高度化、お客様の事業拡大へと貢献します。
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
