<template>
  <div
    class="bg_image bg-center-35 h-[1030px] w-full flex justify-center bg-no-repeat"
  >
    <div class="w-[1200px]">
      <div
        data-aos="fade-in"
        class="font-NotoSansJP mt-[120px] h-[54px] text-[48px] leading-[54px] font-[500] not-italic text-white"
      >
        サービス
      </div>
      <div class="mt-[40px] text-[18px] text-gray">
        ITからビジネスへ、ビジネスからITへ、教育からIT・ビジネスへと三位一体でスピーディに社会の発展に貢献しつづけます。
      </div>
      <div
        class="mt-[60px] flex flex-wrap"
        data-aos="fade-up"
      >
        <BusinessItem :businessitemdata="BusinessItemData[0]" />
        <div class="ml-[20px]">
          <div class="h-[290px] w-[890px] flex">
            <BusinessItem :businessitemdata="BusinessItemData[1]" />
            <BusinessItem
              class="ml-[20px]"
              :businessitemdata="BusinessItemData[2]"
            />
          </div>
          <div class="mt-[14px] h-[290px] w-[890px] flex">
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
    title: 'SIサービス事業',
    title_icon: TitleIcon1,
    info_content_1:
      'これまで培ってきた多くの業種業界での経験値及び、最先端の技術力、オフショアリソースを活用し、お客様の企業価値拡大に寄与するシステムを提供いたします。',
    info_content_2: '',
    link: '/si-service-business',
    style: 'w-[287px] h-[594px]'
  },
  {
    background_image: Bg2,
    title: 'データソリューション',
    title_icon: TitleIcon2,
    info_content_1:
      'AI技術やIoTといった最新技術にて、ビジネスへの活用領域検討から、PoC、実装までワンストップで提供いたします。',
    info_content_2: '',
    link: '/data-solution',
    style: 'w-[287px] h-[287px]'
  },
  {
    background_image: Bg3,
    title: 'インフラ事業',
    title_icon: TitleIcon3,
    info_content_1:
      'ITインフラ基盤のスペシャリスト集団として、設計から構築、運用、稼働後の改善提案含めトータルでサービスを提供 いたします。',
    info_content_2: '',
    link: '/infrastructure-business',
    style: 'w-[590px] h-[287px]'
  },
  {
    background_image: Bg5,
    title: '物流事業',
    title_icon: TitleIcon5,
    info_content_1:
      '多種多様な業界における物流知見をベースに、物流における様々な課題をサプライチェーン全体の視点から解決し物流DX改革を実現します。',
    info_content_2: '',
    link: '/logistics-business',
    style: 'w-[590px] h-[287px]'
  },
  {
    background_image: Bg4,
    title: 'ヘルスケア事業',
    title_icon: TitleIcon4,
    info_content_1: 'Comming Soon',
    info_content_2: '',
    link: '/',
    style: 'w-[287px] h-[287px]'
  }
])
</script>

<style scoped>
.bg_image {
  background-image: url('@/assets/images/pic_innovation_bg.png'),
    linear-gradient(0deg, #111f4e 0%, #2e4a9e 100%);
}
</style>
