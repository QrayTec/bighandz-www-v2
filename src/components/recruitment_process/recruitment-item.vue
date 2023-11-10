<template>
  <div class="page_center_items m_t_120 m_b_240">
    <div
      class="p_l_204"
      data-aos="slide-right"
    >
      <div class="page_center_text">
        応募から採用までの流れをご説明しています。
      </div>
      <hr class="hr m_t_60" />
    </div>
    <div
      v-for="(item, index) in RecruitmentData"
      :id="item.anchor"
      :key="item.id"
      class="m_t_60 page_center_text"
    >
      <steps :stepsdata="StepsData[index++]" />
      <div
        class="p_l_204"
        data-aos="slide-right"
      >
        <p class="m_t_30">{{ item.list_data_1 }}</p>
        <the-download-btn
          v-if="item.id === 1"
          class="m_t_30"
        />
        <p class="m_t_30">
          {{ item.list_data_2 }}
        </p>
        <p class="m_t_30">{{ item.list_data_3 }}</p>
      </div>
    </div>
    <div
      class="p_l_204"
      data-aos="slide-right"
    >
      <hr class="hr m_t_60" />
      <div class="m_t_60 instructions">
        <p>※応募から内定までの間、1～2か月程度のお時間をいただきます。</p>
        <p class="m_t_30">
          ※選考結果は、合否にかかわらずメールでお知らせいたします。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { StepsType } from '@/data/pages_interface'

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
    subheading: 'STEP 1',
    title_main: '第一步'
  },
  {
    id: 2,
    subheading: 'STEP 2',
    title_main: '第二步'
  },
  {
    id: 3,
    subheading: 'STEP 3',
    title_main: '第三步'
  },
  {
    id: 4,
    subheading: 'STEP 4',
    title_main: '第四步'
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
.p_l_204 {
  padding-left: 204px;
}
.page_center_text {
  color: var(---, #0e1b47);
  font-feature-settings: 'clig' off, 'liga' off;

  /* 正文 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.instructions {
  color: var(---, #6785c1);
  font-feature-settings: 'clig' off, 'liga' off;

  /* 正文段落 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}
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
