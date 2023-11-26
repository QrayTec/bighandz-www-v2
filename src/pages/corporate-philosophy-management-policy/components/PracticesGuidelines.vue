<template>
  <div class="Practices_guidelines">
    <div class="Realization_of_Corporate_Philosophy">
      <div class="Realization_title">企業理念の実現</div>
      <div class="Realization_min_text m_top_30">
        私たちは、よりお客様満足、より社員たちの喜び、永遠に追求します。<br /><br />
        私たちは、ＳＩ事業を通して、国、人種の垣根を越えた国際交流と経済発展に貢献します。
      </div>
      <div class="Our_Way">
        <div class="Realization_title">Our Way</div>
        <div class="Our_Way_Box_Main">
          <div
            v-for="item in OurWayData"
            :key="item.id"
            class="Our_Way_Box"
          >
            <div class="Our_Way_Content">
              <div
                :class="
                  item.id === 1
                    ? 'Our_Way_items_bg_fist Our_Way_items_bg_' + item.id
                    : 'Our_Way_items_bg_' + item.id
                "
                class="Our_Way_items_bg Our_Way_items"
              >
                <p :class="item.id === 1 ? 'Our_Way_items_bg_fist_title' : ''">
                  {{ item.title }}
                </p>
              </div>
              <div class="Our_way_item_text">
                <p :class="getClassByIndex(item.id)">
                  {{ item.content }}
                </p>
              </div>
            </div>
            <hr
              v-if="item.id !== 5"
              :class="'hr_w_' + item.id"
            />
          </div>
        </div>
        <div class="Employee_Code_of_Conduct m_top_60">
          <div class="Realization_title">社員行動規範</div>
          <div class="m_top_30">
            <ul>
              <li
                v-for="item in CriterionData"
                :key="item.id"
                class="Realization_min_text Employee_Code_of_Conduct_list"
              >
                {{ item.list }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface OurWayType {
  id: number
  title: string
  content: string
}
interface CriterionType {
  id: number
  list: string
}
const OurWayData = ref<OurWayType[]>([
  {
    id: 1,
    title: '顧客第一',
    content:
      'わたしたちは、顧客第一の姿勢を基盤とし、優れた情報技術サービス提供に努めます。'
  },
  {
    id: 2,
    title: '自己革新',
    content:
      'わたしたちは、たゆまぬ自己革新により、新しい企業価値の創造に挑戦します。'
  },
  {
    id: 3,
    title: '株主、社員、社会に報いる',
    content:
      'わたしたちは、総力を結集して自社業績の向上を図り、株主、社員、社会に報いることを使命とします。'
  },
  {
    id: 4,
    title: '活力ある組織作り',
    content:
      'わたしたちは、人材の育成と公正な評価を通じ、活力ある組織作りを目指します。'
  },
  {
    id: 5,
    title: '個性と創造力を尊重し',
    content:
      'わたしたちは、社員一人一人の個性と創造力を尊重し、可能性を大切にします。'
  }
])
const CriterionData = ref<CriterionType[]>([
  { id: 1, list: '１、明確な目標を持つ　　－　計画する' },
  { id: 2, list: '２．プラス発想する　　　－　やってみる' },
  { id: 3, list: '３．オーナー意識をもつ　－　参画、協力する' },
  { id: 4, list: '４．走りながら考える　　－　すぐやる' },
  { id: 5, list: '５．プロを目指す　　　　－　やり切る' },
  { id: 6, list: '６．感謝の気持ちを持つ　－　相手を尊重する' },
  { id: 7, list: '７．信頼関係をつくる　　－　時間を守る' }
])
const getClassByIndex = (index: number) => {
  switch (index) {
    case 1:
      return 'Our_way_item_text_1'
    case 2:
    case 5:
      return 'Our_way_item_text_2'
    case 3:
    case 4:
      return 'Our_way_item_text_3'
    default:
      return 'Our_way_item_text_2'
  }
}
</script>

<style scoped>
.philosophy_policy_box {
  width: 100%;
  margin-top: 120px;
  margin-bottom: 120px;
}
.Realization_of_Corporate_Philosophy {
  width: 1200px;
}

.Realization_title {
  color: #071027;
  /* 正文一级标题加粗 */
  font-family: Noto Sans JP;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.Realization_min_text {
  color: #071027;
  /* 正文一级标题加粗 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
}
.Our_Way {
  margin-top: 60px;
  padding: 0px 60px;
}
.Our_Way_Content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
hr {
  position: absolute;
  right: 0px;
  width: 500px;
  height: 2px;
  background-color: #92a7d2;
}
.hr_w_1 {
  width: 752px;
}
.hr_w_2 {
  width: 712px;
}
.hr_w_3 {
  width: 671px;
}
.hr_w_4 {
  width: 631px;
}
.Our_Way_Main {
  display: flex;
}
.Our_Way_Box {
  position: relative;
}
.Our_Way_Box_Main {
  transform: translateY(-20px);
}
.Our_Way_items_bg_1 {
  width: 156.03px;
  background-image: url('/src/assets/images/corporate-philosophy-management-policy/pic_way_bg_1.svg');
}
.Our_Way_items_bg_2 {
  width: 237.022px;
  background-image: url('/src/assets/images/corporate-philosophy-management-policy/pic_way_bg_2.svg');
}
.Our_Way_items_bg_3 {
  width: 318.015px;
  background-image: url('/src/assets/images/corporate-philosophy-management-policy/pic_way_bg_3.svg');
}
.Our_Way_items_bg_4 {
  width: 399.007px;
  background-image: url('/src/assets/images/corporate-philosophy-management-policy/pic_way_bg_4.svg');
}
.Our_Way_items_bg_5 {
  width: 480px;
  background-image: url('/src/assets/images/corporate-philosophy-management-policy/pic_way_bg_5.svg');
}
.Our_Way_items_bg {
  margin: auto;
  height: 66px;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Our_Way_items_bg_fist {
  height: 131px;
}
.Our_Way_items_bg_fist_title {
  margin-top: 84px;
}
.Our_Way_items {
  color: #fff;
  text-align: center;
  /* 正文三级标题加粗 */
  font-family: Noto Sans JP;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.Our_way_item_text {
  width: 585px;
  color: #0e1b47;
  /* 正文 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.Our_way_item_text_1 {
  padding-top: 84px;
}
.Our_way_item_text_2 {
  padding-top: 22px;
}
.Our_way_item_text_3 {
  padding-top: 10px;
}
.Employee_Code_of_Conduct_list:first-child {
  margin-top: 0px;
}
.Employee_Code_of_Conduct_list {
  margin-top: 10px;
}
</style>
