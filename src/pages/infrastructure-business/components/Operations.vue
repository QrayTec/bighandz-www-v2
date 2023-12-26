<template>
  <div
    id="Supported-Skill-Sets"
    class="font-NotoSansJP px-[15px] lg:px-0"
    data-aos="fade-up"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle>対応領域とスキルセット</ThePageMinTitle>

    <div class="mt-[60px] flex justify-center text-[1rem]">
      <div class="w-full lg:w-[1000px]">
        <div class="w-full flex text-[1rem] font-[700] text-white">
          <div
            class="w-[40%] flex items-center justify-center border border-[#6785C1] border-solid bg-[#6785C1] py-[12px]"
          >
            領域
          </div>
          <div
            class="w-[60%] flex items-center justify-center border border-[#6785C1] border-solid bg-[#6785C1] py-[12px]"
          >
            スキル
          </div>
        </div>
        <div
          v-for="(item, index) in OperationsData"
          :key="index"
          :class="index % 2 === 0 ? '' : 'bg-[#DFE4F2]'"
          class="w-full flex"
        >
          <div
            class="w-[40%] flex items-center border border-[#6785C1] border-solid px-[10px] py-[12px]"
          >
            {{ item.list_1 }}
          </div>
          <div
            class="w-[60%] border border-[#6785C1] border-solid px-[10px] py-[12px]"
          >
            {{ item.list_2 }}
          </div>
        </div>
      </div>
    </div>
    <div class="text-deep_blue mt-[60px] text-[1rem] leading-[2rem] font-[400]">
      <p>
        当社のインフラ事業では、信頼性の高いITインフラストラクチャーソリューションを提供し、お客様のビジネスの成長と成功をサポートいたします。
      </p>
    </div>
    <div
      class="text-deep_blue mt-[30px] w-full text-[1rem] leading-[2rem] font-[400]"
    >
      <p>
        当社は常に最新のテクノロジーと専門知識を活用し、お客様のビジネスに最適なインフラストラクチャーソリューションを提供することをお約束いたします。
      </p>
      <p class="mt-[2.25rem]">
        お客様の成長と成功に貢献するために、真摯な姿勢でサービスを提供いたします。
      </p>
      <p class="mt-[2.25rem] text-[1.25rem] leading-none font-[700]">
        どうぞお気軽にお問い合わせください。
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { OperationsType } from '../types/index'

const OperationsData = ref<OperationsType[]>([
  { list_1: 'クラウド', list_2: 'AWS /AZURE /OCI /SBC（Ali)　など' },
  { list_1: 'サーバー', list_2: 'NEC /HP /IBM /Fujitsu /DELL/各社ブレード' },
  {
    list_1: 'OS',
    list_2: 'WindowsServer /Redhat /HP-UX /Solaris /ESXi /Xen /HyperｰV'
  },
  { list_1: 'ストレージ', list_2: 'EMC /NetApp /NEC /HP /DELL' },
  { list_1: 'ネットワーク', list_2: 'CISCO /Juniper /FortiGate' },
  {
    list_1: 'ミドルウェア',
    list_2:
      'Web /データベース/バックアップ/ウィルス対策 /クラスタ/ワークフロー/仮想化'
  },
  {
    list_1: 'クライアント',
    list_2: 'Windows /シンクライアント端末 /タブレット端末 /モバイル端末'
  },
  { list_1: '運用監視', list_2: 'JP1/Senju/ Systemwalker/ WebSAM/Zabbix' }
])
</script>
<style scoped>
td {
  border: solid 1px #6785c1;
}
</style>
