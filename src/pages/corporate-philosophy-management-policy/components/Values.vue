<template>
  <div
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    class="font-NotoSansJP px-[15px] lg:px-0"
  >
    <div class="text-cobalt_blue text-[2.25rem] leading-normal font-[700]">
      価値観
    </div>
    <div class="text-deep_blue mt-[30px] text-[1rem] leading-[2rem] font-[400]">
      私たちの価値観は、イノベーション、顧客志向、責任、チームワーク、成長です。
      私たちは常にイノベーションを追求し、顧客を中心に行動し、責任を果たし、団結し、共通の目標を達成するために成長していきます
    </div>
    <div
      class="mt-[60px] w-full flex flex-col lg:flex-row md:flex-row lg:justify-between"
    >
      <div
        v-for="item in ValuesData"
        :key="item.id"
        class="w-full flex flex-col items-center justify-start pb-[26px] pt-[30px]"
      >
        <div
          class="h-[120px] w-[120px] flex items-center justify-center border border-[#DFE4F2] rounded-full border-solid"
        >
          <img
            :src="item.ImgSrc"
            alt=""
          />
        </div>
        <div
          class="text-deep_blue mt-[10px] w-full flex items-center justify-center text-center text-[1.5rem] leading-[2rem] font-[700]"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

import PicIcon1 from '@/assets/images/corporate-philosophy-management-policy/pic_icon_1.svg'
import PicIcon2 from '@/assets/images/corporate-philosophy-management-policy/pic_icon_2.svg'
import PicIcon3 from '@/assets/images/corporate-philosophy-management-policy/pic_icon_3.svg'
import PicIcon4 from '@/assets/images/corporate-philosophy-management-policy/pic_icon_4.svg'
import PicIcon5 from '@/assets/images/corporate-philosophy-management-policy/pic_icon_5.svg'

interface ValuesType {
  id: number
  ImgSrc: string
  title: string
}
const ValuesData = ref<ValuesType[]>([
  { id: 1, ImgSrc: PicIcon1, title: 'イノベーション' },
  { id: 2, ImgSrc: PicIcon2, title: '顧客志向' },
  { id: 3, ImgSrc: PicIcon3, title: '責任' },
  { id: 4, ImgSrc: PicIcon4, title: 'チームワーク' },
  { id: 5, ImgSrc: PicIcon5, title: '成長です' }
])
</script>
