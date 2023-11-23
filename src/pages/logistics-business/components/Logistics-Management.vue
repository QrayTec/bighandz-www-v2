<template>
  <div
    id="LogisticsManagement"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="h-[78px] max-w-[700px] flex items-center justify-center bg-[#6785C1] text-[36px] font-[500] text-white"
    >
      物流全般管理
    </div>
    <div
      class="font-NotoSansJP mt-[30px] text-[20px] font-[700] text-[#071027]"
    >
      vTradeExは物流マネージメントに必要な機能をすべて網羅できる構成となっています。
    </div>
    <div
      v-for="(item, index) in ManagementData"
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
            class="w-full p-[20px]"
            :style="{ background: items.Color }"
          >
            <p class="font-NotoSansJP text-[20px] font-[700]">
              {{ items.title }}
            </p>
            <p class="mt-[10px]">{{ items.list }}</p>
          </li>
        </ul>
      </div>
      <div class="w-[calc(50%-15px)]">
        <div class="h-full w-full flex items-center">
          <img
            class="w-full"
            :src="item.Image"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="mt-[120px] w-full">
      <div
        class="font-NotoSansJP w-[654px] text-[16px] leading-[32px] font-[400]"
      >
        物流戦略の策定からシステム構築、保守・運用サービス、倉庫運営支援まで一気通貫でお客様にサービスを提供します
      </div>
      <div class="mt-[60px] w-full flex justify-center">
        <img
          src="@/assets/images/logistics-business/pic_2.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { ManagementType } from '../types/index'
import Change4 from '@/assets/images/logistics-business/Change_4.png'

const ManagementData = ref<ManagementType[]>([
  {
    Image: Change4,
    content: [
      {
        title: '輸配送管理システム（TMS）',
        Color: '#DCECC9',
        list: '集荷、幹線、小口貨物、配車、積替え、配送など輸計画の最適化とモニタリングを行う'
      },
      {
        title: 'オーダー管理システム（OMS）',
        Color: '#85CBCF',
        list: 'オーダーコントロール、倉庫・配送会社割当、在庫一元管理、トレーサビリティ、KPI分析を可能とする'
      },
      {
        title: '倉庫運用管理システム（WES）',
        Color: '#2371AD',
        list: 'マテハンメーカーのWCSと連携し、リアルタイムにAGVやアームロボットなどのマテハン機械のコントロール及び監視を行う'
      },
      {
        title: 'クラウドプラットフォーム',
        Color: '#289DC7',
        list: 'TradExサブブランドとして、クラウドにてWMS、TMS、ROSなどの機能をモバイルアプリにて利用可能'
      },
      {
        title: '倉庫管理システム（WMS）',
        Color: '#AFDCCC',
        list: '倉庫内のオペレーションを高品質・効率的に管理。入荷から在庫、出荷、返品、棚卸といった一連の倉庫業務をサポート'
      },
      {
        title: '物流費管理システム（BMS）',
        Color: '#78C6D0',
        list: '費用率マスタ、課金ロジックエンジンにより、倉庫運営、運送関連費用の計算を行う'
      },
      {
        title: 'ルート管理システム（ROS）',
        Color: '#289DC7',
        list: 'AIを活用し、分単位での最適な配送計画を立案しコストダウンを可能とする'
      }
    ]
  }
])
</script>
<style lang=""></style>
