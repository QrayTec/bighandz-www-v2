<template>
  <div
    id="AiDelivery"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[42px] py-[17px] text-[36px] font-[500] text-white"
    >
      AIによる配送最適化
    </div>
    <div
      class="font-NotoSansJP mt-[30px] text-[20px] font-[700] text-[#071027]"
    >
      AIを駆使し配送の効率化を実現する。
    </div>
    <div class="mt-[60px] flex justify-center">
      <img
        src="@/assets/images/logistics-business/Change_5.png"
        alt=""
      />
    </div>
    <div class="mt-[60px] h-[168px] w-full flex items-center bg-[#6785C1]">
      <div
        v-for="(item, index) in AiDeliverData"
        :key="index"
        class="w-full flex justify-between"
      >
        <div class="w-full flex flex-col items-center justify-center">
          <div>
            <img
              :src="item.Image"
              alt=""
            />
          </div>
          <div
            class="font-NotoSansJP mt-[40px] text-[20px] font-[400] text-white"
          >
            {{ item.title }}
          </div>
        </div>
        <div
          v-if="index < 3"
          class="h-100px w-[1px] bg-white"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { AiDeliverType } from '../types/index'
import Icon1 from '@/assets/images/logistics-business/icon_1.svg'
import Icon2 from '@/assets/images/logistics-business/icon_2.svg'
import Icon3 from '@/assets/images/logistics-business/icon_3.svg'
import Icon4 from '@/assets/images/logistics-business/icon_4.svg'

const AiDeliverData = ref<AiDeliverType[]>([
  { Image: Icon1, title: '配送順最適化' },
  { Image: Icon2, title: '納品先別積載' },
  { Image: Icon3, title: 'コスト最小化' },
  { Image: Icon4, title: '配送ルート最適化' }
])
</script>
<style lang=""></style>
