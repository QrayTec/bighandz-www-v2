<template>
  <div class="font-NotoSansJP w-full flex flex-col items-center">
    <div
      id="ExamplesAchievements"
      data-aos="fade-in"
      class="w-full"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <ThePageMinTitle data-aos="fade-right">開発実績一例</ThePageMinTitle>
      <div
        class="mt-[60px]"
        data-aos="fade-up"
      >
        <table class="w-full border border-[#6785C1] border-solid">
          <thead
            class="h-[36px] bg-[#DFE4F2] py-[12px] text-center text-[1rem] font-[700] text-[#071027]"
          >
            <tr>
              <th class="w-[56px]">No.</th>
              <th class="w-[224px]">システム名</th>
              <th class="w-[240px]">技術</th>
              <th class="w-[206px]">規模</th>
              <th class="w-[474px]">備考</th>
            </tr>
          </thead>
          <tbody class="text-[1rem] font-[400] text-[#071027]">
            <tr
              v-for="(item, index) in AchievementsData"
              :key="index"
            >
              <td class="py-[12px] text-center">
                {{ index + 1 }}
              </td>
              <td class="px-[10px] py-[12px]">{{ item.SystemName }}</td>
              <td class="px-[10px] py-[12px]">{{ item.Technology }}</td>
              <td class="px-[10px] py-[12px]">{{ item.Scale }}</td>
              <td class="px-[10px] py-[12px]">{{ item.Remarks }}</td>
            </tr>
            <tr class="bg-[#FDEADA]">
              <td class="py-[12px] text-center">9</td>
              <td class="px-[10px] py-[12px]">POSシステム</td>
              <td class="px-[10px] py-[12px]">Java、.NET、C++</td>
              <td class="px-[10px] py-[12px]">40人チーム</td>
              <td class="px-[10px] py-[12px]">
                外部設計：東京、詳細設計・製造 大連・青島
                POSチーム体制確立し、保守・運用までサポート 対応機種：
                <span class="text-[#6785C1]"
                  >富士通、NCR、東芝テック、NEC、寺岡</span
                >
                Mobile/Cloud POSも対応経験有
              </td>
            </tr>
            <tr class="bg-[#FFD9B9]">
              <td class="py-[12px] text-center">10</td>
              <td class="px-[10px] py-[12px]">コールセンタシステム</td>
              <td class="px-[10px] py-[12px]">Java</td>
              <td class="px-[10px] py-[12px]">20人チーム、100人月</td>
              <td class="px-[10px] py-[12px]">
                外部設計：東京、詳細設計・製造：大連、青島
                保守・運用体制構築し対応中
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      data-aos="fade-up"
      class="mt-[120px] w-full flex justify-center bg-[#F4F4F4]"
    >
      <div
        :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
        class="px-[123px] py-[60px]"
      >
        <div class="flex justify-between">
          <div
            v-for="(item, index) in ImageListData"
            :key="index"
            class="h-[220px] w-[216px] flex flex-col items-center justify-center px-[20px] pb-[14px] pt-[30px]"
          >
            <div
              class="h-[120px] w-[120px] flex items-center justify-center border border-[#DFE4F2] rounded-full border-solid"
            >
              <img
                :src="item.Image"
                alt=""
              />
            </div>
            <div
              class="text-deep_blue mt-[10px] text-center text-[1rem] font-[700]"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
        <div
          class="text-cobalt_blue mt-[60px] flex justify-center text-[1.25rem] font-[700]"
        >
          幅広いコンピュータ技術を持ち、業務システムの構築ノウハウを蓄積・保有している。
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { AchievementsType, ImageListType } from '../types/index'
import ExpIcon1 from '@/assets/images/si-service-business/Exp_icon_1.svg'
import ExpIcon2 from '@/assets/images/si-service-business/Exp_icon_2.svg'
import ExpIcon3 from '@/assets/images/si-service-business/Exp_icon_3.svg'
import ExpIcon4 from '@/assets/images/si-service-business/Exp_icon_4.svg'

const AchievementsData = ref<AchievementsType[]>([
  {
    SystemName: '健康保険システム',
    Technology: 'TERASOLUNA、Java',
    Scale: '12人チーム、150人月',
    Remarks: '外部設計・詳細設計・製造：東京、問合対応：東京'
  },
  {
    SystemName: '介護保険システム',
    Technology: '.NET、VC++、PL/SQL',
    Scale: '25人チーム、300人月',
    Remarks: '外部設計：東京、詳細設計・製造：青島'
  },
  {
    SystemName: '簡易保険システム',
    Technology: 'MF COBOL',
    Scale: '40人チーム、480人月',
    Remarks: '概要設計、外部設計：東京、詳細設計・製造：東京　'
  },
  {
    SystemName: '電波監視システム',
    Technology: '.NET、VC++、PL/SQL',
    Scale: '50人チーム、350人月',
    Remarks: '概要設計、外部設計：東京、詳細設計・製造：青島　'
  },
  {
    SystemName: '電子入札システム',
    Technology: 'Spring、Java',
    Scale: '30人チーム、400人月',
    Remarks: '外部設計：東京、詳細設計・製造：青島　'
  },
  {
    SystemName: '製薬会社向け製造販売後調査システム',
    Technology: 'Spring、Java、JQuery',
    Scale: '10人チーム、100人月',
    Remarks: '外部設計：東京、詳細設計・製造：青島　'
  },
  {
    SystemName: '証券システム（開発）',
    Technology: 'Java、COBOL',
    Scale: '46人チーム、600人月',
    Remarks: '外部設計：東京、詳細設計・製造：青島'
  },
  {
    SystemName: '証券システム（運用）',
    Technology: 'Java、COBOL',
    Scale: '25人チーム、LAB契約',
    Remarks: '運用：東京、青島、テスト：東京、青島'
  }
])

const ImageListData = ref<ImageListType[]>([
  {
    Image: ExpIcon1,
    title: 'カスタムソフトウェア開発'
  },
  {
    Image: ExpIcon2,
    title: 'パッケージソフトウェア開発'
  },
  {
    Image: ExpIcon3,
    title: 'Webアプリケーション開発'
  },
  {
    Image: ExpIcon4,
    title: 'スマートフォンアプリケーション開発'
  }
])
</script>
<style scoped>
th,
td {
  border: 1px solid #6785c1;
}
</style>
