<template>
  <div class="w-full flex flex-col items-center justify-center">
    <div
      id="Technology"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <div class="max-w-[493px] bg-[#6785C1] px-[44px] py-[17px]">
        <p
          class="font-NotoSansJP text-[36px] leading-[54px] font-[500] text-white"
        >
          物流DXプラットフォーム
        </p>
      </div>
      <div class="mt-[60px]">
        <p class="font-NotoSansJP text-[20px] font-[700] text-[#071027]">
          最先端のテクノロジーで物流改革
        </p>
        <ul class="w-[680px]">
          <li
            v-for="item in ListData"
            :key="item.list"
            class="mt-[30px] flex"
          >
            <div class="mt-[5px] h-full min-w-[16px]">
              <img
                class="h-16px w-[16px]"
                src="@/assets/images/company_profile/rhombic.svg"
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
    <div
      class="mt-[205px] h-[480px] w-[1760px] flex justify-center bg-[#6785C1]"
    >
      <div :style="{ width: MAIN_CONTENT_WIDTH + 'px' }">
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

interface ListType {
  list: string
}

const ListData = ref<ListType[]>([
  {
    list: '20年以上における開発・導入、中国特有のマネジメントと海外企業の先進的マネジメントを組み合わせ、ハイテク製品を融合することで最大限のパフォーマンスを発揮。常に最新のテクノロジーを追求'
  },
  {
    list: '3000社以上へ導入し、庫内オペレーション最適化はもとよりサプライチェーン全体での最適化も可能とし、物流品質アップ、物流コストダウン、企業価値・ブランド力アップを実現'
  }
])
const ListData2 = ref<ListType[]>([
  { list: 'Gartner 2019年W賞MS賞中国大陸トップ入賞企業' },
  { list: 'Gartner 2019年TMS賞アジア唯一入賞企業' },
  { list: 'Gartner 2019年W賞MS賞中国大陸トップ入賞企業' },
  { list: 'Gartner 2018年TMS報告“もっとも注目される企業”' }
])
</script>
<style lang=""></style>
