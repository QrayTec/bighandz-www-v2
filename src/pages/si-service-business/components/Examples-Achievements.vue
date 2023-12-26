<template>
  <div class="font-NotoSansJP w-full flex flex-col items-center">
    <div
      id="ExamplesAchievements"
      data-aos="fade-in"
      class="w-full px-[15px] lg:px-0"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <ThePageMinTitle3 data-aos="fade-right">開発実績一例</ThePageMinTitle3>
      <div
        class="mt-[60px]"
        data-aos="fade-up"
      >
        <table
          v-if="MAIN_CONTENT_WIDTH === 1200"
          class="w-full border border-[#6785C1] border-solid"
        >
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

        <table
          v-if="MAIN_CONTENT_WIDTH < 1200"
          class="w-full"
        >
          <tbody class="w-full text-[1rem] font-[400] text-[#071027]">
            <div
              v-for="(item, index) in AchievementsData"
              :key="index"
              class="w-full flex flex-col items-center justify-center"
            >
              <thead class="w-full flex justify-center">
                <tr class="text-cobalt_blue w-full bg-[#DFE4F2] text-left">
                  <th class="w-[120px] px-[8px] py-[5px] align-middle">No.</th>
                  <th
                    class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                  >
                    {{ index + 1 }}
                  </th>
                </tr>
              </thead>

              <tr class="flex justify-center">
                <td class="w-[120px] px-[8px] py-[5px] align-middle">
                  システム名
                </td>
                <td
                  class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                >
                  {{ item.SystemName }}
                </td>
              </tr>
              <tr>
                <td class="w-[120px] px-[8px] py-[5px] align-middle">技術</td>
                <td
                  class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                >
                  {{ item.Technology }}
                </td>
              </tr>
              <tr>
                <td class="w-[120px] px-[8px] py-[5px] align-middle">規模</td>
                <td
                  class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                >
                  {{ item.Scale }}
                </td>
              </tr>
              <tr>
                <td class="h-full w-[120px] px-[8px] py-[5px] align-middle">
                  備考
                </td>
                <td
                  class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                >
                  {{ item.Remarks }}
                </td>
              </tr>
            </div>
          </tbody>
          <tbody>
            <div class="w-full flex flex-col items-center justify-center">
              <thead class="w-full flex justify-center">
                <tr class="text-cobalt_blue w-full bg-[#DFE4F2] text-left">
                  <th class="w-[120px] px-[8px] py-[5px] align-middle">No.</th>
                  <th
                    class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                  >
                    9
                  </th>
                </tr>
              </thead>

              <tr class="bg-[#FDEADA]">
                <td class="w-[120px] px-[8px] py-[5px] align-middle">
                  システム名
                </td>
                <td
                  class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                >
                  POSシステム
                </td>
              </tr>
              <tr class="bg-[#FDEADA]">
                <td class="w-[120px] px-[8px] py-[5px] align-middle">技術</td>
                <td
                  class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                >
                  Java、.NET、C++
                </td>
              </tr>
              <tr class="bg-[#FDEADA]">
                <td class="w-[120px] px-[8px] py-[5px] align-middle">規模</td>
                <td
                  class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                >
                  40人チーム
                </td>
              </tr>
              <tr class="bg-[#FDEADA]">
                <td class="h-full w-[120px] px-[8px] py-[5px] align-middle">
                  備考
                </td>
                <td
                  class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                >
                  外部設計：東京、詳細設計・製造 大連・青島
                  POSチーム体制確立し、保守・運用までサポート 対応機種：<span
                    class="text-[#6785C1]"
                    >富士通、NCR、東芝テック、NEC、寺岡</span
                  >
                  Mobile/Cloud POSも対応経験有
                </td>
              </tr>
            </div>
            <div class="w-full flex flex-col items-center justify-center">
              <thead class="w-full flex justify-center">
                <tr class="text-cobalt_blue w-full bg-[#DFE4F2] text-left">
                  <th class="w-[120px] px-[8px] py-[5px] align-middle">No.</th>
                  <th
                    class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                  >
                    10
                  </th>
                </tr>
              </thead>

              <tr class="bg-[#FFD9B9]">
                <td class="w-[120px] px-[8px] py-[5px] align-middle">
                  システム名
                </td>
                <td
                  class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                >
                  コールセンタシステム
                </td>
              </tr>
              <tr class="bg-[#FFD9B9]">
                <td class="w-[120px] px-[8px] py-[5px] align-middle">技術</td>
                <td
                  class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                >
                  Java
                </td>
              </tr>
              <tr class="bg-[#FFD9B9]">
                <td class="w-[120px] px-[8px] py-[5px] align-middle">規模</td>
                <td
                  class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                >
                  20人チーム、100人月
                </td>
              </tr>
              <tr class="bg-[#FFD9B9]">
                <td class="h-full w-[120px] px-[8px] py-[5px] align-middle">
                  備考
                </td>
                <td
                  class="w-[225px] px-[10px] py-[5px] md:w-[calc(680px-120px)]"
                >
                  外部設計：東京、詳細設計・製造：大連、青島
                  保守・運用体制構築し対応中
                </td>
              </tr>
            </div>
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
        class="flex flex-col px-[15px] py-[60px] lg:px-[123px]"
      >
        <div
          class="order-1 flex flex-col items-center lg:order-0 lg:flex-row md:flex-row md:flex-wrap lg:justify-between"
        >
          <div
            v-for="(item, index) in ImageListData"
            :key="index"
            class="h-[220px] w-[216px] flex flex-col items-center justify-center px-[20px] pb-[14px] pt-[30px] md:h-[300px] md:w-[300px]"
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
          class="text-cobalt_blue order-0 mt-[60px] flex justify-center text-[1.25rem] font-[700] lg:order-1"
        >
          幅広いコンピュータ技術を持ち、業務システムの構築ノウハウを蓄積・保有している。
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { AchievementsData, ImageListData } from '../data/index'
</script>
<style scoped>
th,
td {
  border: 1px solid #6785c1;
}
</style>
