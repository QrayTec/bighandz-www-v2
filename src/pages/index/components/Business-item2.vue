<template>
  <div class="font-NotoSansJP w-full">
    <div class="relative h-[314px] w-full">
      <div
        v-for="(item, index) in BusinessCompaniesData"
        :key="item.Title"
        :style="{ left: item.left, top: item.top }"
        class="group absolute inline-block"
      >
        <div
          class="z-1 h-[56px] w-[56px] opacity-100 transition duration-700 ease-in-out group-hover:(opacity-0)"
        >
          <div class="h-full w-full origin-center transform">
            <div
              class="h-full w-full flex flex-col cursor-pointer items-center justify-center bg-[url(@/assets/images/Business-Companies/Ball_2.svg)] bg-cover bg-no-repeat"
            >
              <img
                class="h-[24px] w-[24px]"
                :src="item.Icon1"
              />
            </div>
          </div>
        </div>
        <div
          class="absolute left-[50%] top-[50%] z-[3] h-[240px] w-[240px] translate-[-50%] opacity-0 transition duration-700 ease-in-out group-hover:(opacity-100)"
        >
          <div class="h-full w-full origin-center transform">
            <div
              class="h-full w-full flex flex-col cursor-pointer items-center justify-center bg-[url(@/assets/images/Business-Companies/Ball_2.svg)] bg-cover bg-no-repeat"
            >
              <img
                class="h-[24px] w-[24px]"
                :src="item.Icon2"
              />
              <div
                :class="index > 2 ? 'mt-[10px]' : 'mt-[5px]'"
                class="hidden text-center text-[14px] font-[400] text-white group-hover:block"
              >
                <div class="w-full text-[16px] font-[700]">
                  {{ item.Title }}
                </div>
                <div class="mt-[5px] text-start">
                  <ul>
                    <li
                      v-for="items in item.content"
                      :key="items.list"
                    >
                      {{ items.list }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { BusinessCompaniesType } from '../types/index'
import BusinessIcon1 from '@/assets/images/Business-Companies/Business_icon_1_1.svg'
import BusinessIcon2 from '@/assets/images/Business-Companies/Business_icon_1_2.svg'
import BusinessIcon3 from '@/assets/images/Business-Companies/Business_icon_2_1.svg'
import BusinessIcon4 from '@/assets/images/Business-Companies/Business_icon_2_2.svg'
import BusinessIcon5 from '@/assets/images/Business-Companies/Business_icon_3_1.svg'
import BusinessIcon6 from '@/assets/images/Business-Companies/Business_icon_3_2.svg'
import BusinessIcon7 from '@/assets/images/Business-Companies/Business_icon_4_1.svg'
import BusinessIcon8 from '@/assets/images/Business-Companies/Business_icon_4_2.svg'
import BusinessIcon9 from '@/assets/images/Business-Companies/Business_icon_5_1.svg'
import BusinessIcon10 from '@/assets/images/Business-Companies/Business_icon_5_2.svg'

const BusinessCompaniesData = ref<BusinessCompaniesType[]>([
  {
    top: '82.80%',
    left: '17.33%',
    Title: 'ITシステム開発',
    Icon1: BusinessIcon1,
    Icon2: BusinessIcon2,
    content: [
      { list: '証券/金融' },
      { list: '官庁/公共' },
      { list: '製造/流通' },
      { list: '医療/製薬/養老' },
      { list: 'ビッグデータ' },
      { list: 'DX（AI/データ分析）' },
      { list: 'SalesForce' }
    ]
  },
  {
    top: '36.30%',
    left: '32.16%',
    Title: 'ヘルスケア',
    Icon1: BusinessIcon3,
    Icon2: BusinessIcon4,
    content: [
      { list: 'リハビリステーション' },
      { list: '老人ホーム管理システム' },
      { list: '製造/流通' },
      { list: 'Intelligent Community' }
    ]
  },
  {
    top: '64.96%',
    left: '47.91%',
    Title: 'セルフサービス端末',
    Icon1: BusinessIcon5,
    Icon2: BusinessIcon6,
    content: [
      { list: '知恵点' },
      { list: 'IPS' },
      { list: 'スマト物流' },
      { list: 'スマートウォッチ' },
      { list: '自動券売機' },
      { list: '自動販売機' },
      { list: '無人店舗' }
    ]
  },
  {
    top: '28.66%',
    left: '66.91%',
    Title: '商品企画・販売',
    Icon1: BusinessIcon7,
    Icon2: BusinessIcon8,
    content: [
      { list: 'インバウンド商品' },
      { list: 'デジタルマーケティング' },
      { list: 'SNS＆EC' }
    ]
  },
  {
    top: '76.43%',
    left: '81.41%',
    Title: 'コンサルティング',
    Icon1: BusinessIcon9,
    Icon2: BusinessIcon10,
    content: [
      { list: '日中間の新規ビジネス開拓' },
      { list: '人材紹介' },
      { list: '顧客紹介' }
    ]
  }
])
</script>
<style lang=""></style>
