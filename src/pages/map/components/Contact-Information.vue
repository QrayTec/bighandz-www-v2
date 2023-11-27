<template>
  <div
    id="ContactInformation"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="min-h-[360px] w-full flex justify-between">
      <div class="w-[calc(50%-15px)] flex justify-start">
        <div class="w-full">
          <img
            src="@/assets/images/map/map1.png"
            alt=""
          />
        </div>
      </div>
      <div class="w-[calc(50%-15px)] flex text-[20px]">
        <ul>
          <li
            v-for="item in ListData"
            :key="item.list_1"
            class="mt-[30px] flex"
          >
            <div class="mt-[5px] h-full min-w-[16px]">
              <img
                class="h-16px w-[16px]"
                src="@/assets/images/company_profile/rhombic.svg"
                alt=""
              />
            </div>
            <div
              v-if="item.list_1"
              class="min-w-[50px]"
            >
              {{ item.list_1 }}
            </div>
            <div>{{ item.list_2 }}</div>
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
  list_1?: string
  list_2?: string
}
const ListData = ref<ListType[]>([
  {
    list_2: '株式会社ビッグハンズ (英文名：BIGHANDZ CO. ,LTD.)'
  },
  {
    list_1: '住所:',
    list_2:
      '〒104-0033 東京都中央区新川1丁目28番25号 東京ダイヤビルディング3号館2F'
  },
  {
    list_1: '電話:',
    list_2: '03-6228-3468'
  },
  {
    list_1: 'FAX:',
    list_2: '03-6228-3469'
  }
])
</script>
<style>
.test {
  width: calc();
}
</style>
