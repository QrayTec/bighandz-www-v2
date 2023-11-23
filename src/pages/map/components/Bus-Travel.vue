<template>
  <div
    id="BusTravel"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      バスで行く
    </div>
    <div class="mt-[60px] min-h-[360px] w-full flex justify-between">
      <div class="w-[calc(50%-15px)] flex justify-start">
        <div class="w-full">
          <img
            src="@/assets/images/map/bus.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="w-[calc(50%-15px)] flex">
        <ul>
          <li
            v-for="(item, index) in ListData"
            :key="index"
            :class="{
              'mt-[30px]': index !== 0
            }"
          >
            <div class="flex">
              <div class="mt-[5px] h-full min-w-[16px]">
                <img
                  class="h-16px w-[16px]"
                  src="@/assets/images/company_profile/rhombic.svg"
                  alt=""
                />
              </div>
              <p class="ml-[10px]">
                {{ item.list }}
              </p>
            </div>

            <div
              v-for="item1 in item.children"
              :key="item1"
              class="ml-[30px] mt-[30px] flex"
            >
              <div class="mt-[5px] h-full min-w-[16px]">
                <img
                  class="h-16px w-[16px]"
                  src="@/assets/images/company_profile/rhombic.svg"
                  alt=""
                />
              </div>
              <p class="ml-[10px]">
                {{ item1 }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

interface ListType {
  list: string
  children: string[]
}
const ListData = ref<ListType[]>([
  {
    list: '東京駅八重洲口から',
    children: [
      '東16系統「東京ビッグサイト」行き',
      '東16系統「深川車庫前」行き',
      '東16系統「豊洲駅前」行き'
    ]
  },
  {
    list: 'または　東12系統「晴海埠頭」行き',
    children: ['のバス乗車　「住友ツインビル前」停留所(八重洲通り)より徒歩３分']
  },
  {
    list: '東京駅八重洲口から',
    children: [
      '東16系統「住友ツインビル前」行き',
      'のバス乗車　「住友ツインビル前」停留所より徒歩１分'
    ]
  }
])
</script>
<style>
.test {
  width: calc();
}
</style>
