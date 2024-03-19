<template>
  <div
    id="Access-Map"
    data-aos="fade-up"
    class="font-NotoSansJP px-[15px] lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle>アクセスマップ </ThePageMinTitle>
    <div
      class="lgLjustify-between mt-[60px] w-full flex flex-col lg:flex-row lg:justify-between"
    >
      <div class="flex justify-center lg:w-[550px]">
        <img src="@/assets/images/map/JP-CompanyInfo.png" />
      </div>
      <div class="mt-[30px] lg:mt-0 lg:w-[calc(100%-580px)]">
        <div class="text-cobalt_blue w-full text-[1rem] font-[400]">
          <div class="text-[1.9rem] lg:text-[2.25rem]">
            株式会社ビッグハンズ
          </div>
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
          <div class="w-[200px] flex items-start">
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
    <div class="mt-[120px] w-full flex flex-col lg:flex-row lg:justify-between">
      <div
        class="w-full flex items-center py-[58px] text-[1.5rem] leading-[1.875rem] font-[700] lg:w-[calc(100%-1060px)]"
      >
        <div
          class="h-full flex flex-col justify-between border border-[#6785C1] border-solid bg-[#DFE4F2] p-[15px] lg:px-[58px] lg:py-[60px]"
        >
          <div v-if="MAIN_CONTENT_WIDTH === 1200">
            <span
              v-for="(char, index) in 'アクセスマップ'"
              :key="index"
              >{{ char }}</span
            >
          </div>
          <div v-else>アクセスマップ</div>
        </div>
      </div>

      <div class="h-[240px] w-full lg:h-auto lg:w-[1000px] md:h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1145.763568046491!2d139.7353320093263!3d35.68417270345427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c6316c817e3%3A0x644a9eb6de817c33!2z5pel5pys44CSMTAyLTAwODMgVG9reW8sIENoaXlvZGEgQ2l0eSwgS8WNamltYWNoaSwgNC1jaMWNbWXiiJI04oiSNCDpurnnlLrjg5Hjgrfjg5XjgqPjg4Pjgq_jg5Pjg6sgNmY!5e0!3m2!1szh-CN!2shk!4v1710836409726!5m2!1szh-CN!2shk"
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
    title: '住所 〒102-0083',
    Image: Address,
    content: [
      { list: '東京都千代田区麹町４－４－４' },
      { list: 'ACN麹町ビル６F' }
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
