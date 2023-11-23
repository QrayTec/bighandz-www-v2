<template>
  <div
    id="LogisticsDXPlatform"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="h-[78px] max-w-[480px] flex items-center justify-center bg-[#6785C1] text-[36px] font-[500] text-white"
    >
      物流DXプラットフォーム
    </div>
    <div
      class="font-NotoSansJP mt-[30px] text-[20px] font-[700] text-[#071027]"
    >
      最先端のテクノロジーで物流改革
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
    <!-- <div
      class="mt-[205px] h-[480px] w-[1760px] flex justify-center bg-[#6785C1]"
    >
      <div
        :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
        class="flex"
      >
        <div class="flex flex-col">
          <div
            class="h-[225px] w-[448px] translate-y-[-145px] border-[6px] border-[#1360A1] border-solid bg-white px-[18px] py-[12px]"
          >
            <div class="flex items-center">
              <div class="h-[77.575px] w-[270px]">
                <img
                  src="@/assets/images/logistics-business/logo.png"
                  alt=""
                />
              </div>
              <div
                class="font-NotoSansJP ml-[16px] text-[20px] font-[900] text-[#44546A]"
              >
                MQ
              </div>
            </div>
            <div class="flex px-[12px]">
              <div class="h-[10px] w-[248px] bg-[#145F9E]"></div>
              <div class="ml-[4px]">
                <img
                  src="@/assets/images/logistics-business/line_1.svg"
                  alt=""
                />
              </div>
            </div>
            <div
              class="font-NotoSansJP mt-[16px] px-[12px] text-[20px] font-[900] text-[#44546A]"
            >
              TMS | WMS
            </div>
            <div class="mt-[32px] flex px-[12px]">
              <div class="h-[20px] w-[148px] bg-[#145F9E]"></div>
              <div class="ml-[6px]">
                <img
                  src="@/assets/images/logistics-business/line_2.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="mt-[20px] translate-y-[-145px]">
            <ul>
              <li
                v-for="item in ListData2"
                :key="item.list"
                class="font-NotoSansJP flex text-[16px] leading-[32px] font-[400px] text-white"
              >
                <div class="mt-[8px] min-w-[16px]">
                  <img
                    src="@/assets/images/logistics-business/list_icon.svg"
                    alt=""
                  />
                </div>
                <p class="ml-[10px]">
                  {{ item.list }}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-[960px] flex flex-col translate-y-[-80px] items-end">
          <div class="w-full flex justify-center">
            <GartnerCard :carddata="CardData1[0]" />
          </div>
          <div class="w-full flex justify-center">
            <GartnerCard :carddata="CardData2[0]" />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// import Iamge1 from '@/assets/images/logistics-business/image1.png'
// import Iamge2 from '@/assets/images/logistics-business/image2.png'
// import Iamge3 from '@/assets/images/logistics-business/image3.png'
// import Iamge4 from '@/assets/images/logistics-business/image4.png'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
// import GartnerCard from './GartnerCard.vue'
// import { GartnerCardType } from '../types/index'
import { ChallengesType } from '../types/index'

import Change3 from '@/assets/images/logistics-business/Change_3.jpg'

const ChallengesData = ref<ChallengesType[]>([
  {
    Image: Change3,
    content: [
      {
        list: '20年以上における開発・導入、中国特有のマネジメントと海外企業の先進的マネジメントを組み合わせ、ハイテク製品を融合することで最大限のパフォーマンスを発揮。常に最新のテクノロジーを追求'
      },
      {
        list: '3000社以上へ導入し、庫内オペレーション最適化はもとよりサプライチェーン全体での最適化も可能とし、物流品質アップ、物流コストダウン、企業価値・ブランド力アップを実現'
      }
    ]
  }
])
// const ListData2 = ref<ListType[]>([
//   { list: 'Gartner 2019年W賞MS賞中国大陸トップ入賞企業' },
//   { list: 'Gartner 2019年TMS賞アジア唯一入賞企業' },
//   { list: 'Gartner 2019年W賞MS賞中国大陸トップ入賞企業' },
//   { list: 'Gartner 2018年TMS報告“もっとも注目される企業”' }
// ])

// const CardData1 = ref<GartnerCardType[]>([
//   {
//     BackgroundImage: Iamge1,
//     className: 'w-[320px]',
//     title_1: '無人',
//     title_2: 'フォ—クリフト'
//   }
// ])

// const CardData2 = ref<GartnerCardType[]>([
//   {
//     BackgroundImage: Iamge2,
//     className: 'w-[320px]',
//     title_1: '無人',
//     title_2: 'フォ—クリフト'
//   },
//   {
//     BackgroundImage: Iamge3,
//     className: 'w-[160px]',
//     title_1: '無人',
//     title_2: 'フォ—クリフト'
//   },
//   {
//     BackgroundImage: Iamge4,
//     className: 'w-[160px]',
//     title_1: '無人',
//     title_2: 'フォ—クリフト'
//   }
// ])
</script>
<style lang=""></style>
