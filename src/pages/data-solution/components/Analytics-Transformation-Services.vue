<template>
  <div
    class="font-NotoSansJP px-[15px] lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle3 data-aos="fade-up">
      生成AIを活用したアセンブラ解析・変換サービス
    </ThePageMinTitle3>
    <div
      class="mt-[30px]"
      data-aos="fade-up"
    >
      <div class="w-full text-[1rem] leading-[2rem] font-[400] lg:w-[654px]">
        生成AIによる変換処理の説明責任（アカウンタビリティー）を考慮し、変換ソース作成とあわせて構造解析レポートおよびロジック解析レポートも作成します。
      </div>
      <div class="mt-[60px] flex justify-center">
        <img
          v-if="MAIN_CONTENT_WIDTH === 1200"
          class="w-full object-contain lg:w-[1000px]"
          src="@/assets/images/data-solution/AnalyticsTransformationServices_1.png"
          alt=""
        />
        <photo-provider v-else>
          <photo-consumer
            intro="生成AIによる変換処理の説明責任（アカウンタビリティー）を考慮し、変換ソース作成とあわせて構造解析レポートおよびロジック解析レポートも作成します。"
            :src="AiCase1"
          >
            <img
              src="@/assets/images/data-solution/AnalyticsTransformationServices_1.png"
              class="view-box"
            />
          </photo-consumer>
        </photo-provider>
      </div>
    </div>
    <div
      data-aos="fade-up"
      class="text-deep_blue mt-[120px] text-[1rem] leading-[2rem] font-[400]"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import AiCase1 from '@/assets/images/data-solution/AnalyticsTransformationServices_1.png'
</script>
<style lang=""></style>
