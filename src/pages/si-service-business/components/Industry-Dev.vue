<template>
  <div
    id="IndustryDev"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      業界の実績と開発言語
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
          class="w-[calc(50%-15px)] px-[25px] py-[71px]"
          :class="index % 2 == 0 ? 'order-1' : ''"
        >
          <img
            :src="item.Image"
            alt=""
          />
        </div>
        <div
          class="w-[calc(50%-15px)] flex items-center justify-center px-[25px] py-[71px]"
        >
          <div class="font-NotoSansJP">
            <ul>
              <li
                v-for="(items, i) in item.content"
                :key="i"
                class="w-[308px] flex items-center text-[24px]"
                :style="{ color: items.ClassName }"
                :class="i != 0 ? 'mt-[30px]' : ''"
              >
                <div
                  class="h-[16px] w-[16px] rounded"
                  :style="{ background: items.ClassName }"
                ></div>
                <div class="ml-[10px] w-[calc(100%-16px)] flex justify-between">
                  <div>{{ items.list_1 }}</div>
                  <div>{{ items.list_2 }}</div>
                </div>
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
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import industry from '@/assets/images/si-service-business/industry.png'
import dev from '@/assets/images/si-service-business/dev.png'

import { industryType } from '../types/index'

const industryData = ref<industryType[]>([
  {
    title: '業種別開発実績',
    Image: industry,
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
