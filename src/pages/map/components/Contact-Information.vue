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
    list: '株式会社ビッグハンズ (英文名：BIGHANDZ CO. ,LTD.)'
  },
  {
    list: '住所：〒104-0033 東京都中央区新川1丁目28番25号 東京ダイヤビルディング3号館2F'
  },
  {
    list: '電話：03-6228-3468'
  },
  {
    list: 'FAX：03-6228-3469'
  }
])
</script>
<style>
.test {
  width: calc();
}
</style>
