<template>
  <div
    data-aos="fade-up"
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0805594878275!2d139.78212521150812!3d35.6750183302007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188968200fffff%3A0x1b535c2dd2c70bfd!2sTokyo%20Dia%20Building!5e0!3m2!1szh-CN!2sus!4v1702195019670!5m2!1szh-CN!2sus"
          class="h-full w-full"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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
