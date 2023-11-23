<template>
  <div
    id="LogisticsDXPlatform"
    data-aos="fade-in"
    class="w-full flex flex-col items-center justify-center"
  >
    <div :style="{ width: MAIN_CONTENT_WIDTH + 'px' }">
      <div
        class="h-[78px] max-w-[480px] flex items-center justify-center bg-[#6785C1] text-[36px] font-[500] text-white"
      >
        物流DXプラットフォーム
      </div>
      <div
        v-for="(item, index) in ChallengesData"
        :key="index"
        class="mt-[60px] min-h-[360px] w-full flex justify-between"
      >
        <div
          :class="index % 2 != 0 ? 'order-1' : ''"
          class="ml-[30px] w-[450px] flex flex-col justify-center"
        >
          <ul class="w-full">
            <li
              v-for="(items, i) in item.content"
              :key="i"
              :class="
                i == 0
                  ? 'font-NotoSansJP mt-[30px] text-[20px] font-[700] text-[#071027]'
                  : 'mt-[30px]'
              "
              class="w-full flex px-[30px]"
            >
              <div
                v-if="i >= 1"
                class="mt-[5px] h-full min-w-[16px]"
              >
                <img
                  class="h-16px w-[16px]"
                  src="@/assets/images/company_profile/rhombic.svg"
                  alt=""
                />
              </div>
              <p
                :class="i == 0 ? 'ml-[0px]' : 'ml-[10px]'"
                class=""
              >
                {{ items.list }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="mt-[205px] h-[327px] w-[1760px] flex justify-center bg-[#6785C1]"
    >
      <div
        :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
        class="flex justify-end"
      >
        <div class="w-[960px] flex flex-col translate-y-[-240px] items-end">
          <div
            v-for="(cardData, index) in CombinedCardData"
            :key="index"
            class="w-full flex justify-end"
          >
            <GartnerCard
              v-for="(card, cardIndex) in cardData.data"
              :key="cardIndex"
              :carddata="card"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { CombinedCardData } from '../data/Data.ts'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import GartnerCard from './GartnerCard.vue'
import { ChallengesType } from '../types/index'

import Change3 from '@/assets/images/logistics-business/Change_3.jpg'

const ChallengesData = ref<ChallengesType[]>([
  {
    Image: Change3,
    content: [
      {
        list: '最先端のテクノロジーで物流改革'
      },
      {
        list: '20年以上における開発・導入。物流自動化先進国中国の技術と海外大手企業の先進的マネジメントを組み合わせ、融合することで最大限のパフォーマンスを発揮。常に最新のテクノロジーを追求'
      },
      {
        list: '3,000社以上へ導入し、庫内オペレーション最適化はもとよりサプライチェーン全体での最適化も可能とし、物流品質アップ、物流コストダウン、企業価値・ブランド力アップを実現'
      },
      {
        list: '倉庫管理からオーダ管理、輸配送管理、倉庫運用管理までオールインワンでの提供が可能、導入期間短縮、コスト削減に寄与'
      },
      {
        list: '製造、自動車、小売り、３PL、医薬、化学、アパレルといった各業界のフラグシップ企業への導入実績もあり多数のテンプレートを用意'
      }
    ]
  }
])
</script>
<style lang=""></style>
