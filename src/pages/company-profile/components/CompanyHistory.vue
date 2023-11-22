<template>
  <div class="company_profile_content">
    <div class="company_history_title">会社 · 沿革</div>
    <div class="m_t_60 company_history_data">
      <ul class="company_history_data_box">
        <li
          v-for="item in CompanyHistoryData"
          :key="item.id"
          :class="{ m_t_60: item.id !== 1 }"
          class="company_history_data_list"
        >
          <p
            :class="item.year_style"
            class="year_text"
          >
            {{ item.year }}
          </p>
          <div class="content_text">
            <div
              v-for="(items, index) in item.content"
              :key="items.month"
              :class="
                index === 0 ? items.text_color : items.text_color + ' m_t_60'
              "
              class="company_history_data_content company_history_data_content_text"
            >
              <div
                style="font-weight: 400"
                class="month"
                :class="items.text_color_2"
              >
                {{ items.month }}
              </div>
              <div
                class="point"
                :class="items.point_color"
              ></div>
              <div>
                <p>{{ items.list_data }}</p>
                <p :class="items.text_color_2">
                  {{ items.list_data_2 }}
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

interface CompanyHistoryContentType {
  month: string
  list_data: string
  text_color: string
  point_color: string
  list_data_2?: string
  text_color_2?: string
}

interface CompanyHistoryType {
  id: number
  year: number
  year_style: string
  content: CompanyHistoryContentType[]
}

const CompanyHistoryData = ref<CompanyHistoryType[]>([
  {
    id: 1,
    year: 2022,
    year_style: 'year_1',
    content: [
      {
        month: '12月',
        list_data: '上海電力日本株式会社との取引開始',
        text_color: 'list_color_1',
        point_color: 'point_color_1'
      }
    ]
  },
  {
    id: 2,
    year: 2021,
    year_style: 'year_1',
    content: [
      {
        month: '10月',
        list_data: '大連大手経緯信息技術有限会社設立',
        text_color: 'list_color_1',
        point_color: 'point_color_1'
      }
    ]
  },
  {
    id: 3,
    year: 2020,
    year_style: 'year_1',
    content: [
      {
        month: '8月',
        list_data: 'サイフ株式会社設立',
        text_color: 'list_color_1',
        point_color: 'point_color_1'
      }
    ]
  },
  {
    id: 4,
    year: 2018,
    year_style: 'year_1',
    content: [
      {
        month: '9月',
        list_data: '青島仙手康復有限会社設立',
        text_color: 'list_color_1',
        point_color: 'point_color_1'
      }
    ]
  },
  {
    id: 5,
    year: 2017,
    year_style: 'year_1',
    content: [
      {
        month: '1月',
        list_data: '日本仙手養老株式会社設立',
        text_color: 'list_color_1',
        point_color: 'point_color_1'
      }
    ]
  },
  {
    id: 6,
    year: 2013,
    year_style: 'year_2',
    content: [
      {
        month: '6月',
        list_data: 'プライバシーマーク認定を更新',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      }
    ]
  },
  {
    id: 7,
    year: 2011,
    year_style: 'year_3',
    content: [
      {
        month: '6月',
        list_data: 'プライバシーマーク認定を更新',
        text_color: 'list_color_3',
        point_color: 'point_color_3'
      },
      {
        month: '3月',
        list_data:
          '中国進出を実施する企業に対し、東京イノベーション＆テクノロジー株式会社と連携し、上海にて中国進出戦略会議を実施',
        text_color: 'list_color_1',
        point_color: 'point_color_1'
      }
    ]
  },
  {
    id: 8,
    year: 2010,
    year_style: 'year_2',
    content: [
      {
        month: '8月',
        list_data: '株式会社電通国際情報サービスとの取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '6月',
        list_data: 'ISO9001、ISO27001取得（青島子会社）',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      }
    ]
  },
  {
    id: 9,
    year: 2009,
    year_style: 'year_2',
    content: [
      {
        month: '9月',
        list_data: 'ＴＩＳ株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '6月',
        list_data: 'クラリオン株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      }
    ]
  },
  {
    id: 10,
    year: 2008,
    year_style: 'year_2',
    content: [
      {
        month: '12月',
        list_data: '東京都中央区新川一丁目に本社移転',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '6月',
        list_data: 'プライバシーマーク認定を取得',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      }
    ]
  },
  {
    id: 11,
    year: 2007,
    year_style: 'year_2',
    content: [
      {
        month: '4月',
        list_data: '野村総合研究所株式会社とのオフショア開発（青島子会社）開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '3月',
        list_data: '資本金5,000万円に増資',
        text_color: 'list_color_3',
        point_color: 'point_color_3'
      }
    ]
  },
  {
    id: 11,
    year: 2006,
    year_style: 'year_2',
    content: [
      {
        month: '11月',
        list_data:
          '日本電気株式会社と共同出資で青島大手海恩信息技術有限公司を設立。',
        text_color: 'list_color_2',
        point_color: 'point_color_2',
        list_data_2: 'ソフトウエアのオフショア開発を本格的に展開。',
        text_color_2: 'list_color_2'
      }
    ]
  },
  {
    id: 12,
    year: 2005,
    year_style: 'year_2',
    content: [
      {
        month: '9月',
        list_data:
          'ＮＥＣトータルインテグレーションサービス株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '9月',
        list_data: '株式会社三洋ヒューマンネットワークとの取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '8月',
        list_data: '日本電気システム建設株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '5月',
        list_data: '富士ソフトＡＢＣ株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '2月',
        list_data: '日本電気株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      }
    ]
  },
  {
    id: 13,
    year: 2004,
    year_style: 'year_2',
    content: [
      {
        month: '6月',
        list_data: '東京都中央区日本橋茅場町二丁目移転',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '5月',
        list_data: 'ＨＯＹＡ株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      }
    ]
  },
  {
    id: 14,
    year: 2003,
    year_style: 'year_2',
    content: [
      {
        month: '11月',
        list_data: 'NEC ネクサソリューションズ株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '10月',
        list_data: '住エレシステム東京株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '7月',
        list_data: '住友商事株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '5月',
        list_data: '『華僑のいま』日中の文化のはざまで出版',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '2月',
        list_data: '日本電気株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      }
    ]
  },
  {
    id: 15,
    year: 2002,
    year_style: 'year_2',
    content: [
      {
        month: '12月',
        list_data: '日本システム建設株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '7月',
        list_data: '北京子会社大手計算機有限会社設立',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '7月',
        list_data: '中華人民共和国駐日本国大使館より感謝状を受ける',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      }
    ]
  },
  {
    id: 16,
    year: 1999,
    year_style: 'year_2',
    content: [
      {
        month: '10月',
        list_data: '中国 SOHU.COM 弊社と戦略パートナー締結',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '9月',
        list_data: '資本金 4,000 万円に増資',
        text_color: 'list_color_3',
        point_color: 'point_color_3'
      },
      {
        month: '7月',
        list_data: '日本システムウエア株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '6月',
        list_data: '住商情報システム株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      },
      {
        month: '2月',
        list_data: 'ＮＥＣソフト株式会社との取引開始',
        text_color: 'list_color_2',
        point_color: 'point_color_2'
      }
    ]
  },
  {
    id: 17,
    year: 1998,
    year_style: 'year_3',
    content: [
      {
        month: '2月',
        list_data:
          '株式会社ビッグハンズ　東京都中央区日本橋茅場町三丁目にて設立',
        text_color: 'list_color_2',
        point_color: 'point_color_3',
        list_data_2: '資本金 1,000 万円',
        text_color_2: 'list_color_4'
      }
    ]
  }
])
</script>

<style scoped>
.m_t_60 {
  margin-top: 60px;
}
.company_history {
  margin-top: 120px;
  width: 1200px;
}
.company_history_title {
  display: flex;
  padding: 24px 44px;
  background-color: #dfe4f2;
  justify-content: center;
  color: #071027;
  font-feature-settings: 'clig' off, 'liga' off;
  /* 正文二级标题medium */
  font-family: Noto Sans JP;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
}
.company_history_data {
  background-image: url('/src/assets/images/company_profile/history_line.svg');
  background-repeat: repeat-y;
  background-position: top -28px left 284px;
  background-size: auto 120%; /* 自动宽度，100% 高度，以确保垂直无缝重复 */
}
.company_history_data_box {
  margin: 0px;
  padding: 0;
  list-style-type: none;
}
.company_history_data_list {
  display: flex;
}
.year_text {
  width: 65px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  color: #fff;
  font-feature-settings: 'clig' off, 'liga' off;
  /* 正文三级标题 */
  font-family: Noto Sans JP;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.company_history_data_content {
  margin-left: 163px;
  height: 32px;
  display: flex;
}

.company_history_data_content_text {
  /* 正文段落 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}
.point {
  width: 5px;
  height: 5px;
  margin-top: 14px;
  margin-left: 19.5px;
  margin-right: 19.5px;
  border-radius: 100%;
}

.month {
  width: 35px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: end;
}
.year_1 {
  background-color: #6785c1;
}
.year_2 {
  background-color: #0e1b47;
}
.year_3 {
  background-color: #ff3f3f;
}
.list_color_1 {
  color: #6785c1;
}
.list_color_2 {
  color: #0e1b47;
}
.list_color_3 {
  color: #ff3f3f;
}
.point_color_1 {
  background-color: #6785c1;
}
.point_color_2 {
  background-color: #0e1b47;
}
.point_color_3 {
  background-color: #ff3f3f;
}
.list_color_4 {
  color: #ff3f3f;
  font-feature-settings: 'clig' off, 'liga' off;

  /* 正文段落 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
}
@media screen and (max-width: 1300px) {
  .company_profile_content {
    width: 80%;
  }
  .company_history_data_content {
    margin-left: 0px;
    height: auto;
    margin-top: 20px;
  }
  .company_history_data {
    background-image: none;
  }
  .company_history_data_list {
    flex-wrap: wrap;
  }
  .year_text {
    width: 100%;
  }
  .point {
    min-width: 5px;
    min-height: 5px;

    margin: 15px 10px 0 10px;
  }
  .content_text {
    width: 100%;
  }
  .month {
    min-width: 15%;
    justify-content: start;
  }
}
</style>
