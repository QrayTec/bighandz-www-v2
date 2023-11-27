<template>
  <div class="company_profile_content">
    <div class="company_profile_main_title">会社 · 概要</div>
    <div
      v-for="item in CompanyProfile"
      :key="item.id"
      class="company_profile_box"
    >
      <div class="company_profile_box_content my-[15px]">
        <div class="company_profile_box_title">{{ item.title }}</div>
        <div class="company_profile_text">
          <ul>
            <li
              v-for="contentItem in item.content"
              :key="contentItem.list"
            >
              <img
                v-if="contentItem.list_icon"
                class="company_profile_icon"
                :src="
                  '/src/assets/images/company_profile/' +
                  contentItem.list_icon +
                  '.svg'
                "
                alt=""
              />
              {{ contentItem.list }}
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div class="company_profile_clarification">
      派遣法上の表示
      「労働者派遣事業の適正な運営の確保及び派遣労働者の保護等に関する法律」の定めに従い、当社の派遣料金のマージン率について情報提供致します。<br />
      当社のマージン率：29.8%<br />
      ※計算式…「派遣料金の平均額－派遣労働者の賃金の平均額」÷派遣料金の平均額
    </div>

    <!-- <div class="m_t_30 main_banks">
      <div class="main_banks_title">主要取引銀行</div>
      <div
        v-for="item in BanksData"
        :key="item.id"
        class="main_banks_create"
      >
        <div class="m_t_30 m_b_30 main_banks_data">
          <p class="main_banks_data_li">{{ item.bank_name }}</p>
          <p class="main_banks_data_li">{{ item.bank_store_name }}</p>
          <p class="main_banks_data_li main_banks_data_li_last">
            {{ item.capital_number }}
          </p>
        </div>
        <hr />
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

<style scoped>
.company_profile_main_title {
  display: flex;
  width: 100%;
  padding: 24px 44px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #dfe4f2;
  /* 正文二级标题medium */
  font-family: Noto Sans JP;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
  color: #071027;
}
.company_profile_box_content {
  display: flex;
  justify-content: center;
}
.company_profile_box_title {
  width: 28.3%;
  color: #071027;
  /* 正文三级标题 */
  font-family: Noto Sans JP;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.company_profile_text {
  width: 71.7%;
}
.company_profile_text li {
  margin-top: 10px;
  display: flex;
  align-items: center;
  color: #0e1b47;
  /* 正文段落 */
  font-family: Noto Sans JP;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}
.company_profile_text li:first-child {
  margin-top: 0px;
}
.company_profile_icon {
  width: 16px;
  height: 12px;
  margin: 10px 10px 10px 0px;
}
.company_profile_clarification {
  color: #0e1b47;
  font-family: Noto Sans JP;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}

.main_banks_title {
  padding: 24px 30px;
  background-color: #dfe4f2;
  color: #071027;
  /* 正文二级标题medium */
  font-family: Noto Sans JP;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
}
.main_banks_data {
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
}
.main_banks_data_li {
  width: 196px;
  color: #071027;
  font-feature-settings: 'clig' off, 'liga' off;
  /* 正文三级标题 */
  font-family: Noto Sans JP;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media screen and (max-width: 1300px) {
  .company_profile_content {
    width: 80%;
  }
}
</style>
