<template>
  <div
    id="LogisticsChallenges"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[42px] py-[17px] text-[36px] font-[500] text-white"
    >
      物流業界が直面する課題
    </div>
    <div
      v-for="(item, index) in ChallengesData"
      :key="index"
      class="mt-[60px] min-h-[360px] w-full flex justify-between"
    >
      <div
        :class="index % 2 != 0 ? 'order-1' : ''"
        class="w-[calc(50%-15px)] flex flex-col justify-center"
      >
        <ul class="w-full">
          <li
            v-for="(items, i) in item.content"
            :key="i"
            :class="i == 0 ? '' : 'mt-[30px]'"
            class="w-full flex px-[30px]"
          >
            <div
              v-if="i < 4"
              class="mt-[5px] h-full min-w-[16px]"
            >
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
        <div class="h-[320px]">
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
import Change1 from '@/assets/images/logistics-business/change_1.png'

const ChallengesData = ref<ChallengesType[]>([
  {
    Image: Change1,
    content: [
      {
        list: '物流業界において、トラック運転手や倉庫作業員の労働力不足や、高齢化、非正規雇用の拡大が影響し、時間外労働上限規制等もあり、労働力コスト上昇につながっています。'
      },
      {
        list: '物流のアクセスが地域によって異なり、地域・企業によっては、物流サービスが不足する事態におちいっています。'
      },
      {
        list: 'また、物流業界はCO2排出の主要な源であり、環境への影響も懸念されており、持続可能な物流システムの構築が求められています。'
      },
      {
        list: 'これらの課題を解決するために、物流DX導入は不可欠な状況になりつつありますが、物流業界においては、企業が基幹システムへのDX導入・投資が優先され、物流システムへの新たなテクノロジーの導入やデジタル化が遅れており、物流サービスの向上、業務の効率化、配送の効率化や透明性が不足しているとされています。'
      },
      {
        list: 'これらの課題を解決するために、物流DX導入は不可欠な状況になりつつありますが、物流業界においては、企業が基幹システムへのDX導入・投資が優先され、物流システムへの新たなテクノロジーの導入やデジタル化が遅れており、物流サービスの向上、業務の効率化、配送の効率化や透明性が不足しているとされています。'
      }
    ]
  }
])
</script>
<style lang=""></style>
