<template>
  <div
    id="Industry&Experience"
    data-aos="fade-in"
    class="font-NotoSansJP w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle3 data-aos="fade-right"
      >様々な業界と技術経験</ThePageMinTitle3
    >

    <div
      data-aos="fade-right"
      class="text-deep_blue mt-[30px] w-full text-[1rem] leading-[32px] font-[400]"
    >
      これまでさまざまな業種・業界で多くの経験を積み、多くの技術を習得するとともに新技術も取り組んできております。
    </div>
    <div class="mt-[60px] w-full flex justify-between">
      <div
        class="w-[calc(50%-20px)] flex"
        data-aos="fade-right"
      >
        <div class="relative z-2 w-[100px]">
          <div class="relative h-[418px] w-[100px]">
            <img
              class="h-full w-full"
              src="@/assets/images/si-service-business/Exp_1.svg"
              alt=""
            />
            <img
              class="absolute left-[80px] top-[0px]"
              src="@/assets/images/si-service-business/Exp_top_1.svg"
              alt=""
            />
            <img
              class="absolute bottom-[0px] left-[80px]"
              src="@/assets/images/si-service-business/Exp_bottom_1.svg"
              alt=""
            />
          </div>

          <div
            class="absolute left-[30px] top-[50%] w-[20px] translate-y-[-50%] text-[1.25rem] font-[700] text-white"
          >
            技術
          </div>
        </div>
        <div
          class="text-deep_blue z-1 w-[500px] translate-x-[-20px] py-[20px] text-[1rem] font-[400]"
        >
          <div
            v-for="(item, index) in SkillData"
            :key="index"
            :class="index % 2 == 0 ? 'bg-[#D3E1E5]' : 'bg-[#F4F4F4]'"
            class="h-[63px] px-[20px] py-[20px]"
          >
            {{ item.list }}
          </div>
        </div>
      </div>
      <div
        class="w-[calc(50%-20px)] flex flex-col"
        data-aos="fade-left"
      >
        <div class="w-full flex">
          <div class="relative z-2 w-[100px] translate-y-[4px]">
            <div class="relative h-[209px] w-[100px]">
              <img
                class="h-full w-full"
                src="@/assets/images/si-service-business/Exp_2.svg"
                alt=""
              />
              <img
                class="absolute left-[80px] top-[0]"
                src="@/assets/images/si-service-business/Exp_top_2.svg"
                alt=""
              />
            </div>
            <div
              class="absolute left-[30px] top-[50%] w-[20px] translate-y-[-50%] text-[1.25rem] font-[700] text-[#177554]"
            >
              業 務 領 域
            </div>
          </div>
          <div
            class="text-deep_blue z-1 w-[500px] translate-x-[-20px] translate-y-[4px] pt-[20px] text-[1rem] font-[400]"
          >
            <div
              v-for="(item, index) in BusinessesData"
              :key="index"
              :class="index % 2 === 0 ? 'bg-[#D4E6DF]' : 'bg-[#F4F4F4]'"
              class="h-[62px] flex items-center px-[30px]"
            >
              {{ item.list }}
            </div>
          </div>
        </div>
        <div class="w-full flex">
          <div class="relative z-2 w-[100px] translate-y-[-4px]">
            <div class="relative h-[209px] w-[100px]">
              <img
                class="h-full w-full"
                src="@/assets/images/si-service-business/Exp_3.svg"
                alt=""
              />
              <img
                class="absolute bottom-[0] left-[80px]"
                src="@/assets/images/si-service-business/Exp_bottom_3.svg"
                alt=""
              />
            </div>
            <div
              class="absolute left-[30px] top-[50%] w-[20px] translate-y-[-50%] text-[1.25rem] font-[700] text-white"
            >
              そ の 他
            </div>
          </div>
          <div
            class="text-deep_blue z-1 w-[500px] translate-x-[-20px] pb-[20px] text-[1rem] font-[400]"
          >
            <div
              v-for="(item, index) in OtherData"
              :key="index"
              :class="index % 2 === 1 ? 'bg-[#D3E3E5]' : 'bg-[#F4F4F4]'"
              class="h-[62px] flex items-center px-[30px]"
            >
              {{ item.list }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { ExperienceList } from '../types/index'

const SkillData = ref<ExperienceList[]>([
  { list: 'システム設計～開発～保守・運用' },
  { list: 'フロント技術（Anglar/VUE/React UI）' },
  { list: 'バック技術（.NET，JAVA,　COBOL）' },
  { list: 'DB技術（ORACLE、SQLSERVER、MYSQL、PostgreSQL等）' },
  { list: 'クラウド技術（AWS、Azure、OCI、AliCloud　など）' },
  { list: 'POSシステム、携帯APP（Adriod、iOS）' }
])
const BusinessesData = ref<ExperienceList[]>([
  {
    list: '金融（証券、銀行、保険、資産運用など）、製造、流通、小売（POS)、官公庁　など'
  },
  { list: 'データ分析/AI/BI （Python、ChatGPT、Qlik、Tableau、SAS　など）' },
  { list: '作業自動化（テスト、RPA、ツール開発など）' }
])

const OtherData = ref<ExperienceList[]>([
  {
    list: '大規模プロジェクトPM経験者'
  },
  { list: '全プロジェクトのQC審査' },
  { list: 'ISO90001、ISO270001などの資格認定' }
])
</script>
<style lang=""></style>
