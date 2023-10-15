<template>
  <div class="page">
    <TheHeader
      class="Header"
      :checked="1"
    />
    <div class="message_from_president_main">
      <sub-page-title :data="SubPageTitleData" />
    </div>
    <div class="company_profile_main">
      <div class="company_profile_content">
        <div class="company_profile_main_title">会社 · 概要</div>
        <div
          v-for="item in CompanyProfile"
          :key="item.id"
          class="company_profile_box"
        >
          <div class="company_profile_box_content">
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
                      'src/assets/images/company_profile/' +
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
      </div>
    </div>
    <the-back-top />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface SubPageTitleType {
  TitleCn: string
  TitleEn: string
  ImgSrc: string
}
interface ContentType {
  list: string
  list_icon: string
}
interface CompanyProfileType {
  id: number
  title: string
  content: ContentType[]
}

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn: '会社 · 概要',
  TitleEn: 'Company Profile',
  ImgSrc: 'Company_Profile'
})

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
        list_icon: 'link'
      },
      {
        list: 'info@bighandz.co.jp',
        list_icon: 'mail'
      }
    ]
  },
  {
    id: 3,
    title: '代表取締役',
    content: [
      {
        list: '潘　若衛(ハン　ジャクエイ)',
        list_icon: ''
      },
      {
        list: '取締役：福沢　雅子（フクザワ　マサコ）',
        list_icon: ''
      },
      {
        list: '取締役：呉　勇（ゴ　ユウ）',
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
        list_icon: 'rhombic'
      },
      {
        list: '各種の情報提供システム及び情報提供システムの開発、制作、保守、販売',
        list_icon: 'rhombic'
      },
      {
        list: '情報処理システム開発の計画作成又はプログラムの設計技術者の支援貿易関連事業',
        list_icon: 'rhombic'
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
        list_icon: 'link_2'
      }
    ]
  }
])
</script>

<style scoped>
ul li {
  list-style-type: none;
}
hr {
  color: #dfe4f2;
}
.page {
  width: 100%;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.Header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
}
.message_from_president_main {
  width: 100%;
  height: auto;
  background: #0e1b47;
  display: flex;
  justify-content: center;
}
.company_profile_main {
  margin-top: 120px;
  margin-bottom: 240px;
  display: flex;
  justify-content: center;
}
.company_profile_content {
  width: 1200px;
}
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
  margin: 30px 0;
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
  margin-top: 30px;
  display: flex;
  align-items: center;
  color: #0e1b47;
  /* 正文段落 */
  font-family: Noto Sans JP;
  font-size: 16px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}
@media screen and (max-width: 1300px) {
  .company_profile_content {
    width: 80%;
  }
}
</style>
