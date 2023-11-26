<template>
  <div
    id="SiServiceBusiness"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      先進SIサービス
    </div>
    <div
      class="font-NotoSansJP mt-[30px] w-full text-[18px] leading-[32px] font-[400]"
    >
      <p>
        これまでの、さまざまな業種・業界のシステム構築経験を活かし、導入フェーズから構築・運用・保守まで一貫したSIサービスを提供しております。
      </p>
      <p class="mt-[30px]">
        領域・工程によっては、オフショアを最大限活用し、お客様の企業価値最大化へも貢献しております。
      </p>
    </div>
    <div class="mt-[60px] min-h-[360px] w-full flex justify-between">
      <div class="w-[calc(50%-15px)] flex">
        <ul>
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
      <div class="w-[calc(50%-15px)] flex justify-start">
        <div class="w-full">
          <img
            src="@/assets/images/si-service-business/si_1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div
      class="font-NotoSansJP mt-[30px] w-full text-[18px] leading-[32px] font-[400]"
    >
      このように、IT技術の進化が激しいこの時代に、SPEED感をもって、これまでの経験値、最先端のIT技術、オフショアリソースPOWERを最大限活用し、お客様の要望に沿ったシステム構築を行っております
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
    list: 'クラウドサービス/Webアプリ開発等、従来のシステム開発に留まらず、AIを⽤いたデータマイニングや機械学習を取り⼊れたロボット技術の開発等、最先端分野（生成AI開発基盤構築や応用など）への取組み'
  },
  {
    list: '流通・小売り業界においてはPOS開発にも注力しており、大部分の大手POSメーカ上での開発実績'
  },
  {
    list: '稼働後の保守・運用サービスに関して、ランニングコスト削減のため、オフショアを活用したサービス提供'
  },
  {
    list: 'オフショア活用においては、コミュニケーションロス、品質ロスがないよう全社横断で徹底したプロジェクト管理による品質・工期の担保'
  }
])
</script>
<style>
.test {
  width: calc();
}
</style>
