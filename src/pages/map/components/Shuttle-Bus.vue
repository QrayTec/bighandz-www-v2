<template>
  <div
    id="ShuttleBus"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      「東京ダイヤビルディング」無料シャトルバス運行ルート
    </div>

    <div class="mt-[30px] w-full flex justify-center">
      <img
        class="w-full"
        src="@/assets/images/map/map2.png"
        alt=""
      />
    </div>

    <div
      v-for="(item, index) in industryData"
      :key="index"
      class="mt-[30px] w-full"
    >
      <div class="flex items-center">
        <div class="h-[32px] w-[4px] bg-[#F6C103]"></div>
        <div class="font-NotoSansJP ml-[10px] text-[36px] font-[400]">
          {{ item.title }}
        </div>
      </div>
      <hr />
      <div class="flex justify-between">
        <div
          class="w-full px-[25px] py-[71px]"
          :class="index % 2 == 0 ? 'order-1' : ''"
        >
          <img
            class="w-full"
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
import Timetable1Image from '@/assets/images/map/timetable1.png'
import Timetable2Image from '@/assets/images/map/timetable2.png'

import { industryType } from '../types/index'

const industryData = ref<industryType[]>([
  {
    title: '青ルート（茅場町駅・八丁堀駅巡回ルート）',
    Image: Timetable1Image
  },
  {
    title: '赤ルート（八重洲地下街入口・日本橋駅・茅場町駅巡回ルート）',
    Image: Timetable2Image
  }
])
</script>
<style lang=""></style>
