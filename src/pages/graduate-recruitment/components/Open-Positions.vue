<template>
  <div
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      v-for="(item, index) in PositionsData"
      :id="item.id"
      :key="index"
      data-aos="fade-in"
      class="mt-[80px] w-full flex flex-col justify-between"
    >
      <div
        class="h-[80px] max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
      >
        {{ item.title }}
      </div>
      <div class="mt-[30px] w-full flex justify-between text-[20px]">
        <div
          :class="index % 2 != 0 ? 'order-1 items-start' : 'items-end'"
          class="w-[calc(50%-15px)] flex flex-col justify-between py-[30px]"
        >
          <div
            class="font-NotoSansJP h-full w-full text-[20px] leading-[32px] font-[400] text-[#0E1B47]"
          >
            <ul class="mt-[20px] w-full">
              <li
                v-for="(items, i) in item.content"
                :key="i"
                :class="i == 0 ? '' : 'mt-[30px]'"
                class="w-full flex px-[30px]"
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
        </div>
        <div class="w-[calc(50%-15px)] flex items-center">
          <img
            class="h-[320px] w-full object-cover"
            :src="item.Image"
            alt=""
          />
        </div>
      </div>
    </div>

    <div
      v-for="(item, index) in SalaryData"
      :key="index"
      class="mt-[120px]"
    >
      <div class="w-full flex">
        <div
          :id="item.id"
          data-aos="fade-in"
          class="h-[78px] w-[360px] flex items-center justify-center bg-[#6785C1] text-[36px] font-[500] text-white"
        >
          {{ item.title }}
        </div>
      </div>
      <div
        class="mt-[60px] min-h-[360px] w-full flex justify-between text-[20px]"
      >
        <div
          :class="index % 2 != 0 ? 'order-1' : ''"
          class="w-full flex justify-between py-[30px]"
        >
          <ul
            v-for="(items, indexs) in item.content"
            :key="indexs"
            class="mt-[20px] w-[calc(50%-15px)]"
          >
            <li
              v-for="(items1, i) in items.content_1"
              :key="i"
              :class="i == 0 ? '' : 'mt-[30px]'"
              class="w-full flex px-[30px]"
            >
              <div
                v-if="i != 0"
                class="mt-[5px] h-full min-w-[16px]"
              >
                <img
                  class="h-16px w-[16px]"
                  src="@/assets/images/company_profile/rhombic.svg"
                  alt=""
                />
              </div>
              <div
                :class="i != 0 ? 'pl-[20px]' : 'pl-[0px]'"
                class="w-full flex justify-between"
              >
                <p>{{ items1.list_1 }}</p>
                <p>{{ items1.list_2 }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      v-for="(item, index) in PositionsData2"
      :id="item.id"
      :key="index"
      data-aos="fade-in"
      class="mt-[80px] w-full flex flex-col justify-between"
    >
      <div
        class="h-[80px] max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
      >
        {{ item.title }}
      </div>
      <div class="mt-[30px] w-full flex justify-between text-[20px]">
        <div
          :class="index % 2 != 0 ? 'order-1 items-start' : 'items-end'"
          class="w-[calc(50%-15px)] flex flex-col justify-between py-[30px]"
        >
          <div
            class="font-NotoSansJP h-full w-full text-[20px] leading-[32px] font-[400] text-[#0E1B47]"
          >
            <ul class="mt-[20px] w-full">
              <li
                v-for="(items, i) in item.content"
                :key="i"
                :class="i == 0 ? '' : 'mt-[30px]'"
                class="w-full flex px-[30px]"
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
        </div>
        <div class="w-[calc(50%-15px)] flex items-center">
          <img
            class="h-[320px] w-full object-cover"
            :src="item.Image"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { PositionsType, SalaryType } from '../types/index'

import Job1 from '@/assets/images/graduate-recruitment/job_1.jpg'
import Job2 from '@/assets/images/graduate-recruitment/job_2.jpg'
import Job3 from '@/assets/images/graduate-recruitment/job_3.jpg'
import Job4 from '@/assets/images/graduate-recruitment/job_4.jpg'

const PositionsData = ref<PositionsType[]>([
  {
    id: 'OpenPositions',
    title: '募集職種',
    Image: Job1,
    content: [
      { list: '技術系' },
      { list: '事務系' },
      {
        list: '上記の募集職種は、応募者の方々がどの職種からキャリアをスタートするのか、選んでいただくためのものですが、その後のキャリアにおいては、個人の適性や成長を考慮して他の仕事に携わる可能性もあります。たとえば、「技術系」として入社した方が、キャリアの中で適性を見出されて「事務系」の仕事に携わることや、その逆の場合もあります。'
      }
    ]
  },
  {
    id: 'Subject-application',
    title: '募集対象',
    Image: Job2,
    content: [
      { list: '2022年3月末までに高専、専門学校、大学、大学院を卒業見込みの方' },
      {
        list: '2022年3月末時点で、最終学歴卒業後3年未満の方もご応募いただけます。就労経験の有無は問いません。'
      }
    ]
  },
  {
    id: 'Accepted-Faculties',
    title: '募集学部・学科',
    Image: Job3,
    content: [{ list: '全学部、全学科' }]
  }
])

const SalaryData = ref<SalaryType[]>([
  {
    id: 'Salary&Benefits',
    title: '給与と福利厚生',
    Image: Job1,
    content: [
      {
        content_1: [
          { list_1: '給与' },
          { list_1: '初任給（2020年実績）' },
          { list_1: '大学院博士卒', list_2: '235,000円' },
          { list_1: '大学院修士卒', list_2: '230,000円' },
          { list_1: '大学卒', list_2: '225,000円' },
          { list_1: '高専・専門卒', list_2: ' 215,000円' },
          { list_1: '※通勤手当別途支給' }
        ]
      },
      {
        content_1: [
          { list_1: '賞与・昇給' },
          { list_1: '賞与　年2回（6月・12月）' },
          { list_1: '昇給　年1回（4月）' },
          { list_1: '平均年間給与' },
          { list_1: '600万円 （2020年3月現在 正社員）' },
          {
            list_1: '※基準外賃金および賞与を含む税込支給額。通勤費は別途支給。'
          }
        ]
      },
      {
        content_1: [
          { list_1: '福利厚生' },
          { list_1: '社会保険加入（健康、厚生、雇用、労災）' },
          { list_1: '資格取得支援制度昇給　年1回（4月）' }
        ]
      }
    ]
  },
  {
    id: 'Work-related',
    title: '仕事関連',
    Image: Job1,
    content: [
      {
        content_1: [{ list_1: '勤務地' }, { list_1: '東京、神奈川' }]
      },
      {
        content_1: [
          { list_1: '勤務時間' },
          { list_1: '9:30～18:30' },
          { list_1: '※プロジェクトにより異なる場合もあり' }
        ]
      },
      {
        content_1: [
          { list_1: '試用期間' },
          { list_1: '試用期間あり（6か月）' },
          { list_1: '※試用期間と本採用後の、労働条件の変更はありません。' }
        ]
      },
      {
        content_1: [
          { list_1: '休日・休暇' },
          { list_1: '土曜日、日曜日、国民の祝日' },
          { list_1: '夏期休暇、年末年始休暇。' }
        ]
      }
    ]
  }
])

const PositionsData2 = ref<PositionsType[]>([
  {
    id: 'PersonnelSystem',
    title: '人事制度',
    Image: Job4,
    content: [
      { list: '年齢や性別、国籍を問わず人材の多様性を重視しています。' },
      { list: 'チャレンジ精神を持ち、自ら学ぶ姿勢を重視します。' },
      {
        list: 'プログラミングやネットワークなどに関する各種技術研修を用意しています。'
      },
      {
        list: 'チームワークを重視し、管理職研修やコミュニケーション研修を実施しています。'
      },
      {
        list: '外国籍の方には、日本語を学べる環境があります。'
      }
    ]
  }
])
</script>
<style lang=""></style>
