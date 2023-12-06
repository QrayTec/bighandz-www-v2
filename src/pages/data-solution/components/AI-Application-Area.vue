<template>
  <div
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    class="font-NotoSansJP"
  >
    <ThePageMinTitle>AIの産業活用領域</ThePageMinTitle>
    <div class="text-deep_blue mt-[60px] text-[1rem] leading-[2rem] font-[400]">
      <table class="w-[1000px] border border-[#6785C1] border-solid">
        <tr
          v-for="(item, index) in AIApplicationAreaData"
          :key="index"
          :class="index % 2 === 0 ? 'bg-[#fff]' : 'bg-[#DFE4F2]'"
        >
          <td class="w-[50%] px-[30px] py-[20px]">{{ item.list_1 }}</td>
          <td class="w-[50%] px-[30px] py-[20px]">{{ item.list_2 }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { AIApplicationAreaType } from '../types/index'

const AIApplicationAreaData = ref<AIApplicationAreaType[]>([
  { list_1: '金融サービス', list_2: 'ホテル' },
  { list_1: '小売り', list_2: 'エネルギー' },
  { list_1: '製造', list_2: '通信' },
  { list_1: '輸送', list_2: 'サービス' },
  { list_1: 'ヘルスケア', list_2: 'メディア/エンターテインメント' }
])
</script>
<style scoped>
td {
  border: 1px solid #6785c1;
}
</style>
