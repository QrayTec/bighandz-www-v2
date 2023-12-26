<template>
  <div
    id="STEP１"
    class="font-NotoSansJP relative flex flex-col items-center justify-center pb-[120px]"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="absolute z-[-1] h-full w-[calc(100%-120px)] bg-white"></div>

    <div class="w-full">
      <the-page-min-title2 data-aos="fade-up">STEP ①</the-page-min-title2>
      <div class="w-[calc(100%-120px)] pl-[204px]">
        <div
          v-for="item in FAQData"
          :key="item.id"
          data-aos="slide-right"
          class="mt-[60px]"
        >
          <div
            class="text-deep_blue flex text-[1rem] leading-[2rem] font-[700]"
          >
            <div
              class="w-[40px] bg-[#6785C1] text-center font-[400] text-white"
            >
              {{ item.question_id }}
            </div>
            <div class="ml-[12px] flex items-center leading-normal">
              {{ item.question_data }}
            </div>
          </div>
          <div
            class="text-deep_blue mt-[30px] flex text-[1rem] leading-[2rem] font-[700]"
          >
            <div
              class="h-[32px] min-w-[40px] bg-[#2CC0CC] text-center font-[400] text-white"
            >
              {{ item.assurance_id }}
            </div>
            <div class="ml-[12px] font-[400]">
              <p
                v-for="(assurance, index) in item.assurance_list"
                :key="index"
              >
                {{ assurance.list }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
