<template>
  <div
    id="VirtualizationEngineers"
    class="font-NotoSansJP"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle data-aos="fade-up">仮想化技術者が多数在籍</ThePageMinTitle>
    <div
      class="mt-[60px] w-[800px]"
      data-aos="fade-up"
    >
      <table>
        <tbody>
          <tr
            v-for="(item, index) in VirtualizationEngineerData"
            :key="index"
          >
            <td
              v-if="item.title"
              :rowspan="VirtualizationEngineerData.length"
              class="w-[200px] bg-[#6785C1] px-[30px] py-[20px] text-[1rem] leading-[2rem] font-[400] text-white"
            >
              {{ item.title }}
            </td>
            <td
              class="text-deep_blue w-[600px] px-[30px] py-[20px] text-[1rem] font-[400]"
              :class="index % 2 === 0 ? 'bg-[#fff]' : 'bg-[#DFE4F2]'"
            >
              {{ item.list }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { VirtualizationEngineerType } from '../types/index'

const VirtualizationEngineerData = ref<VirtualizationEngineerType[]>([
  {
    title: 'VMware10数名Citrix数名',
    list: '運用改善の提案により運用コスト削減に貢献'
  },
  { list: '適正なシステムサイジング提案' },
  { list: '日々の運用自動化提案' },
  { list: '24時間365日のSEによる運用保守対応' },
  { list: '深夜・休日の計画作業' },
  { list: '深夜・休日の障害対応' }
])
</script>
<style scoped>
td {
  border: solid 1px #6785c1;
}
</style>
