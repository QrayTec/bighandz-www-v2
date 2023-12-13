<template>
  <div
    class="font-NotoSansJP"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="w-full">
      <div class="text-cobalt_blue text-[2.25rem] font-[700]">
        企業理念の実現
      </div>
      <div
        class="text-deep_blue mt-[30px] text-[16px] leading-[2rem] font-[400]"
      >
        <p>私たちは、よりお客様満足、より社員たちの喜び、永遠に追求します。</p>
        <p class="mt-[1.875rem]">
          私たちは、ＳＩ事業を通して、日中間の架け橋の役割果たし、国、人種の垣根を越えた国際交流と経済発展に貢献します。
        </p>
      </div>
    </div>
    <div class="mt-[60px] px-[60px]">
      <div class="text-[2.25rem] font-[700]">Our Way</div>
    </div>
    <div class="relative mt-[60px] w-full px-[60px]">
      <div class="w-full">
        <div
          v-for="(item, index) in OurWayData"
          :key="index"
          class="w-full"
        >
          <div class="mt-[1px] w-full flex">
            <div
              class="relative w-[480px] flex items-end justify-center text-white"
            >
              <img
                class="absolute z-0"
                :src="item.img"
                alt="Description"
              />
              <div
                class="z-1 py-[18px] text-[1.25rem] leading-normal font-[700]"
              >
                {{ item.title }}
              </div>
            </div>
            <div
              class="text-deep_blue w-[calc(100%-480px)] flex items-center text-[1rem] leading-normal font-[400]"
            >
              {{ item.list }}
            </div>
          </div>
          <div class="w-full flex justify-end">
            <div
              :style="{ width: 762 - index * 40 + 'px' }"
              class="h-[1px] bg-[#6785C1]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { OurWayType } from '../types/index'
import WayBg1 from '@/assets/images/corporate-philosophy-management-policy/pic_way_bg_1.svg'
import WayBg2 from '@/assets/images/corporate-philosophy-management-policy/pic_way_bg_2.svg'
import WayBg3 from '@/assets/images/corporate-philosophy-management-policy/pic_way_bg_3.svg'
import WayBg4 from '@/assets/images/corporate-philosophy-management-policy/pic_way_bg_4.svg'
import WayBg5 from '@/assets/images/corporate-philosophy-management-policy/pic_way_bg_5.svg'

const OurWayData = ref<OurWayType[]>([
  {
    title: '顧客第一',
    list: 'わたしたちは、顧客第一の姿勢を基盤とし、優れた情報技術サービス提供に努めます。',
    img: WayBg1
  },
  {
    title: '自己革新',
    list: 'わたしたちは、たゆまぬ自己革新により、新しい企業価値の創造に挑戦します。',
    img: WayBg2
  },
  {
    title: '株主、社員、社会に報いる',
    list: 'わたしたちは、総力を結集して自社業績の向上を図り、株主、社員、社会に報いることを使命とします。',
    img: WayBg3
  },
  {
    title: '活力ある組織作り',
    list: 'わたしたちは、人材の育成と公正な評価を通じ、活力ある組織作りを目指します。',
    img: WayBg4
  },
  {
    title: '個性と創造力を尊重し',
    list: 'わたしたちは、社員一人一人の個性と創造力を尊重し、可能性を大切にします。',
    img: WayBg5
  }
])
</script>
<style lang=""></style>
