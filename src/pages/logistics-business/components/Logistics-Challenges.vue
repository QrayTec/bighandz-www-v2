<template>
  <div
    id="LogisticsChallenges"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    class="font-NotoSansJP px-[15px] lg:px-0"
  >
    <ThePageMinTitle data-aos="fade-up">物流業界が直面する課題</ThePageMinTitle>
    <div class="mt-[60px] flex flex-col lg:flex-row lg:justify-between">
      <div
        data-aos="fade-up"
        class="text-deep_blue order-1 mt-[30px] w-full text-[1rem] leading-[32px] font-[400] lg:order-0 lg:mt-0 lg:w-[710px]"
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
        class="order-0 w-full flex justify-center lg:order-1 lg:w-[460px] lg:justify-start"
        data-aos="fade-up"
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
