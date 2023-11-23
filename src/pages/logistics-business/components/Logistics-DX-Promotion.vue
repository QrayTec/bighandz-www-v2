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
            <div class="mt-[5px] h-full min-w-[16px]">
              <img
                class="h-16px w-[16px]"
                src="@/assets/images/company_profile/rhombic.svg"
                alt=""
              />
            </div>
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
import Change2 from '@/assets/images/logistics-business/change_2.jpg'

const ChallengesData = ref<ChallengesType[]>([
  {
    Image: Change2,
    content: [
      {
        list: 'こうした状況を踏まえ、物流を戦略として捉え、デジタル技術を活用して経営革新や物流DXを実現していく必要がある。'
      },
      {
        list: '当社では、サプライチェーン全体の視点から戦略的検討、全体最適、個別最適の目標を策定します。'
      },
      {
        list: '外部環境が急速に変化する時代において、戦略を絵に描いた餅にしないためには、戦略の策定、実行、実行、運用を一体化することが必要です。'
      },
      {
        list: 'スピーディなサービスをご提供いたしますので、私たちは物流力を最大限に発揮し、物流サービスの向上を図り、お客様の事業拡大に貢献してまいります。'
      }
    ]
  }
])
</script>
<style lang=""></style>
