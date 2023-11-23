<template>
  <div
    id="TrainTravel"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      電車で行く
    </div>
    <div class="mt-[60px] min-h-[360px] w-full flex justify-between">
      <div class="w-[calc(50%-15px)] flex">
        <ul>
          <li
            v-for="item in ListData"
            :key="item.list"
            class="mt-[30px] flex"
          >
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
          </li>
        </ul>
      </div>
      <div class="w-[calc(50%-15px)] flex justify-start">
        <div class="w-full">
          <img
            src="@/assets/images/map/train.jpg"
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

interface ListType {
  list: string
}
const ListData = ref<ListType[]>([
  {
    list: '東京メトロ「東西線」茅場町駅3番出口徒歩10分'
  },
  {
    list: '東京メトロ「日比谷線」茅場町駅1番出口徒歩8分'
  },
  {
    list: '東京メトロ「日比谷線」八丁堀駅A4番出口徒歩7分'
  }
])
</script>
<style>
.test {
  width: calc();
}
</style>
