<template>
  <div
    id="Industry&Experience"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      様々な業界と技術経験
    </div>
    <div
      class="font-NotoSansJP mt-[30px] w-full text-[22px] leading-[32px] font-[400]"
    >
      これまでさまざまな業種・業界で多くの経験を積み、多くの技術を習得するとともに新技術も取り組んできております。
    </div>
    <div
      v-for="(item, index) in ExperienceData"
      :key="index"
      class="mt-[60px] min-h-[360px] w-full flex justify-between text-[20px] text-[#071027]"
    >
      <div
        :class="index % 2 != 0 ? 'order-1' : ''"
        class="w-[calc(50%-15px)] flex flex-col"
      >
        <div class="font-NotoSansJP text-[36px] font-[700] text-[#071027]">
          {{ item.title }}
        </div>
        <ul class="w-full">
          <li
            v-for="(items, i) in item.content"
            :key="i"
            class="mt-[30px] w-full flex px-[30px]"
          >
            <div class="mt-[5px] h-full min-w-[16px]">
              <img
                class="h-16px w-[16px]"
                src="@/assets/images/company_profile/rhombic.svg"
                alt=""
              />
            </div>
            <p class="ml-[10px]">{{ items.list }}</p>
          </li>
        </ul>
      </div>
      <div class="w-[calc(50%-15px)]">
        <div class="h-full w-full">
          <img
            class="h-full w-full"
            :src="item.Image"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { ExperienceType } from '../types/index'
import SI2 from '@/assets/images/si-service-business/si_2.jpg'
import SI3 from '@/assets/images/si-service-business/si_3.jpg'
import SI4 from '@/assets/images/si-service-business/si_4.jpg'

const ExperienceData = ref<ExperienceType[]>([
  {
    title: '技術',
    Image: SI2,
    content: [
      { list: 'システム設計～開発～保守・運用' },
      { list: 'フロント技術（Anglar/VUE/React UI）' },
      { list: 'バック技術（.NET，JAVA,　COBOL）' },
      { list: 'DB技術（ORACLE、SQLSERVER、MYSQL、PostgreSQL等）' },
      { list: 'クラウド技術（AWS、Azure、OCI、AliCloud　など）' },
      { list: 'POSシステム、携帯APP（Adriod、iOS）' }
    ]
  },
  {
    title: '業務領域',
    Image: SI3,
    content: [
      {
        list: '金融（証券、銀行、保険、資産運用など）、製造、流通、小売（POS)、官公庁　など'
      },
      {
        list: 'データ分析/AI/BI （Python、ChatGPT、Qlik、Tableau、SAS　など）'
      },
      { list: '作業自動化（テスト、RPA、ツール開発など）' }
    ]
  },
  {
    title: 'その他',
    Image: SI4,
    content: [
      { list: '大規模プロジェクトPM経験者' },
      { list: '全プロジェクトのQC審査' },
      { list: 'ISO90001、ISO270001などの資格認定' }
    ]
  }
])
</script>
<style lang=""></style>
