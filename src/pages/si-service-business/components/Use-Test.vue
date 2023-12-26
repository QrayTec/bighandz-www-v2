<template>
  <div
    class="font-NotoSansJP px-[15px] lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="mt-[120px] w-full">
      <ThePageMinTitle3 data-aos="fade-right"
        >本自動化テストプラットフォームの利用
      </ThePageMinTitle3>
      <div
        data-aos="fade-up"
        class="text-cobalt_blue mt-[30px] text-[1rem] leading-[2rem] font-[400]"
      >
        <p>
          弊社が提供する自動テストプラットフォームはBDDコンセプト（行動駆動型開発）に基づいて設計・開発されております。
        </p>
        <p>
          大企業や中堅企業のテスト人件費を効果的に削減し、ビジネスイノベーションを促進することができました。
        </p>
        <p>
          銀行、証券、製造業などの企業で長年にわたり運用されています。以下の特徴を持っています。
        </p>
      </div>
      <div
        class="text-cobalt_blue mt-[30px] flex flex-col justify-between text-[1rem] leading-[2rem] font-[400] lg:flex-row"
      >
        <div
          class="order-1 mt-[30px] w-full lg:order-0 lg:mt-0 lg:w-[710px]"
          data-aos="fade-right"
        >
          <TheIconList
            v-for="(item, index) in AutomationTestData"
            :key="index"
            :class="index === 0 ? '' : 'mt-[30px]'"
          >
            {{ item.list }}
          </TheIconList>
        </div>
        <div
          v-if="MAIN_CONTENT_WIDTH === 1200"
          data-aos="fade-left"
          class="order-0 w-full flex flex-col items-center justify-end text-[1.5rem] leading-[30px] font-[700] text-white lg:order-1 lg:w-[460px]"
        >
          <div class="z-10 w-[160px]">
            <div
              class="bg-AutomationTest_top_1 z-8 h-[19.5px] w-[160px] translate-y-[50%] rounded-[50%]"
            ></div>
            <div
              class="bg-AutomationTest_1 z-7 h-[85px] w-full flex items-center justify-center"
            >
              <p class="w-full text-center">工数の削減</p>
            </div>
          </div>
          <div class="z-9 w-[260px] translate-y-[-25%]">
            <div
              class="bg-AutomationTest_top_2 z-6 h-[31.7px] w-[260px] translate-y-[50%] rounded-[50%]"
            ></div>
            <div
              class="bg-AutomationTest_2 z-5 h-[106px] w-full flex items-center justify-center"
            >
              <p class="w-full text-center">時間コストの軽減</p>
            </div>
          </div>
          <div class="z-8 w-[360px] translate-y-[-50%]">
            <div
              class="bg-AutomationTest_top_3 z-6 h-[43.5px] w-[360px] translate-y-[50%] rounded-[50%]"
            ></div>
            <div
              class="bg-AutomationTest_3 z-5 h-[119px] w-full flex items-center justify-center"
            >
              <p class="w-full text-center">品質向上</p>
            </div>
          </div>
          <div class="z-7 w-[460px] translate-y-[-75%]">
            <div
              class="bg-AutomationTest_top_4 z-6 h-[56px] w-[460px] translate-y-[50%] rounded-[50%]"
            ></div>
            <div
              class="bg-AutomationTest_4 z-5 h-[139px] w-full flex items-center justify-center"
            >
              <p class="w-full text-center">リスクの低減</p>
            </div>
          </div>
        </div>
        <div v-else>
          <img src="@/assets/images/si-service-business/Use-Test-M.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { ExperienceList } from '../types/index'

const AutomationTestData = ref<ExperienceList[]>([
  { list: '繰り返すテスト作業が機械に置き換えられます' },
  { list: '手動ではカバーできないテスト範囲' },
  { list: 'テストレポートを自動生成' },
  { list: '多数のテストケースを迅速に実行できる' },
  { list: '人間の介入なしでバッチで実行可能' },
  { list: '製品に対して、厳格かつ全面的なテストを実施' },
  {
    list: 'テスターはケース設計、プロセス設計、およびより深いテスト作業に重点を置きます'
  },
  { list: '頻繁なコード改修による多数の回帰テスト' },
  { list: '手動テストのリスクが大幅に減少' }
])
</script>
<style lang=""></style>
