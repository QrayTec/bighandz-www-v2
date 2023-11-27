<template>
  <div
    id="ExamplesAchievements"
    data-aos="fade-in"
    class="w-full text-[18px]"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      開発実績一例
    </div>
    <div class="mt-[30px] flex flex-col">
      <div class="flex text-center">
        <div class="w-[5%]">NO.</div>
        <div class="w-[20%]">システム名</div>
        <div class="w-[15%]">技術</div>
        <div class="w-[15%]">規模</div>
        <div class="w-[40%]">備考</div>
      </div>
      <div
        v-for="(item, index) in AchievementsData"
        :key="index"
        class="flex text-center"
      >
        <div
          class="w-[5%] flex items-center justify-center border-[1px] border-black border-solid p-[10px]"
        >
          {{ index + 1 }}
        </div>
        <div
          class="w-[20%] flex items-center justify-center border-[1px] border-black border-solid p-[10px]"
        >
          {{ item.SystemName }}
        </div>
        <div
          class="w-[15%] flex items-center justify-center border-[1px] border-black border-solid p-[10px]"
        >
          {{ item.Technology }}
        </div>
        <div
          class="w-[15%] flex items-center justify-center border-[1px] border-black border-solid p-[10px]"
        >
          {{ item.Scale }}
        </div>
        <div
          class="w-[40%] flex items-center justify-center border-[1px] border-black border-solid p-[10px]"
        >
          <p
            v-for="items in item.Remarks"
            :key="items.list_1"
          >
            {{ items.list_1 }}<br v-if="items.list_2" />
            {{ items.list_2 }}<br v-if="items.list_3" />
            {{ items.list_3 }}<br v-if="items.list_4" />
            {{ items.list_4 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { AchievementsType } from '../types/index'

const AchievementsData = ref<AchievementsType[]>([
  {
    SystemName: '健康保険システム',
    Technology: 'TERASOLUNA、Java',
    Scale: '12人チーム、150人月',
    Remarks: [
      {
        list_1: '外部設計・詳細設計・製造：東京、問合対応：東京'
      }
    ]
  },
  {
    SystemName: '介護保険システム',
    Technology: '.NET、VC++、PL/SQL',
    Scale: '25人チーム、300人月',
    Remarks: [
      {
        list_1: '外部設計：東京、詳細設計・製造：青島'
      }
    ]
  },
  {
    SystemName: '簡易保険システム',
    Technology: 'MF COBOL',
    Scale: '40人チーム、480人月',
    Remarks: [
      {
        list_1: '概要設計、外部設計：東京、詳細設計・製造：東京　'
      }
    ]
  },
  {
    SystemName: '電波監視システム',
    Technology: '.NET、VC++、PL/SQL',
    Scale: '50人チーム、350人月',
    Remarks: [
      {
        list_1: '概要設計、外部設計：東京、詳細設計・製造：青島　'
      }
    ]
  },
  {
    SystemName: '電子入札システム',
    Technology: 'Spring、Java',
    Scale: '30人チーム、400人月',
    Remarks: [
      {
        list_1: '外部設計：東京、詳細設計・製造：青島　'
      }
    ]
  },
  {
    SystemName: '製薬会社向け製造販売後調査システム',
    Technology: 'Spring、Java、JQuery',
    Scale: '10人チーム、100人月',
    Remarks: [
      {
        list_1: '外部設計：東京、詳細設計・製造：青島　'
      }
    ]
  },
  {
    SystemName: '証券システム（開発）',
    Technology: 'Java、COBOL',
    Scale: '46人チーム、600人月',
    Remarks: [
      {
        list_1: '外部設計：東京、詳細設計・製造：青島'
      }
    ]
  },
  {
    SystemName: '証券システム（運用）',
    Technology: 'Java、COBOL',
    Scale: '25人チーム、LAB契約',
    Remarks: [
      {
        list_1: '運用：東京、青島、テスト：東京、青島'
      }
    ]
  },
  {
    SystemName: 'POSシステム',
    Technology: 'Java、.NET、C++',
    Scale: '40人チーム',
    Remarks: [
      {
        list_1: '外部設計：東京、詳細設計・製造　大連・青島',
        list_2: 'POSチーム体制確立し、保守・運用までサポート',
        list_3: '対応機種：富士通、NCR、東芝テック、NEC、寺岡',
        list_4: 'Mobile/Cloud POSも対応経験有'
      }
    ]
  },
  {
    SystemName: 'コールセンタシステム',
    Technology: 'Java',
    Scale: '20人チーム、100人月',
    Remarks: [
      {
        list_1: '外部設計：東京、詳細設計・製造：大連、青島',
        list_2: '保守・運用体制構築し対応中　'
      }
    ]
  }
])
</script>
<style lang=""></style>
