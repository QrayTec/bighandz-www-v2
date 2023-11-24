<template>
  <div
    id="Cloud-Enhancement-Strategy"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      クラウド強化戦略
    </div>
    <div
      class="font-NotoSansJP mt-[30px] w-full text-[16px] leading-[32px] font-[400]"
    >
      インフラ分野では、クラウド関連事業を重点的に強化する⽅針を決定し、AWS、Azure、OCIのアプリケーションやプラットホームの開発、中国内で圧倒的な市場シェアを持つ『アリババクラウド』の構築・運⽤・保守といったトレンドの技術を⽤いたスケールの⼤きな案件をこれまで担ってきております。
    </div>
    <div
      class="font-NotoSansJP mt-[30px] w-full text-[16px] leading-[32px] font-[400]"
    >
      ⼤規模案件や社会貢献性の⾼い案件に取り組めるのは、これまでの実績がある当社だからと自負しております。
    </div>
    <div
      class="font-NotoSansJP mt-[30px] w-full text-[16px] leading-[32px] font-[400]"
    >
      インフラは企業の生命線となる根幹であり、あらゆる対応にSPEED感と状況に応じオフショアのリソースPOWERを活用し対応しております。
    </div>
    <div
      v-for="(item, index) in CloudData"
      :key="index"
      class="mt-[30px] w-full"
    >
      <div class="flex items-center">
        <div class="h-[32px] w-[4px] bg-[#F6C103]"></div>
        <div class="font-NotoSansJP ml-[10px] text-[36px] font-[400]">
          {{ item.title }}
        </div>
      </div>
      <hr />
      <div class="flex justify-between">
        <div
          class="w-[calc(50%-15px)] px-[25px] py-[71px]"
          :class="index % 2 == 0 ? 'order-1' : ''"
        >
          <img
            :src="item.Image"
            alt=""
          />
        </div>
        <div
          class="w-[calc(50%-15px)] flex items-center justify-center px-[25px] py-[71px]"
        >
          <div class="font-NotoSansJP">
            <ul>
              <li
                v-for="(items, i) in item.content"
                :key="i"
                class="w-[308px] flex items-center text-[24px]"
                :style="{ color: items.ClassName }"
                :class="i != 0 ? 'mt-[30px]' : ''"
              >
                <div
                  class="h-[16px] w-[16px] rounded"
                  :style="{ background: items.ClassName }"
                ></div>
                <div class="ml-[10px] w-[calc(100%-16px)] flex justify-between">
                  <div>{{ items.list_1 }}</div>
                  <div>{{ items.list_2 }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import Cloud1 from '@/assets/images/infrastructure-business/Cloud_1.png'
import { CloudType } from '../types/index'

const CloudData = ref<CloudType[]>([
  {
    title: '業種別開発実績',
    Image: Cloud1,
    content: [
      {
        ClassName: '#8959FB',
        list_1: 'クラウド',
        list_2: '40%'
      },
      {
        ClassName: '#037EEF',
        list_1: 'VM',
        list_2: '20%'
      },
      {
        ClassName: '#E22E59',
        list_1: 'ネットワーク',
        list_2: '20%'
      },
      {
        ClassName: '#E45C46',
        list_1: 'オンプレ',
        list_2: '10%'
      },
      {
        ClassName: '#0DAEB3',
        list_1: 'その他',
        list_2: '10%'
      }
    ]
  }
])
</script>
<style lang=""></style>
