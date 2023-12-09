<template>
  <div
    id="ExperiencedPerson"
    class="font-NotoSansJP text-deep_blue relative h-auto flex justify-center"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="absolute z-[-1] h-full w-[calc(100%-120px)] bg-white"></div>
    <div class="w-full">
      <ThePageMinTitle2>経験者</ThePageMinTitle2>
      <div class="px-[90px]">
        <div class="mt-[60px] text-[1rem] leading-[2rem] font-[400]">
          <p>
            開発エンジニア（システムエンジニア／プログラマ）、インフラ基盤系エンジニア及び営業を募集しています。
          </p>
          <p class="mt-[2.25rem]">
            ご自身が持っているスキル・経験を活かしたい方、キャリアアップを目指している方、収入増を目指している方は、是非ともご応募ください。お待ちしています。
          </p>
          <p class="mt-[2.25rem]">私たちといっしょに夢を実現しませんか。</p>
        </div>

        <div
          class="text-deep_blue mt-[60px] w-full text-[1rem] leading-[2rem] font-[400]"
        >
          <ThePageMinTitle>
            <p class="text-[1.25rem]">開発エンジニア</p>
          </ThePageMinTitle>
          <table class="mt-[30px]">
            <tbody>
              <tr
                v-for="(item, index) in TableData"
                :key="index"
              >
                <th
                  class="bg-[#DFE4F2] px-[30px] py-[12px] text-left font-[400]"
                >
                  <div class="h-full w-full flex">
                    {{ item.title }}
                  </div>
                </th>
                <td class="px-[30px] py-[12px]">
                  <div
                    v-for="(items, i) in item.content"
                    :key="i"
                  >
                    <p
                      v-if="items.title"
                      class="font-[700]"
                      :class="index === 0 ? 'mt-[0px]' : 'mt-[10px]'"
                    >
                      {{ items.title }}
                    </p>
                    <TheIconList
                      :class="index === 0 ? 'mt-[0px]' : 'mt-[10px]'"
                      >{{ items.list }}</TheIconList
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="text-deep_blue mt-[60px] w-full text-[1rem] leading-[2rem] font-[400]"
        >
          <ThePageMinTitle>
            <p class="text-[1.25rem]">インフラ基盤系エンジニア</p>
          </ThePageMinTitle>
          <table class="mt-[30px]">
            <tbody>
              <tr
                v-for="(item, index) in TableData2"
                :key="index"
              >
                <th
                  class="bg-[#DFE4F2] px-[30px] py-[12px] text-left font-[400]"
                >
                  <div class="h-full w-full flex">
                    {{ item.title }}
                  </div>
                </th>
                <td class="px-[30px] py-[12px]">
                  <div
                    v-for="(items, i) in item.content"
                    :key="i"
                  >
                    <p
                      v-if="items.title"
                      class="font-[700]"
                      :class="index === 0 ? 'mt-[0px]' : 'mt-[10px]'"
                    >
                      {{ items.title }}
                    </p>
                    <TheIconList
                      :class="index === 0 ? 'mt-[0px]' : 'mt-[10px]'"
                      >{{ items.list }}</TheIconList
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="text-deep_blue mt-[60px] w-full text-[1rem] leading-[2rem] font-[400]"
        >
          <ThePageMinTitle>
            <p class="text-[1.25rem]">コンサルティング営業</p>
          </ThePageMinTitle>

          <div class="mt-[30px] text-[1rem] leading-[2rem] font-[400]">
            <p>
              提案先は、野村総研やNECグループ各社をはじめとする大手及び中堅SIer（システムインテグレーター）が中心です。
            </p>
            <p class="mt-[2.25rem]">
              既存顧客の維持・拡大と新規開拓を担っていただきます。
            </p>
            <p class="mt-[2.25rem]">
              中国国内(北京・青島)開発子会社を活用したオフショアリングの提案を行っています。
            </p>
            <p class="mt-[2.25rem]">
              協力会社（ビジネスパートナー）を通じて、人材調達・人材管理も行っていただきます。
            </p>
          </div>

          <table class="mt-[30px]">
            <tbody>
              <tr
                v-for="(item, index) in TableData3"
                :key="index"
              >
                <th
                  class="bg-[#DFE4F2] px-[30px] py-[12px] text-left font-[400]"
                >
                  <div class="h-full w-full flex">
                    {{ item.title }}
                  </div>
                </th>
                <td class="px-[30px] py-[12px]">
                  <div
                    v-for="(items, i) in item.content"
                    :key="i"
                  >
                    <p
                      v-if="items.title"
                      class="font-[700]"
                      :class="index === 0 ? 'mt-[0px]' : 'mt-[10px]'"
                    >
                      {{ items.title }}
                    </p>
                    <TheIconList
                      :class="index === 0 ? 'mt-[0px]' : 'mt-[10px]'"
                      >{{ items.list }}</TheIconList
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { TableType } from '../types/index'

const TableData = ref<TableType[]>([
  {
    title: '【仕事内容】',
    content: [
      {
        list: '要件定義、基本設計、詳細設計、製造、単体・結合試験、いずれかの開発フェーズ'
      },
      { list: '顧客またはSIベンダー等への技術支援、導入後のサポート業務' }
    ]
  },
  {
    title: '【スキル】',
    content: [{ list: 'Java、C#等オープン系、Web系での開発経験のある方' }]
  },
  {
    title: '【望ましい要件】',
    content: [
      {
        title: 'SE経験',
        list: 'システム提案、設計経験を持つこと'
      },
      {
        list: 'SIベンダー等でシステム構築や設計の経験をお持ちの方'
      },
      { title: 'プログラマ経験', list: '詳細設計、製造経験を持つこと' },
      { list: 'SIベンダー等でシステム開発や製造の経験をお持ちの方' }
    ]
  },
  {
    title: '【歓迎スキル】',
    content: [
      { list: 'プロジェクトマネージャー／リーダー経験' },
      { list: '上流設計の経験者' }
    ]
  },
  {
    title: '【勤務地】',
    content: [{ list: '都内及び神奈川' }]
  }
])

const TableData2 = ref<TableType[]>([
  {
    title: '【仕事内容】',
    content: [
      {
        list: 'サーバーの設計・構築・運用業務'
      },
      { list: '顧客またはSIベンダー等への技術支援、導入後のサポート業務' }
    ]
  },
  {
    title: '【スキル】',
    content: [
      { list: 'Linux/Windowsサーバーインフラ構築及び運用業務経験を優遇します' }
    ]
  },

  {
    title: '【歓迎スキル】',
    content: [
      { list: 'VDI(仮想デスクトップ基盤)の運用保守経験' },
      { list: 'Oracle/SQL Serverの経験者' },
      { list: 'AWS/Azureのクラウド構築、運用経験' }
    ]
  },
  {
    title: '【勤務地】',
    content: [{ list: '都内及び横浜経験者' }]
  }
])

const TableData3 = ref<TableType[]>([
  {
    title: '【仕事内容】',
    content: [
      {
        list: '案件情報の収集'
      },
      { list: 'ITエンジニアの調達' },
      { list: '案件情報と人材のマッチング' },
      { list: '案件を受注するための施策を立案し、提案すること' },
      { list: '案件見積を作成し、お客さまに提出するなどの受注活動' }
    ]
  },

  {
    title: '【求める人材】',
    content: [
      { list: '営業の経験者' },
      { list: 'フットワークが軽く、柔軟性があり、エネルギッシュな方' },
      { list: 'IT業界またはSES・人材派遣ビジネスの経験者優遇します' }
    ]
  },
  {
    title: '【勤務地】',
    content: [{ list: '東京' }]
  }
])
</script>
<style scoped>
table {
  width: 100%;
}
th,
td {
  border: 1px solid #6785c1;
}
</style>
