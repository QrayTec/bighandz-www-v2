<template>
  <div class="bg-Business h-[1030px] w-full flex justify-center">
    <div class="w-[1200px]">
      <div
        class="font-NotoSansJP mt-[120px] h-[54px] w-[144px] text-[36px] leading-[54px] font-[500] not-italic text-white"
      >
        主な業務
      </div>
      <div class="mt-[60px] flex flex-wrap">
        <BusinessItem :businessitemdata="BusinessItemData[0]" />
        <div class="ml-[20px]">
          <div class="h-[290px] w-[890px] flex">
            <BusinessItem :businessitemdata="BusinessItemData[1]" />
            <BusinessItem
              class="ml-[20px]"
              :businessitemdata="BusinessItemData[2]"
            />
          </div>
          <div class="mt-[20px] h-[290px] w-[890px] flex">
            <BusinessItem :businessitemdata="BusinessItemData[3]" />

            <BusinessItem
              class="ml-[20px]"
              :businessitemdata="BusinessItemData[4]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BusinessItem from './Business-Item.vue'
import { BusinessItemType } from '../types/index'
import Bg1 from '@/assets/images/index_Business/bg-1.png'
import Bg2 from '@/assets/images/index_Business/bg-2.png'
import Bg3 from '@/assets/images/index_Business/bg-3.png'
import Bg4 from '@/assets/images/index_Business/bg-4.png'
import Bg5 from '@/assets/images/index_Business/bg-5.png'
import TitleIcon1 from '@/assets/images/index_Business/title_icon_1.svg'
import TitleIcon2 from '@/assets/images/index_Business/title_icon_2.svg'
import TitleIcon3 from '@/assets/images/index_Business/title_icon_3.svg'
import TitleIcon4 from '@/assets/images/index_Business/title_icon_4.svg'
import TitleIcon5 from '@/assets/images/index_Business/title_icon_5.svg'

const BusinessItemData = ref<BusinessItemType[]>([
  {
    background_image: Bg1,
    title: 'Siサービス事業',
    title_icon: TitleIcon1,
    info_content_1: '主な業務経験は製造、流通関係です。',
    info_content_2:
      '製造業、物流サービス、通信のソフトウェア開発を得意分野としております。',
    link: '/si-service-business',
    style: 'w-[287px] h-[594px]'
  },
  {
    background_image: Bg2,
    title: 'データソリューション',
    title_icon: TitleIcon2,
    info_content_1: '主な業務経験は製造、流通関係です。',
    info_content_2:
      '製造業、物流サービス、通信のソフトウェア開発を得意分野としております。',
    link: '/data-solution',
    style: 'w-[287px] h-[287px]'
  },
  {
    background_image: Bg3,
    title: 'インフラ事業',
    title_icon: TitleIcon3,
    info_content_1: '主な業務経験は製造、流通関係です。',
    info_content_2:
      '製造業、物流サービス、通信のソフトウェア開発を得意分野としております。',
    link: '/infrastructure-business',
    style: 'w-[590px] h-[287px]'
  },
  {
    background_image: Bg4,

    title: 'ヘルスケア事業',
    title_icon: TitleIcon4,
    info_content_1: '主な業務経験は製造、流通関係です。',
    info_content_2:
      '製造業、物流サービス、通信のソフトウェア開発を得意分野としております。',
    link: '/healthcare-business',
    style: 'w-[590px] h-[287px]'
  },
  {
    background_image: Bg5,
    title: '物流事業',
    title_icon: TitleIcon5,
    info_content_1: '主な業務経験は製造、流通関係です。',
    info_content_2:
      '製造業、物流サービス、通信のソフトウェア開発を得意分野としております。',
    link: '/logistics-business',
    style: 'w-[287px] h-[287px]'
  }
])
</script>

<style scoped></style>
