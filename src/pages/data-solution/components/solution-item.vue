<template>
  <div
    id="Solution"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      v-for="(item, index) in SolutionData"
      :id="item.id"
      :key="index"
      data-aos="fade-in"
      class="mt-[80px] w-full flex flex-col justify-between"
    >
      <div
        class="h-[80px] max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
      >
        {{ item.title }}
      </div>
      <div class="mt-[30px] w-full flex justify-between">
        <div
          :class="index % 2 != 0 ? 'order-1 items-start' : 'items-end'"
          class="w-[calc(50%-15px)] flex flex-col justify-between py-[30px]"
        >
          <div
            class="font-NotoSansJP h-full w-full text-[18px] leading-[32px] font-[400] text-[#0E1B47]"
          >
            <div
              v-for="(items, i) in item.content"
              :key="i"
              class="h-full w-full flex flex-col justify-between"
            >
              <p>
                {{ items.list_1 }}
              </p>
              <p>
                {{ items.list_2 }}
              </p>
              <p>
                {{ items.list_3 }}
              </p>
            </div>
            <p></p>
          </div>
        </div>
        <div class="w-[calc(50%-15px)]">
          <img
            class="h-[320px] w-full object-cover"
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
import { SolutionType } from '../types/index'
import Solution1 from '@/assets/images/data-solution/Solution_1.jpg'
import Solution2 from '@/assets/images/data-solution/Solution_2.jpg'
import Solution3 from '@/assets/images/data-solution/Solution_3.jpg'
import Solution4 from '@/assets/images/data-solution/Solution_4.jpg'

const SolutionData = ref<SolutionType[]>([
  {
    id: 'AI-Innovation-Business',
    title: 'AI革新ビジネス',
    Image: Solution1,
    content: [
      {
        list_1:
          'AIを⽤いたデータマイニングや機械学習を取り⼊れた最先端分野にも積極的にり組んでおり、業務の効率化にとどまらず、',
        list_2:
          'お客様のデータ価値最大化、あらたなビジネスモデル実現に貢献しております。'
      }
    ]
  },
  {
    id: 'Technological-Evolution&Value-Addition',

    title: '技術進化と付加価値',
    Image: Solution2,
    content: [
      {
        list_1:
          'IoT、ビッグデータ、AIなどのテクノロジーは日々進化しております。',
        list_2:
          'それらの最新技術をSPEED感をもって最大限活用することで、弊社SIサービス、物流サービス、インフラ構築、',
        list_3:
          '介護ビジネスにおいてもお客様に新たな付加価値、POWERを提供すべく取り込んでおります。'
      }
    ]
  },
  {
    id: 'AI-Quality&Efficiency',

    title: 'AI品質・効率化',
    Image: Solution3,
    content: [
      {
        list_1:
          'オフショア活用においても、AIをテスト自動化、ドキュメント自動チェックに適用することで、',
        list_2: '品質統一、工期短縮、作業効率化を図っております。'
      }
    ]
  },
  {
    id: 'AI-Business&Development',
    title: 'AIビジネス展開',
    Image: Solution4,
    content: [
      {
        list_1: 'これまでに多くのAI活用のビジネスを展開してまいりました。'
      }
    ]
  }
])
</script>
<style lang=""></style>
