<template>
  <div
    id="AutomatedTestingTools"
    data-aos="fade-in"
    class="font-NotoSansJP w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle data-aos="fade-right">
      携帯アプリテスト自動化ツール
    </ThePageMinTitle>
    <div class="mt-[60px] w-full">
      <ThePageMinTitle3 data-aos="fade-right"
        >携帯アプリテストの課題</ThePageMinTitle3
      >
      <div class="mt-[60px] flex justify-between">
        <div
          class="w-[710px]"
          data-aos="fade-right"
        >
          <div
            v-for="(item, index) in MobileData"
            :key="index"
            :class="index === 0 ? '' : 'mt-[40px]'"
            class="text-cobalt_blue text-[1rem] leading-[2rem]"
          >
            {{ item.list }}
          </div>
          <div class="text-cobalt_blue text-[1rem] font-[700]">
            テストリソースを有効的に活用し、
            多次元の検査やテストを実行し、手動の作業負荷を軽減し、継続的に開発品質をモニタリングする機能
            が緊急のニーズとなっています。
          </div>
        </div>
        <div
          class="w-[460px] overflow-hidden"
          data-aos="fade-left"
        >
          <img
            class="transition-all duration-800 ease-in-out hover:transform-scale-[1.2] hover:duration-800"
            src="@/assets/images/si-service-business/si_2.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="mt-[120px] w-full">
      <ThePageMinTitle3 data-aos="fade-right"
        >携帯テスト自動化ツール</ThePageMinTitle3
      >
      <div class="mt-[30px] flex justify-between">
        <div
          class="w-[460px] overflow-hidden"
          data-aos="fade-right"
        >
          <img
            class="transition-all duration-800 ease-in-out hover:transform-scale-[1.2] hover:duration-800"
            src="@/assets/images/si-service-business/si_5.png"
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          class="text-cobalt_blue w-[710px] text-[1rem] leading-[2rem] font-[400]"
        >
          <div>
            <p>
              弊社が提供する自動テストプラットフォームはBDDコンセプト（行動駆動型開発）に基づいて設計・開発されております。
            </p>
            <p>
              大企業や中堅企業のテスト人件費を効果的に削減し、ビジネスイノベーションを促進することができました。
            </p>
            <p>銀行、証券、製造業などの企業で長年にわたり運用されています。</p>
          </div>
          <div class="mt-[40px]">
            <p>以下の特徴を持っています。</p>
            <TheIconList
              v-for="(item, index) in AutomationToolData"
              :key="index"
              class="mt-[30px]"
              >{{ item.list }}</TheIconList
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { ExperienceList } from '../types/index'

const MobileData = ref<ExperienceList[]>([
  { list: '時代の進歩に伴い、モバイルテクノロジーは日々変化しております。' },
  {
    list: '携帯電話端末のメーカーや携帯モデルの数が多く、オペレーティングシステムの更新も早く、'
  },
  {
    list: 'モバイルアプリケーションのアップグレードも頻繁に行われるため、携帯アプリを開発する企業にとって、'
  },
  { list: 'テストのコストと効率の面でボトルネックとなっています。' }
])

const AutomationToolData = ref<ExperienceList[]>([
  { list: 'Webブラウザ：　Edge、IE、Google、Firefox、Safari対応' },
  { list: 'スピードが素早い、無人化' },
  { list: '自然言語で自動化スクリプトを作成' },
  { list: 'リモートで実機を操作' },
  { list: '稼働監視とリアルタイム監視' }
])
</script>
<style lang=""></style>
