<template>
  <div
    id="System-Development"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    class="font-NotoSansJP"
  >
    <ThePageMinTitle data-aos="fade-right"
      >システム開発の最新技術</ThePageMinTitle
    >
    <div
      class="flex flex-wrap justify-between"
      data-aos="fade-right"
    >
      <div
        v-for="item in TechnologyData"
        :key="item.title"
        class="mt-[60px] w-[calc(50%-15px)]"
      >
        <div class="flex justify-between">
          <div class="w-[160px]">
            <img
              :src="item.Image"
              alt=""
              srcset=""
            />
          </div>
          <div class="w-[calc(100%-190px)]">
            <div class="text-cobalt_blue text-[1rem] leading-[2rem] font-[700]">
              {{ item.title }}
            </div>
            <div
              class="text-cobalt_blue mt-[10px] text-[1rem] leading-[32px] font-[400]"
            >
              {{ item.list }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import Technology1 from '@/assets/images/si-service-business/Technology1.png'
import Technology2 from '@/assets/images/si-service-business/Technology2.png'
import Technology3 from '@/assets/images/si-service-business/Technology3.png'
import Technology4 from '@/assets/images/si-service-business/Technology4.png'
import Technology5 from '@/assets/images/si-service-business/Technology5.png'
import { TechnologyType } from '../types/index'

const TechnologyData = ref<TechnologyType[]>([
  {
    Image: Technology1,
    title: 'コンテナ技術',
    list: 'コンテナ技術は、アプリケーションを仮想化して独立した環境で動作させることができる技術です。コンテナは、軽量で移植性が高く、システムのスケーラビリティや可用性を向上させることができます。'
  },
  {
    Image: Technology2,
    title: 'クラウドコンピューティング',
    list: 'クラウドコンピューティングは、インターネットを通じてコンピュータリソースを提供する技術です。クラウドサービスプロバイダーによって提供されるインフラストラクチャやプラットフォーム、ソフトウェアを利用することで、システム開発の効率性や柔軟性を向上させることができます。'
  },
  {
    Image: Technology3,
    title: 'コンテキスト駆動型サービス',
    list: 'コンテキスト駆動型サービスは、ユーザーの状況に応じて最適なサービスを提供するための技術です。ユーザーの位置情報やデバイスの種類、利用履歴などを分析して、ユーザーに最適な情報や機能を提供することができます。'
  },
  {
    Image: Technology4,
    title: '機械学習',
    list: '機械学習は、コンピュータにデータを学習させることで、自動的にパターンを認識し、予測を行う技術です。機械学習を活用することで、ビッグデータの分析や自動化、パーソナライズされたサービスの提供などが可能になります。'
  },
  {
    Image: Technology5,
    title: 'ブロックチェーン',
    list: 'ブロックチェーンは、分散型のデータベース技術で、改ざんや不正操作を防止することができます。ブロックチェーンを利用することで、セキュリティやトランザクションの透明性を向上させることができます。'
  }
])
</script>
<style lang=""></style>
