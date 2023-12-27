<template>
  <div
    id="LogisticsDXPlatform"
    class="font-NotoSansJP px-[15px] lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle data-aos="fade-up">物流DXプラットフォーム</ThePageMinTitle>
    <div class="mt-[60px] flex flex-col justify-between lg:flex-row">
      <div
        class="w-full lg:w-[480px]"
        data-aos="fade-up"
      >
        <p class="text-cobalt_blue text-[1.25rem] font-[700]">
          最先端のテクノロジーで物流改革
        </p>
        <TheIconList
          v-for="(item, index) in PlatformData"
          :key="index"
          class="mt-[30px]"
          >{{ item.list }}</TheIconList
        >
      </div>
      <div
        v-if="MAIN_CONTENT_WIDTH === 1200"
        class="w-[680px] flex flex-col items-end"
      >
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
      <GartnerCardPhone v-else />
    </div>
    <div
      class="mt-[120px]"
      data-aos="fade-up"
    >
      <div
        class="text-deep_blue text-[1rem] leading-[2rem] font-[400] lg:w-[654px]"
      >
        物流DXの導入にあたっては、お客様の事業戦略や経営課題を分析し、物流戦略に落とし込んで目標を設定し、喫緊の課題解決に向けた個別最適化だけでなく、将来の改善に向けたサプライチェーン全体の最適化も行います。
      </div>
      <div class="mt-[60px] w-full flex justify-center">
        <img
          v-if="MAIN_CONTENT_WIDTH === 1200"
          class="w-full object-contain lg:w-[1000px]"
          src="@/assets/images/logistics-business/pic_1.png"
          alt=""
        />
        <photo-provider v-else>
          <photo-consumer
            intro="物流DXプラットフォーム"
            :src="Pic"
          >
            <img
              :src="Pic"
              class="view-box"
            />
          </photo-consumer>
        </photo-provider>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { ChallengesList } from '../types/index'
import { CombinedCardData } from '../data/Data'
import GartnerCard from './GartnerCard.vue'
import GartnerCardPhone from './GartnerCardPhone.vue'
import Pic from '@/assets/images/logistics-business/pic_1.png'

const PlatformData = ref<ChallengesList[]>([
  {
    list: '20年以上における開発・導入、中国特有のマネジメントと海外企業の先進的マネジメントを組み合わせ、ハイテク製品を融合することで最大限のパフォーマンスを発揮。常に最新のテクノロジーを追求'
  },
  {
    list: '3000社以上へ導入し、庫内オペレーション最適化はもとよりサプライチェーン全体での最適化も可能とし、物流品質アップ、物流コストダウン、企業価値・ブランド力アップを実現'
  },
  {
    list: '倉庫管理からオーダ管理、輸配送管理、倉庫運用管理までオールインワンでの提供が可能、導入期間短縮、コスト削減に寄与'
  },
  {
    list: '製造、自動車、小売り、３PL、医薬、化学、アパレルといった各業界のフラグシップ企業への導入実績もあり多数のテンプレートを用意'
  }
])
</script>
<style lang=""></style>
