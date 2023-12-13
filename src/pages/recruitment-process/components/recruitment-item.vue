<template>
  <div
    class="page_center_items relative my-[40px] flex flex-col items-center"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="absolute z-[-1] h-full w-[calc(100%-120px)] bg-white"></div>

    <div class="w-full py-[60px]">
      <div
        class="pl-[204px]"
        data-aos="slide-right"
      >
        <div
          class="font-NotoSansJP text-deep_blue font-feature-settings-cilg-liga text-[1rem] leading-normal font-[400]"
        >
          応募から採用までの流れをご説明しています。
        </div>
        <hr class="hr mt-[60px]" />
      </div>
      <div
        v-for="item in RecruitmentData"
        :id="item.anchor"
        :key="item.id"
        class="font-NotoSansJP text-deep_blue mt-[60px] text-[1rem] leading-normal font-[400]"
      >
        <the-page-min-title2>{{ item.subheading }}</the-page-min-title2>
        <div
          class="pl-[204px]"
          data-aos="slide-right"
        >
          <p class="mt-[30px]">
            {{ item.list_data_1 }}
          </p>
          <the-download-btn
            v-if="item.id === 1"
            :href="'rirekisyo.xlsx'"
            class="mt-[30px]"
            >テンプレートのダウンロード</the-download-btn
          >
          <p class="mt-[30px]">
            {{ item.list_data_2 }}
          </p>
          <p class="mt-[30px]">{{ item.list_data_3 }}</p>
        </div>
      </div>
      <div
        class="pl-[204px]"
        data-aos="slide-right"
      >
        <hr class="hr mt-[30px]" />
        <div
          class="font-NotoSansJP font-feature-settings-cilg-liga mt-[60px] text-[1rem] leading-[2rem] font-[400] text-[#6785c1]"
        >
          <p>※応募から内定までの間、1～2か月程度のお時間をいただきます。</p>
          <p class="mt-[30px]">
            ※選考結果は、合否にかかわらずメールでお知らせいたします。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

import { RecruitmentType } from '../types/index'

const RecruitmentData = ref<RecruitmentType[]>([
  {
    id: 1,
    anchor: 'STEP1',
    subheading: 'STEP ①',
    list_data_1: 'テンプレートを参考に履歴書を記入してください',
    list_data_2:
      '履歴書をダンロードし、指定されたメールアドレスにご提出お願い致します。',
    list_data_3: '結果連絡まで約1カ月間を要します。'
  },
  {
    id: 2,
    anchor: 'STEP2',
    subheading: 'STEP ②',
    list_data_1: '履歴選考（職種により必要性に応じて実施します）'
  },
  {
    id: 3,
    anchor: 'STEP3',
    subheading: 'STEP ③',
    list_data_1: '面接 （複数回を予定）'
  },
  {
    id: 4,
    anchor: 'STEP4',
    subheading: 'STEP ④',
    list_data_1: '内定'
  }
])
</script>

<style scoped>
@media (min-width: 768px) and (max-width: 1023px) {
  .page_center_items {
    width: 80%;
  }

  .p_l_204 {
    padding-left: 0px;
  }
}
@media (max-width: 767px) {
  .page_center_items {
    width: 80%;
  }

  .p_l_204 {
    padding-left: 0px;
  }
}
</style>
