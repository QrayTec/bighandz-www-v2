<template>
  <div
    id="SiServiceBusiness"
    data-aos="fade-in"
    class="font-NotoSansJP w-full px-[15px] lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle data-aos="fade-right">先進SIサービス</ThePageMinTitle>

    <div
      class="text-deep_blue mt-[30px] text-[1rem] leading-[32px] font-[400]"
      data-aos="fade-right"
    >
      <p>
        これまでの、さまざまな業種・業界のシステム構築経験を活かし、導入フェーズから構築・運用・保守まで一貫したSIサービスを提供しております。
      </p>
      <br />
      <p>
        領域・工程によっては、オフショアを最大限活用し、お客様の企業価値最大化へも貢献しております。
      </p>
    </div>
    <div
      class="text-deep_blue :flex-row mt-[30px] flex flex-col justify-between text-[1rem] leading-[32px] font-[400] lg:flex-row"
    >
      <div
        class="order-1 mt-[30px] flex flex-col lg:order-0 lg:mt-0 lg:w-[710px]"
        data-aos="fade-right"
      >
        <div
          v-for="(item, index) in ListData"
          :key="index"
          :class="index === 0 ? 'mt-[00px]' : 'mt-[30px]'"
          class="flex"
        >
          <TheIconList>{{ item.list }}</TheIconList>
        </div>
      </div>
      <div
        class="order-0 flex overflow-hidden lg:order-1 lg:w-[460px]"
        data-aos="fade-left"
      >
        <img
          class="min-w-full transition-all duration-800 ease-in-out hover:transform-scale-[1.2] hover:duration-800"
          src="@/assets/images/si-service-business/si_1.png"
          alt=""
        />
      </div>
    </div>
    <div
      data-aos="fade-right"
      class="text-deep_blue mt-[30px] text-[1rem] leading-[32px] font-[400]"
    >
      このように、IT技術の進化が激しいこの時代に、SPEED感をもって、これまでの経験値、最先端のIT技術、オフショアリソースPOWERを最大限活用し、お客様の要望に沿ったシステム構築を行っております。
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
