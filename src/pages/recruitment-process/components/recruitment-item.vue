<template>
  <div
    class="page_center_items m-t[120px] mb-[240px]"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="pl-[204px]"
      data-aos="slide-right"
    >
      <div
        class="font-NotoSansJP font-feature-settings-cilg-liga text-[20px] leading-none font-[400] not-italic text-[#0e1b47]"
      >
        応募から採用までの流れをご説明しています。
      </div>
      <hr class="hr mt-[60px]" />
    </div>
    <div
      v-for="item in RecruitmentData"
      :id="item.anchor"
      :key="item.id"
      class="font-NotoSansJP font-feature-settings-cilg-liga mt-[60px] text-[20px] leading-none font-[400] not-italic text-[#0e1b47]"
    >
      <steps :stepsdata="StepsData[RecruitmentData.indexOf(item)]" />
      <div
        class="pl-[204px]"
        data-aos="slide-right"
      >
        <p class="mt-[30px]">
          {{ item.list_data_1 }}
        </p>
        <the-download-btn
          v-if="item.id === 1"
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
        class="font-NotoSansJP .font-feature-settings-cilg-liga mt-[60px] text-[20px] leading-[32px] font-[400] not-italic text-[#6785c1]"
      >
        <p>※応募から内定までの間、1～2か月程度のお時間をいただきます。</p>
        <p class="mt-[30px]">
          ※選考結果は、合否にかかわらずメールでお知らせいたします。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { StepsType } from '@/data/pages_interface'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

interface RecruitmentType {
  id: number
  anchor: string
  list_data_1: string
  list_data_2?: string
  list_data_3?: string
}

const StepsData = ref<StepsType[]>([
  {
    id: 1,
    subheading: 'STEP ①'
  },
  {
    id: 2,
    subheading: 'STEP ②'
  },
  {
    id: 3,
    subheading: 'STEP ③'
  },
  {
    id: 4,
    subheading: 'STEP ④'
  }
])

const RecruitmentData = ref<RecruitmentType[]>([
  {
    id: 1,
    anchor: 'STEP1',
    list_data_1: 'テンプレートを参考に履歴書を記入してください',
    list_data_2:
      '履歴書をダンロードし、指定されたメールアドレスにご提出お願い致します。',
    list_data_3: '結果連絡まで約1カ月間を要します。'
  },
  {
    id: 2,
    anchor: 'STEP2',
    list_data_1: '履歴選考（職種により必要性に応じて実施します）'
  },
  {
    id: 3,
    anchor: 'STEP3',
    list_data_1: '面接 （複数回を予定）'
  },
  {
    id: 4,
    anchor: 'STEP4',
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
