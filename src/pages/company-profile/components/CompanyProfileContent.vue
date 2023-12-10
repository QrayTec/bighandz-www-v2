<template>
  <div
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    class="font-NotoSansJP"
  >
    <div
      class="text-cobalt_blue w-full bg-[#DFE4F2] px-[44px] py-[24px] text-center text-[1.5rem] leading-[1.875rem] font-[700]"
    >
      会社 · 概要
    </div>
    <div
      v-for="item in CompanyProfile"
      :key="item.id"
      class="company_profile_box"
    >
      <div class="my-[15px] flex justify-center">
        <div
          class="text-cobalt_blue w-[340px] text-[1.25rem] leading-normal font-[400]"
        >
          {{ item.title }}
        </div>
        <div class="w-[calc(100%-340px)]">
          <ul>
            <li
              v-for="(contentItem, i) in item.content"
              :key="contentItem.list"
              :class="i == 0 ? '' : 'mt-[10px]'"
              class="text-deep_blue flex items-center text-[1rem] leading-[2rem] font-[400]"
            >
              {{ contentItem.list }}
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div class="text-deep_blue text-[1rem] leading-[2rem] font-[400]">
      派遣法上の表示
      「労働者派遣事業の適正な運営の確保及び派遣労働者の保護等に関する法律」の定めに従い、当社の派遣料金のマージン率について情報提供致します。<br />
      当社のマージン率：29.8%<br />
      ※計算式…「派遣料金の平均額－派遣労働者の賃金の平均額」÷派遣料金の平均額
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

interface ContentType {
  list: string
  list_icon: string
}
interface CompanyProfileType {
  id: number
  title: string
  content: ContentType[]
}

// interface BanksType {
//   id: number
//   bank_name: string
//   bank_store_name: string
//   capital_number: string
// }

const CompanyProfile = ref<CompanyProfileType[]>([
  {
    id: 1,
    title: '会社名',
    content: [
      {
        list: '株式会社ビッグハンズ',
        list_icon: ''
      },
      {
        list: '(英文名：BIGHANDZ CO.,LTD.)',
        list_icon: ''
      }
    ]
  },
  {
    id: 2,
    title: '住所',
    content: [
      {
        list: '〒104-0033 東京都中央区新川1丁目28番25号 東京ダイヤビルディング3号館2F',
        list_icon: ''
      },
      {
        list: 'TEL：03-6228-3468    FAX：03-6228-3469',
        list_icon: ''
      },
      {
        list: 'http://www.bighandz.co.jp',
        list_icon: ''
      }
    ]
  },
  {
    id: 3,
    title: '役員',
    content: [
      {
        list: '代表取締役: 潘　若衛',
        list_icon: ''
      },
      {
        list: '取締役: 福沢　雅子',
        list_icon: ''
      },
      {
        list: '取締役: 呉　勇',
        list_icon: ''
      }
    ]
  },
  {
    id: 4,
    title: '設立年月日',
    content: [
      {
        list: '1998年12月11日',
        list_icon: ''
      }
    ]
  },
  {
    id: 5,
    title: '資本金',
    content: [
      {
        list: '5,000万円',
        list_icon: ''
      }
    ]
  },
  {
    id: 6,
    title: '社員数',
    content: [
      {
        list: '500名 (グループ全体)',
        list_icon: ''
      }
    ]
  },
  {
    id: 7,
    title: '事業内容',
    content: [
      {
        list: '情報処理事業',
        list_icon: ''
      },
      {
        list: '各種コンピュータソフトの企画、開発、設計、保守並びに売買',
        list_icon: ''
      },
      {
        list: '各種の情報提供システム及び情報提供システムの開発、制作、保守、販売',
        list_icon: ''
      },
      {
        list: '情報処理システム開発の計画作成又はプログラムの設計技術者の支援貿易関連事業',
        list_icon: ''
      }
    ]
  },
  {
    id: 8,
    title: 'プライバシーマーク登録番号',
    content: [
      {
        list: '第１０８２３２６９（０７）号',
        list_icon: ''
      }
    ]
  },
  {
    id: 9,
    title: '労働者派遣事業許可番号',
    content: [
      {
        list: '派１３-３０２８７４',
        list_icon: ''
      }
    ]
  }
])

// const BanksData = ref<BanksType[]>([
//   {
//     id: 1,
//     bank_name: '三菱東京UFJ銀行',
//     bank_store_name: '日本橋支店',
//     capital_number: '普通預金No.1894324'
//   },
//   {
//     id: 2,
//     bank_name: '三井住友銀行',
//     bank_store_name: '日本橋東支店',
//     capital_number: '普通預金No.7317692'
//   }
// ])
</script>

<style scoped></style>
