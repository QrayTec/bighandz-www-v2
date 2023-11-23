<template>
  <div
    id="LogisticsDXPromotion"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[42px] py-[17px] text-[36px] font-[500] text-white"
    >
      物流DX推進
    </div>
    <div
      v-for="(item, index) in ChallengesData"
      :key="index"
      class="mt-[60px] min-h-[360px] w-full flex justify-between"
    >
      <div
        :class="index % 2 == 0 ? 'order-1' : ''"
        class="w-[calc(50%-15px)] flex flex-col justify-center"
      >
        <ul class="w-full">
          <li
            v-for="(items, i) in item.content"
            :key="i"
            :class="i == 0 ? '' : 'mt-[30px]'"
            class="w-full flex px-[30px]"
          >
            <p class="ml-[10px]">{{ items.list }}</p>
          </li>
        </ul>
      </div>
      <div class="w-[calc(50%-15px)]">
        <div class="h-full w-full">
          <img
            class="h-full w-full"
            :src="item.Image"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { ChallengesType } from '../types/index'
import Change2 from '@/assets/images/logistics-business/change_2.png'

const ChallengesData = ref<ChallengesType[]>([
  {
    Image: Change2,
    content: [
      {
        list: '上記、現状をふまえ、物流を戦略と捉え、デジタル技術を活用した経営革新、物流DX導入が求められています。'
      },
      {
        list: '弊社では、サプライチェーン全体での視点から、戦略検討、全体最適、個別最適とゴールを設定し、'
      },
      {
        list: '戦略が絵に描いた餅とならないよう、外部環境の変化が激しい時代に、戦略策定から実装、実行、運用と一気通貫で'
      },
      {
        list: 'SPEED感をもってサービスを提供し、'
      },
      {
        list: '物流POWERの最大化、物流サービスの高度化、お客様の事業拡大へと貢献します。'
      }
    ]
  }
])
</script>
<style lang=""></style>
