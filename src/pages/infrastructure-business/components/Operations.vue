<template>
  <div
    class="font-NotoSansJP"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="text-deep_blue text-[16px] leading-[2rem] font-[400]">
      <p>
        運用改善の提案、定常作業のオフショア活用により運用コスト削減に貢献、24時間365日のSEによる運用保守対応。
      </p>
      <p class="mt-[2rem]">仮想化技術者も多数在籍しております。</p>
    </div>
    <div class="mt-[60px] flex justify-center text-[1rem]">
      <table class="w-[1000px]">
        <thead class="bg-[#6785C1] font-[700] text-white">
          <tr>
            <th class="w-[22.4%] py-[12px]">領域</th>
            <th class="w-[77.6%] py-[12px]">スキル</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in OperationsData"
            :key="index"
            :class="index % 2 === 0 ? 'bg-[#fff]' : 'bg-[#DFE4F2]'"
            class="text-cobalt_blue text-[1rem] font-[400]"
          >
            <td class="px-[25px] py-[12px]">{{ item.list_1 }}</td>
            <td class="px-[25px] py-[12px]">{{ item.list_2 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { OperationsType } from '../types/index'

const OperationsData = ref<OperationsType[]>([
  { list_1: 'クラウド', list_2: 'AWS/AZURE/OCI/SBC（Ali)　など' },
  { list_1: 'サーバー', list_2: 'NEC/HP/IBM/Fujitsu/DELL/各社ブレード' },
  {
    list_1: 'OS',
    list_2: 'WindowsServer/Redhat/HP-UX/Solaris/ESXi/Xen/HyperｰV'
  },
  { list_1: 'ストレージ', list_2: 'EMC/NetApp/NEC/HP/DELL' },
  { list_1: 'ネットワーク', list_2: 'CISCO/Juniper/FortiGate' },
  {
    list_1: 'ミドルウェア',
    list_2:
      'Web/データベース/バックアップ/ウィルス対策/クラスタ/ワークフロー/仮想化'
  },
  {
    list_1: 'クライアント',
    list_2: 'Windows/シンクライアント端末/タブレット端末/モバイル端末'
  },
  { list_1: '運用監視', list_2: 'JP1/Senju/Systemwalker/WebSAM/Zabbix' }
])
</script>
<style scoped>
td {
  border: solid 1px #6785c1;
}
</style>
