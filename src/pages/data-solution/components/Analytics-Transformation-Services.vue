<template>
  <div
    class="font-NotoSansJP"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle>
      生成AIを活用したアセンブラ解析・変換サービス
    </ThePageMinTitle>
    <div class="mt-[30px]">
      <div class="w-[654px] text-[1rem] leading-[2rem] font-[400]">
        生成AIによる変換処理の説明責任（アカウンタビリティー）を考慮し、変換ソース作成とあわせて構造解析レポートおよびロジック解析レポートも作成します。
      </div>
      <div class="mt-[60px] flex justify-center">
        <img
          class="w-[1000px] object-contain"
          src="@/assets/images/data-solution/AnalyticsTransformationServices_1.png"
          alt=""
        />
      </div>
    </div>
    <div
      class="text-deep_blue mt-[120px] text-[1rem] leading-[2rem] font-[400]"
    >
      <div>
        <p>ビッグデータ解析・分析</p>
        <p>人工知能・機械学習の導入・開発</p>
        <p>ビジネスインテリジェンス（BI）の導入・開発</p>
      </div>
      <div class="mt-[40px]">
        <p>ビッグデータ×AI</p>
        <p>IoT（Internet of Things）/ CPS（Cyber-physical System ）</p>
        <p>デジタル・ビジネス・プラットフォーム</p>
        <p>コンテナ×マイクロサービス</p>
        <p>SaaS/API クラウド・コンピューティング PaaS/FaaS</p>
        <p>サイバー･セキュリティ</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>
