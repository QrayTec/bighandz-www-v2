<template>
  <div
    id="AutomatedTestingTools"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[600px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      携帯アプリテスト自動化ツール
    </div>
    <div
      v-for="(item, index) in ExperienceData"
      :key="index"
      class="mt-[60px] min-h-[360px] w-full flex flex-col justify-between"
    >
      <div class="font-NotoSansJP text-[36px] font-[700] text-[#071027]">
        {{ item.title }}
      </div>
      <div class="mt-[50px] h-auto w-full flex justify-between">
        <div
          :class="index % 2 != 0 ? 'order-1' : ''"
          class="w-[calc(50%-15px)] flex flex-col justify-end"
        >
          <ul class="h-full w-full flex flex-col justify-between">
            <li
              v-for="(items, i) in item.content"
              :key="i"
              class="mt-[30px] w-full flex px-[30px]"
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
        <div class="w-[calc(50%-15px)] flex items-end justify-center">
          <div class="max-h-[480px] min-h-[320px] w-[80%]">
            <img
              class="max-h-[480px] min-h-[320px]"
              :class="index === 2 ? 'w-[320px]' : 'w-full'"
              :src="item.Image"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { ExperienceType } from '../types/index'
import SI7 from '@/assets/images/si-service-business/si_7.jpg'
import SI5 from '@/assets/images/si-service-business/si_5.png'
import SI6 from '@/assets/images/si-service-business/si_6.png'

const ExperienceData = ref<ExperienceType[]>([
  {
    title: '携帯アプリテストの課題',
    Image: SI7,
    content: [
      { list: 'システム設計～開発～保守・運用' },
      {
        list: '時代の進歩に伴い、モバイルテクノロジーは日々変化しております。'
      },
      {
        list: '携帯電話端末のメーカーや携帯モデルの数が多く、オペレーティングシステムの更新も早く、モバイルアプリケーションのアップグレードも頻繁に行われるため、携帯アプリを開発する企業にとって、テストのコストと効率の面でボトルネックとなっています。 テストリソースを有効的に活用し、多次元の検査やテストを実行し、手動の作業負荷を軽減し、継続的に開発品質をモニタリングする機能が緊急のニーズとなっています。'
      }
    ]
  },
  {
    title: '携帯テスト自動化ツール',
    Image: SI5,
    content: [
      {
        list: '弊社が提供する自動テストプラットフォームはBDDコンセプト（行動駆動型開発）に基づいて設計・開発されております。大企業や中堅企業のテスト人件費を効果的に削減し、ビジネスイノベーションを促進することができました。銀行、証券、製造業などの企業で長年にわたり運用されています。以下の特徴を持っています。'
      },
      {
        list: 'Webブラウザ：　Edge、IE、Google、Firefox、Safari対応'
      },
      { list: 'スピードが素早い、無人化' },
      { list: '自然言語で自動化スクリプトを作成' },
      { list: 'リモートで実機を操作' },
      { list: '稼働監視とリアルタイム監視' }
    ]
  },
  {
    title: '本自動テストプラットフォームを利用すると',
    Image: SI6,
    content: [
      {
        list: '繰り返すテスト作業が機械に置き換えられます'
      },
      {
        list: '手動ではカバーできないテスト範囲'
      },
      { list: 'テストレポートを自動生成' },
      { list: '多数のテストケースを迅速に実行できる' },
      { list: '人間の介入なしでバッチで実行可能' },
      { list: '製品に対して、厳格かつ全面的なテストを実施' },
      {
        list: 'テスターはケース設計、プロセス設計、およびより深いテスト作業に重点を置きます。'
      },
      { list: '頻繁なコード改修による多数の回帰テスト' },
      { list: '手動テストのリスクが大幅に減少' }
    ]
  }
])
</script>
<style lang=""></style>
