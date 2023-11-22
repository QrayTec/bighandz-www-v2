<template>
  <div
    id="Part1"
    class="relative mb-[240px] mt-[120px]"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <steps :stepsdata="StepsData" />
    <div class="FAQ_content">
      <div
        v-for="item in FAQData"
        :key="item.id"
        data-aos="slide-right"
        class="FAQ_items m_t_60"
      >
        <div class="question qa_data">
          <div class="question_id question_bg">{{ item.question_id }}</div>
          <div class="question_data">
            {{ item.question_data }}
          </div>
        </div>
        <div class="qa_data assurance m_t_30">
          <div class="question_id assurance_bg">{{ item.assurance_id }}</div>
          <div class="question_data">
            <p
              v-for="(assurance, index) in item.assurance_list"
              :key="index"
            >
              {{ assurance.list }}
            </p>
          </div>
        </div>
      </div>
      <hr
        class="m_t_60 hr"
        data-aos="slide-right"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { StepsType } from '@/data/pages_interface'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

interface AssuranceListType {
  list: string
}

interface FAQType {
  id: number
  question_id: string
  question_data: string
  assurance_id: string
  assurance_list: AssuranceListType[]
}

const StepsData = ref<StepsType>({
  id: 1,
  subheading: 'Part1'
})

const FAQData = ref<FAQType[]>([
  {
    id: 1,
    question_id: 'Q1',
    question_data: '文系·理系、学部卒·修士了など、应募に関する条件はありますか',
    assurance_id: 'A1',
    assurance_list: [{ list: '全学部・全学科が対象となります。' }]
  },
  {
    id: 2,
    question_id: 'Q2',
    question_data: '選考の際、重視しているポイントは',
    assurance_id: 'A2',
    assurance_list: [
      { list: '新卒入社の方は変化に適応し、成長意欲が高いかどうか' },
      {
        list: 'キャリア入社の方はスキルと経験、コミュニケーション能力が評価の対象となります。'
      }
    ]
  },
  {
    id: 3,
    question_id: 'Q3',
    question_data: '外国人の採用は行っていますか',
    assurance_id: 'A3',
    assurance_list: [
      { list: '当社では応募や選考にあたり、性別や国籍などは一切問いません。' }
    ]
  },
  {
    id: 4,
    question_id: 'Q4',
    question_data: '海外在住ですが、応募は可能ですか',
    assurance_id: 'A4',
    assurance_list: [
      {
        list: 'はい、応募可能です。Zoom等のビデオ通話で面接を行わせていただきます。'
      }
    ]
  },
  {
    id: 5,
    question_id: 'Q5',
    question_data: '社内イベントはありますか',
    assurance_id: 'A5',
    assurance_list: [
      {
        list: 'はい、あります。年に2回、全社会議（経営や事業方針の共有、優れた事例の発表など）と表彰式兼ねた忘年会が開催されました（コロナ禍の期間中はオンラインで行われました）。'
      }
    ]
  }
])
</script>

<style scoped>
.page_center_items {
  position: relative;
}
.FAQ_content {
  padding-left: 204px;
}
.qa_data {
  display: flex;
}
.question {
  color: var(---, #0e1b47);
  font-feature-settings: 'clig' off, 'liga' off;

  /* 正文加粗 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.assurance {
  color: var(---, #0e1b47);
  font-feature-settings: 'clig' off, 'liga' off;

  /* 正文段落 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}
.question_id {
  min-width: 40px;
  max-height: 32px;
  color: #fff;
  font-feature-settings: 'clig' off, 'liga' off;
  /* 正文段落 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
  display: flex;
  align-items: center;
  justify-content: center;
}
.question_data {
  margin-left: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.question_bg {
  background-color: #6785c1;
}
.assurance_bg {
  background-color: #2cc0cc;
}

/* 大于等于768px宽度，小于1024px宽度的屏幕 */
@media (min-width: 768px) and (max-width: 1023px) {
  .FAQ_content {
    padding-left: 0px;
    width: 80%;
    display: flex;
    justify-self: center;
    flex-direction: row;
  }
  .page_center_items {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

/* 小于768px宽度的屏幕 */
@media (max-width: 767px) {
  .FAQ_content {
    padding-left: 0px;
    width: 80%;
  }
  .page_center_items {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
