<template>
  <div :style="{ width: MAIN_CONTENT_WIDTH + 'px' }">
    <div
      v-for="(item, index) in CompanyInfoData"
      :key="index"
      data-aos="fade-in"
      class="mt-[120px] h-[320px] w-full flex justify-between"
    >
      <div
        :class="index % 2 == 0 ? 'order-1 items-start' : 'items-end'"
        class="w-[680px] flex flex-col justify-between"
      >
        <div class="font-NotoSansJP text-[36px] font-[400] text-[#071027]">
          {{ item.title }}
        </div>
        <hr class="mt-[10px] h-[2px] w-full border-none bg-[#6785C1]" />
        <div
          class="borer-[#6785C1] mt-[4px] w-full border-t-1 border-dashed"
        ></div>
        <div
          class="font-NotoSansJP mt-[20px] w-full text-[20px] leading-[32px] font-[400] text-[#0E1B47]"
        >
          <div
            v-for="items in item.list"
            :key="items.list_title"
            class="mt-[12px] w-full flex items-center"
          >
            <img
              :src="items.icon"
              alt=""
            />
            <div class="ml-[6px] w-full flex justify-between">
              <div class="w-[25%]">{{ items.list_title }}</div>
              <div
                v-if="items.list_info !== 'http: //www.qdhaien.cn/'"
                class="w-[75%]"
              >
                {{ items.list_info }}
              </div>
              <a
                v-if="items.list_info == 'http: //www.qdhaien.cn/'"
                class="w-[75%]"
                href="http://www.qdhaien.cn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ items.list_info }}</a
              >
            </div>
          </div>
        </div>
        <hr class="mt-[10px] h-[2px] w-full border-none bg-[#6785C1]" />
      </div>

      <div class="h-[320px] w-[480px]">
        <img
          class="h-full w-full object-cover"
          :src="item.Image"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { CompanyInfoType } from '../types/index'
import Company1 from '@/assets/images/associated-company/company_1.png'
import Company2 from '@/assets/images/associated-company/company_2.png'
import Fax from '@/assets/images/associated-company/fax.svg'
import Address from '@/assets/images/associated-company/address.svg'
import Person from '@/assets/images/associated-company/person.svg'
import Phone from '@/assets/images/associated-company/phone.svg'
import Site from '@/assets/images/associated-company/site.svg'

const CompanyInfoData = ref<CompanyInfoType[]>([
  {
    title: '北京大手計算機技術有限公司',
    Image: Company1,
    list: [
      {
        icon: Address,
        list_title: '住所',
        list_info: '北京市東城区広渠家園冠城名敦道4号楼10層'
      },
      {
        icon: Person,
        list_title: '社員数',
        list_info: '60名'
      },
      {
        icon: Phone,
        list_title: 'TEL',
        list_info: '86-10-6823-0715'
      },
      {
        icon: Fax,
        list_title: 'FAX',
        list_info: '86-10-6823-0714'
      }
    ]
  },
  {
    title: '青島大手海恩信息技術有限公司',
    Image: Company2,
    list: [
      {
        icon: Address,
        list_title: '住所',
        list_info: '山東省青島市高新区秀園路2号科創慧谷D2-4'
      },
      {
        icon: Person,
        list_title: '社員数',
        list_info: '200名'
      },
      {
        icon: Phone,
        list_title: 'TEL',
        list_info: '86-0532-68012198'
      },
      {
        icon: Fax,
        list_title: 'FAX',
        list_info: '86-0532-68012123'
      },
      {
        icon: Site,
        list_title: '主页',
        list_info: 'http: //www.qdhaien.cn/'
      }
    ]
  }
])
</script>
<style lang=""></style>
