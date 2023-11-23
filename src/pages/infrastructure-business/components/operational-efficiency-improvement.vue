<template>
  <div
    id="operational-efficiency-improvement"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      運用効率向上
    </div>
    <div
      class="font-NotoSansJP mt-[30px] w-full text-[16px] leading-[32px] font-[400]"
    >
      運用改善の提案、定常作業のオフショア活用により運用コスト削減に貢献、24時間365日のSEによる運用保守対応。<br />仮想化技術者も多数在籍しております。
    </div>

    <div
      id="Supported-Areas-Skill-Sets"
      class="mt-[120px] max-w-[500px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      対応領域とスキルセット
    </div>
    <div class="mt-[30px] flex flex-col">
      <div class="flex text-center">
        <div class="w-[20%]">領域</div>
        <div class="w-[80%]">スキル</div>
      </div>
      <div
        v-for="(item, index) in OperationalData"
        :key="index"
        class="flex text-center"
      >
        <div
          class="w-[20%] flex items-center justify-center border-[1px] border-black border-solid p-[10px]"
        >
          {{ item.Area }}
        </div>
        <div
          class="w-[80%] flex items-center justify-center border-[1px] border-black border-solid p-[10px]"
        >
          {{ item.Skill }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { OperationalType } from '../types/index'

const OperationalData = ref<OperationalType[]>([
  { Area: 'クラウド', Skill: 'AWS/AZURE/OCI/SBC（Ali)　など' },
  { Area: 'サーバー', Skill: 'NEC/HP/IBM/Fujitsu/DELL/各社ブレード' },
  { Area: 'OS', Skill: 'WindowsServer/Redhat/HP-UX/Solaris/ESXi/Xen/HyperｰV' },
  { Area: 'ストレージ', Skill: 'EMC/NetApp/NEC/HP/DELL' },
  { Area: 'ネットワーク', Skill: 'CISCO/Juniper/FortiGate' },
  {
    Area: 'ミドルウェア',
    Skill:
      'Web/データベース/バックアップ/ウィルス対策/クラスタ/ワークフロー/仮想化'
  },
  {
    Area: 'クライアント',
    Skill: 'Windows/シンクライアント端末/タブレット端末/モバイル端末'
  },
  {
    Area: '運用監視',
    Skill: 'JP1/Senju/Systemwalker/WebSAM/Zabbix'
  }
])
</script>
<style lang=""></style>
