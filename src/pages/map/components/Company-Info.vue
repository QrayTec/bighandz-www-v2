<template>
  <div
    class="font-NotoSansJP"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="w-full flex justify-between">
      <div class="w-[550px]">
        <img src="@/assets/images/map/JP-CompanyInfo.png" />
      </div>
      <div class="w-[calc(100%-580px)]">
        <div class="text-cobalt_blue w-full flex text-[16px] font-[400]">
          <div class="text-[36px]">株式会社ビッグハンズ</div>
          <div class="ml-[10px] flex items-end">
            (英文名：BIGHANDZ CO. ,LTD.)
          </div>
        </div>
        <hr class="mt-[10px] h-[2px] w-full border-none bg-[#6785C1]" />
        <div
          class="borer-[#6785C1] mt-[4px] w-full border-t-1 border-dashed"
        ></div>
        <div
          v-for="(item, index) in Data"
          :key="index"
          class="mt-[30px] w-full flex justify-between"
        >
          <div class="w-[150px] flex items-start">
            <div class="flex items-center">
              <div>
                <img
                  :src="item.Image"
                  alt=""
                />
              </div>
              <div class="ml-[6px]">{{ item.title }}</div>
            </div>
          </div>
          <div class="w-[calc(100%-180px)]">
            <div
              v-for="(items, i) in item.content"
              :key="i"
            >
              {{ items.list }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[120px] w-full flex justify-between">
      <div
        class="w-[calc(100%-1060px)] flex items-center py-[58px] text-[1.5rem] leading-[1.875rem] font-[700]"
      >
        <div
          class="h-full flex flex-col justify-between border border-[#6785C1] border-solid bg-[#DFE4F2] px-[58px] py-[60px]"
        >
          <span
            v-for="(char, index) in 'アクセスマップ'"
            :key="index"
            >{{ char }}</span
          >
        </div>
      </div>
      <div class="w-[1000px]">
        <img
          src="@/assets/images/map/Map-1.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { industryType } from '../types/index'
import Address from '@/assets/images/associated-company/address.svg'
import Phone from '@/assets/images/associated-company/phone.svg'
import Fax from '@/assets/images/associated-company/fax.svg'

const Data = ref<industryType[]>([
  {
    title: '住所 〒104-0033',
    Image: Address,
    content: [
      { list: '東京都中央区新川1丁目28番25号' },
      { list: '東京ダイヤビルディング3号館2F' }
    ]
  },
  {
    title: '電話',
    Image: Phone,
    content: [{ list: '03-6228-3468' }]
  },
  {
    title: 'FAX',
    Image: Fax,
    content: [{ list: '03-6228-3469' }]
  }
])
</script>
<style lang=""></style>
