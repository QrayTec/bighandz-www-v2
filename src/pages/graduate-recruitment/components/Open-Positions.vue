<template>
  <div
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      v-for="(item, index) in PositionsData"
      :key="index"
    >
      <div class="mt-[60px] min-h-[360px] w-full flex justify-between">
        <div
          :class="index % 2 != 0 ? 'order-1' : ''"
          class="w-[calc(50%-15px)] flex flex-col justify-between py-[30px]"
        >
          <div
            :class="index % 2 != 0 ? 'justify-start' : 'justify-end'"
            class="w-full flex"
          >
            <div
              :id="item.id"
              data-aos="fade-in"
              class="h-[78px] w-[360px] flex items-center justify-center bg-[#6785C1] text-[36px] font-[500] text-white"
            >
              {{ item.title }}
            </div>
          </div>
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
        <div class="w-[calc(50%-15px)]">
          <div class="h-full w-full">
            <img
              class="h-full w-full"
              :src="item.Image"
              alt=""
            />
          </div>
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
      <div class="mt-[60px] min-h-[360px] w-full flex justify-between">
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
              <div class="mt-[5px] h-full min-w-[16px]">
                <img
                  class="h-16px w-[16px]"
                  src="@/assets/images/company_profile/rhombic.svg"
                  alt=""
                />
              </div>
              <div class="w-full flex justify-between pl-[30px]">
                <p class="ml-[10px]">{{ items1.list_1 }}</p>
                <p class="ml-[10px]">{{ items1.list_2 }}</p>
              </div>
            </li>
          </ul>
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
    Image: Job1,
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
    Image: Job1,
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
  }
])
</script>
<style lang=""></style>
