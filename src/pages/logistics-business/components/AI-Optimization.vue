<template>
  <div
    id="AiDelivery"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle data-aos="fade-up">AIによる配送最適化</ThePageMinTitle>
    <div
      data-aos="fade-up"
      class="font-NotoSansJP text-deep_blue mt-[30px] text-[1rem] font-[400]"
    >
      AIを駆使し配送の効率化を実現する。
    </div>
    <div
      class="mt-[60px] flex justify-center"
      data-aos="fade-up"
    >
      <img
        v-if="MAIN_CONTENT_WIDTH === 1200"
        src="@/assets/images/logistics-business/Change_5.png"
      />
      <photo-provider v-else>
        <photo-consumer
          intro="AIによる配送最適化"
          :src="Change5"
        >
          <img
            :src="Change5"
            class="view-box"
          />
        </photo-consumer>
      </photo-provider>
    </div>
    <div
      data-aos="fade-up"
      class="mt-[60px] w-full flex flex-wrap items-center bg-[#6785C1] lg:h-[168px] lg:flex-nowrap"
    >
      <div
        v-for="(item, index) in AiDeliverData"
        :key="index"
        data-aos="fade-up"
        class="w-[50%] flex justify-between border border-white border-solid lg:w-full lg:border-none"
      >
        <div
          class="h-[181px] w-full flex flex-col items-center justify-center px-[5px] text-center lg:h-auto lg:px-0"
        >
          <div class="h-[50%] flex items-center lg:h-auto">
            <img
              class="h-[48px] w-[48px]"
              :src="item.Image"
              alt=""
            />
          </div>
          <div
            class="font-NotoSansJP mt-[10px] h-[50%] text-[1.25rem] font-[400] text-white lg:mt-[40px] lg:h-auto"
          >
            {{ item.title }}
          </div>
        </div>
        <div
          v-if="index < 3"
          class="hidden h-100px w-[1px] bg-white lg:block"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { AiDeliverType } from '../types/index'
import Change5 from '@/assets/images/logistics-business/Paste.png'
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
