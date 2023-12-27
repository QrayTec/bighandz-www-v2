<template>
  <div class="font-NotoSansJP mt-[60px] w-full">
    <div class="w-full">
      <div class="w-full flex justify-center">
        <img
          class="w-[320px] md:w-[400px]"
          src="@/assets/images/logistics-business/ManageMentPhone.png"
        />
      </div>
      <div class="w-full flex flex-col">
        <div class="mt-[30px] md:mt-0">
          <div
            v-for="(item, index) in ManagementData"
            :key="index"
            :class="item.ClassName"
            class="mt-[15px] px-[15px] py-[10px] text-[1rem] leading-normal font-[400]"
          >
            <div class="font-[700]">{{ item.title }}</div>
            <div class="mt-[10px]">{{ item.Content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ManagementPhoneType } from '../types/index'

const ManagementData = ref<ManagementPhoneType[]>([
  {
    ClassName: 'bg-[#DCECC9] text-deep_blue',
    title: '輸配送管理システム（TMS）',
    Content:
      '集荷、幹線、小口貨物、配車、積替え、配送など輸計画の最適化とモニタリングを行う'
  },
  {
    ClassName: 'bg-[#AFDCCC] text-deep_blue',
    title: '倉庫管理システム（WMS）',
    Content:
      '倉庫内のオペレーションを高品質・効率的に管理。入荷から在庫、出荷、返品、棚卸といった一連の倉庫業務をサポート'
  },
  {
    ClassName: 'bg-[#78C6D0] text-deep_blue',
    title: '物流費管理システム（BMS）',
    Content:
      '費用率マスタ、課金ロジックエンジンにより、倉庫運営、運送関連費用の計算を行う'
  },
  {
    ClassName: 'bg-[#AFDCCC] text-deep_blue',
    title: '倉庫管理システム（WMS）',
    Content:
      '倉庫内のオペレーションを高品質・効率的に管理。入荷から在庫、出荷、返品、棚卸といった一連の倉庫業務をサポート'
  },
  {
    ClassName: 'bg-[#289DC7] text-white',
    title: 'ルート管理システム（ROS）',
    Content:
      'AIを活用し、分単位での最適な配送計画を立案しコストダウンを可能とする'
  },
  {
    ClassName: 'bg-[#0E1B47] text-white',
    title: 'e-Hubインタフェースプラットフォーム',
    Content:
      '異るシステム間での連携を迅速に実現するためのクラウドベースのインターフェースプラットフォーム'
  },
  {
    ClassName: 'bg-[#183F7A] text-white',
    title: 'クラウドプラットフォーム',
    Content:
      'vTradExサブブランドとして、クラウドにてWMS、TMS、ROSなどの機能をモバイルアプリにて利用可能'
  },
  {
    ClassName: 'bg-[#2371AD] text-white',
    title: '倉庫運用管理システム（WES）',
    Content:
      'マテハンメーカーのWCSと連携し、リアルタイムにAGVやアームロボットなどのマテハン機械のコントロール及び監視を行う'
  },
  {
    ClassName: 'bg-[#85CBCF] text-deep_blue',
    title: 'オーダー管理システム（OMS）',
    Content:
      'オーダーコントロール、倉庫・配送会社割当、在庫一元管理、トレーサビリティ、KPI分析を可能とする'
  }
])
</script>
<style lang=""></style>
