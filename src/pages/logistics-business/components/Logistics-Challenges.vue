<template>
  <div
    id="LogisticsChallenges"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    class="font-NotoSansJP"
  >
    <ThePageMinTitle data-aos="fade-right"
      >物流業界が直面する課題</ThePageMinTitle
    >
    <div class="mt-[60px] flex justify-between">
      <div
        data-aos="fade-right"
        class="text-deep_blue w-[710px] text-[1rem] leading-[32px] font-[400]"
      >
        <TheIconList
          v-for="(item, index) in ChallengesListData"
          :key="index"
          :class="index === 0 ? '' : 'mt-[30px]'"
          >{{ item.list }}</TheIconList
        >
        <p class="mt-[30px]">
          これらの課題を解決するために、物流DX導入は不可欠な状況になりつつありますが、
          物流業界においては、企業が基幹システムへのDX導入・投資が優先され、
          物流システムへの新たなテクノロジーの導入やデジタル化が遅れており、物流サービスの向上、
          業務の効率化、配送の効率化や透明性が不足しているとされています。
        </p>
      </div>
      <div
        class="w-[460px]"
        data-aos="fade-left"
      >
        <img
          src="@/assets/images/logistics-business/change_1.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { ChallengesList } from '../types/index'

const ChallengesListData = ref<ChallengesList[]>([
  {
    list: '物流業界において、トラック運転手や倉庫作業員の労働力不足や、高齢化、非正規雇用の拡大が影響し、時間外労働上限規制等もあり、労働力コスト上昇につながっています。'
  },
  {
    list: '物流のアクセスが地域によって異なり、地域・企業によっては、物流サービスが不足する事態におちいっています。'
  },
  {
    list: 'また、物流業界はCO2排出の主要な源であり、環境への影響も懸念されており、持続可能な物流システムの構築が求められています。'
  }
])
</script>
<style lang=""></style>
