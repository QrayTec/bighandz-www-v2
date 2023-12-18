<template>
  <div
    id="IndustryDev"
    data-aos="fade-in"
    class="font-NotoSansJP w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle data-aos="fade-right">開発実績と開発言語</ThePageMinTitle>

    <div
      v-for="(item, index) in industryData"
      :key="index"
      class="mt-[30px] w-full flex flex-col"
    >
      <div
        class="flex items-center justify-between text-[2.25rem] font-[400]"
        data-aos="fade-right"
      >
        <div class="flex items-center">
          <div class="h-[32px] w-[5px] bg-[#F6C103]"></div>
          <div class="ml-[10px]">{{ item.title }}</div>
        </div>
        <div>{{ item.en_title }}</div>
      </div>
      <div class="mt-[12px] h-[1px] w-full bg-[#D8D8D8]"></div>
      <div
        class="flex"
        data-aos="fade-right"
      >
        <div
          :class="index === 0 ? 'order-0 justify-end' : 'order-1 justify-start'"
          class="h-[560px] w-[660px] flex items-center"
        >
          <div class="h-[488px] w-[535px]">
            <img
              :src="item.Image"
              alt=""
            />
          </div>
        </div>
        <div
          class="h-[560px] w-[540px] flex flex-col items-center justify-center"
        >
          <div
            v-for="(list, i) in item.content"
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
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import industry from '@/assets/images/si-service-business/industry.png'
import dev from '@/assets/images/si-service-business/dev.png'

import { industryType } from '../types/index'

const industryData = ref<industryType[]>([
  {
    title: '開発実績',
    Image: industry,
    en_title: 'DEVELOPMENT RESULTS',
    content: [
      {
        ClassName: '#8959FB',
        list_1: '証券',
        list_2: '30%'
      },
      {
        ClassName: '#037EEF',
        list_1: '金融/保険',
        list_2: '20%'
      },
      {
        ClassName: '#E22E59',
        list_1: '物流',
        list_2: '20%'
      },
      {
        ClassName: '#E45C46',
        list_1: '官公庁',
        list_2: '15%'
      },
      {
        ClassName: '#0DAEB3',
        list_1: 'その他',
        list_2: '15%'
      }
    ]
  },
  {
    title: '開発⾔語',
    Image: dev,
    en_title: 'DEVELOPMENT LANGUAGE',

    content: [
      {
        ClassName: '#8959FB',
        list_1: 'Java',
        list_2: '50%'
      },
      {
        ClassName: '#037EEF',
        list_1: 'C#',
        list_2: '20%'
      },
      {
        ClassName: '#E22E59',
        list_1: 'COBOL',
        list_2: '20%'
      },
      {
        ClassName: '#E45C46',
        list_1: 'Python',
        list_2: '5%'
      },
      {
        ClassName: '#0DAEB3',
        list_1: 'その他',
        list_2: '15%'
      }
    ]
  }
])
</script>
<style lang=""></style>
