<template>
  <div
    id="Dev-RESULTS"
    data-aos="fade-up"
    class="font-NotoSansJP"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="text-cobalt_blue flex justify-between text-[2.25rem] font-[400]"
    >
      <div class="flex items-center">
        <div class="h-[32px] w-[4px] bg-[#F6C103]"></div>
        <div class="ml-[10px]">インフラ開発実績</div>
      </div>
      <div>DEVELOPMENT RESULTS</div>
    </div>
    <div class="mt-[10px] h-[1px] w-full bg-[#D8D8D8]"></div>
    <div class="mt-[30px] flex justify-between">
      <div class="w-[50%] flex justify-center">
        <img
          class="h-[475px] w-[515px]"
          src="@/assets/images/infrastructure-business/Cloud_1.png"
          alt=""
        />
      </div>
      <div class="w-[50%] flex flex-col items-center justify-center">
        <div
          v-for="(list, i) in industryData"
          :key="i"
          :style="{ color: list.ClassName }"
          :class="i === 0 ? 'mt-[0px]' : 'mt-[30px]'"
          class="h-[35px] w-[308px] flex items-center justify-between"
        >
          <div class="flex items-center">
            <div
              :style="{ backgroundColor: list.ClassName }"
              class="max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] rounded-[6px]"
            ></div>
            <div class="ml-[10px]">{{ list.list_1 }}</div>
          </div>
          <div>{{ list.list_2 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { DevType } from '../types/index'

const industryData = ref<DevType[]>([
  {
    ClassName: '#8959FB',
    list_1: 'クラウド',
    list_2: '40%'
  },
  {
    ClassName: '#037EEF',
    list_1: 'VM',
    list_2: '20%'
  },
  {
    ClassName: '#E22E59',
    list_1: 'ネットワーク',
    list_2: '20%'
  },
  {
    ClassName: '#E45C46',
    list_1: 'オンプレ',
    list_2: '10%'
  },
  {
    ClassName: '#0DAEB3',
    list_1: 'その他',
    list_2: '10%'
  }
])
</script>
<style lang=""></style>
