<template>
  <div
    id="ExperiencedPerson"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      経験者
    </div>
    <div class="font-NotoSansJP flex text-[24px] font-[500]"></div>
    <div class="font-NotoSansJP mt-[30px] text-[20px]">
      開発エンジニア（システムエンジニア／プログラマ）、インフラ基盤系エンジニア及び営業を募集しています。ご自身が持っているスキル・経験を活かしたい方、キャリアアップを目指している方、収入増を目指している方は、是非ともご応募ください。お待ちしています。
      私たちといっしょに夢を実現しませんか。
    </div>

    <div class="mt-[120px]">
      <p class="text-[22px] font-bold">開発エンジニア</p>
      <div class="mt-[0px] min-h-[360px] w-full flex justify-between">
        <div class="w-full flex justify-between py-[10px] text-[20px]">
          <ul
            v-for="(item, index) in SalaryData"
            :key="index"
            class="mt-[20px] w-[calc(50%-15px)]"
          >
            <li
              v-for="(items, i) in item.content"
              :key="i"
              class="mt-[30px] w-full flex px-[15px]"
            >
              <div
                v-if="items.flag"
                class="mt-[5px] h-full min-w-[16px]"
              >
                <img
                  class="h-16px w-[16px]"
                  src="@/assets/images/listicon/icon_1.svg"
                  alt=""
                />
              </div>
              <div
                class="w-full flex justify-between"
                :class="items.flag ? 'ml-[10px]' : 'font-bold'"
              >
                <p>{{ items.list_1 }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-[120px]">
      <p class="text-[22px] font-bold">インフラ基盤系エンジニア</p>
      <div class="mt-[0px] min-h-[360px] w-full flex justify-between">
        <div class="w-full flex justify-between py-[10px] text-[20px]">
          <ul
            v-for="(item, index) in SalaryData2"
            :key="index"
            class="mt-[20px] w-[calc(50%-15px)]"
          >
            <li
              v-for="(items, i) in item.content"
              :key="i"
              class="mt-[30px] w-full flex px-[15px]"
            >
              <div
                v-if="items.flag"
                class="mt-[5px] h-full min-w-[16px]"
              >
                <img
                  class="h-16px w-[16px]"
                  src="@/assets/images/listicon/icon_1.svg"
                  alt=""
                />
              </div>
              <div
                class="w-full flex justify-between"
                :class="items.flag ? 'ml-[10px]' : 'font-bold'"
              >
                <p>{{ items.list_1 }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-[120px] text-[20px]">
      <p class="text-[22px] font-bold">コンサルティング営業</p>
      <p>
        提案先は、野村総研やNECグループ各社をはじめとする大手及び中堅SIer（システムインテグレーター）が中心です。
      </p>
      <p>既存顧客の維持・拡大と新規開拓を担っていただきます。</p>
      <p>
        協力会社（ビジネスパートナー）を通じて、人材調達・人材管理も行っていただきます。
      </p>
      <div class="mt-[0px] min-h-[360px] w-full flex justify-between">
        <div class="w-full flex justify-between py-[10px] text-[20px]">
          <ul
            v-for="(item, index) in SalaryData3"
            :key="index"
            class="mt-[20px] w-[calc(50%-15px)]"
          >
            <li
              v-for="(items, i) in item.content"
              :key="i"
              class="mt-[30px] w-full flex px-[15px]"
            >
              <div
                v-if="items.flag"
                class="mt-[5px] h-full min-w-[16px]"
              >
                <img
                  class="h-16px w-[16px]"
                  src="@/assets/images/listicon/icon_1.svg"
                  alt=""
                />
              </div>
              <div
                class="w-full flex justify-between"
                :class="items.flag ? 'ml-[10px]' : 'font-bold'"
              >
                <p>{{ items.list_1 }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mt-[60px] text-[20px]">
      <table class="w-full">
        <tr class="mt-[20px] h-[150px] bg-[#f0f0f0] p-[10px]">
          <th class="w-[20%]">スキル</th>
          <td class="w-[80%]">
            プロジェクトマネージャー／リーダー経験<br />サブシステムのリーダー経験がある方<br />C#、.NET、VB.NET、ASP、Java、Accessでの開発経験のある方<br />アプリケーション開発経験がある方
          </td>
        </tr>
        <tr class="mt-[20px] h-[150px] p-[10px]">
          <th class="w-[20%]">対象</th>
          <td class="w-[80%]">全員<br />経験・スキル・年齢を考慮します。</td>
        </tr>
        <tr class="mt-[20px] h-[150px] bg-[#f0f0f0] p-[10px]">
          <th class="w-[20%]">契約形態</th>
          <td class="w-[80%]">正社員<br />契約社員<br />個人事業主</td>
        </tr>
        <tr class="mt-[20px] h-[150px] p-[10px]">
          <th class="w-[20%]">提出書類</th>
          <td class="w-[80%]">
            <a
              class="text-[#7461e3]"
              href="https://www.bighandz.co.jp/hr/download.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              履歴書</a
            >
          </td>
        </tr>
        <tr class="mt-[20px] h-[150px] bg-[#f0f0f0] p-[10px]">
          <th class="w-[20%]">勤務地</th>
          <td>
            東京、千葉、神奈川、山梨、名古屋、大阪、青島、北京<br />勤務地は相談の上、決定します。
          </td>
        </tr>
        <tr class="mt-[20px] h-[150px] p-[10px]">
          <th class="w-[20%]">採用</th>
          <td>面接</td>
        </tr>
      </table>
    </div>
    <div class="mt-[120px] text-[20px]">
      <p class="font-bold">
        上記の履歴書をクリックし、履歴書の書式ダウンロードして記入してください。（解凍ソフトが必要）
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { SalaryType2 } from '../types/index'

const SalaryData = ref<SalaryType2[]>([
  {
    title: '開発エンジニア',
    content: [
      { list_1: '仕事内容', flag: false },
      {
        list_1:
          ' 要件定義、基本設計、詳細設計、製造、単体・結合試験、いずれかの開発フェーズ',
        flag: true
      },
      {
        list_1: '顧客またはSIベンダー等への技術支援、導入後のサポート業務',
        flag: true
      }
    ]
  },
  {
    content: [
      { list_1: 'スキル', flag: false },
      {
        list_1: 'Java、C#等オープン系、Web系での開発経験のある方',
        flag: true
      }
    ]
  },
  {
    content: [
      { list_1: '望ましい要件', flag: false },
      { list_1: '[SE経験]', flag: false },
      { list_1: 'システム提案、設計経験を持つこと', flag: true },
      {
        list_1: 'SIベンダー等でシステム構築や設計の経験をお持ちの方',
        flag: true
      },
      { list_1: '[プログラマ経験]', flag: false },
      { list_1: 'プログラマ経験', flag: true },
      {
        list_1: 'SIベンダー等でシステム開発や製造の経験をお持ちの方',
        flag: true
      },
      { list_1: '[歓迎スキル]', flag: true },
      { list_1: 'プロジェクトマネージャー／リーダー経験', flag: true },
      {
        list_1: '上流設計の経験者',
        flag: true
      },
      { list_1: '[勤務地]', flag: false },
      { list_1: '都内及び神奈川', flag: true }
    ]
  }
])

const SalaryData2 = ref<SalaryType2[]>([
  {
    title: 'インフラ基盤系エンジニア',
    content: [
      { list_1: '仕事内容', flag: false },
      {
        list_1: ' サーバーの設計・構築・運用業務',
        flag: true
      },
      {
        list_1: '顧客またはSIベンダー等への技術支援、導入後のサポート業務',
        flag: true
      }
    ]
  },
  {
    content: [
      { list_1: 'スキル', flag: false },
      {
        list_1:
          'Linux/Windowsサーバーインフラ構築及び運用業務経験を優遇します。',
        flag: true
      }
    ]
  },
  {
    content: [
      { list_1: '望ましい要件', flag: false },
      { list_1: '[歓迎スキル]', flag: false },
      { list_1: 'VDI(仮想デスクトップ基盤)の運用保守経験', flag: true },
      {
        list_1: 'Oracle/SQL Serverの経験者',
        flag: true
      },
      {
        list_1: 'AWS/Azureのクラウド構築、運用経験',
        flag: true
      },
      { list_1: '[勤務地]', flag: false },
      { list_1: '都内及び横浜経験者', flag: true }
    ]
  }
])

const SalaryData3 = ref<SalaryType2[]>([
  {
    title: 'インフラ基盤系エンジニア',
    content: [
      { list_1: '業務内容', flag: false },
      {
        list_1: ' 案件情報の収集',
        flag: true
      },
      {
        list_1: '案件情報と人材のマッチング',
        flag: true
      },
      {
        list_1: '案件見積を作成し、お客さまに提出するなどの受注活動',
        flag: true
      }
    ]
  },
  {
    content: [
      { list_1: '求める人材', flag: false },
      {
        list_1: '営業の経験者',
        flag: true
      },
      {
        list_1: 'フットワークが軽く、柔軟性があり、エネルギッシュな方',
        flag: true
      },
      {
        list_1: 'IT業界またはSES・人材派遣ビジネスの経験者優遇します。',
        flag: true
      }
    ]
  },
  {
    content: [
      { list_1: '望ましい要件', flag: false },
      { list_1: '[スキル]', flag: false },
      { list_1: 'プロジェクトマネージャー／リーダー経験', flag: true },
      {
        list_1: 'サブシステムのリーダー経験がある方',
        flag: true
      },
      {
        list_1: 'C#、.NET、VB.NET、ASP、Java、Accessでの開発経験のある方',
        flag: true
      },
      {
        list_1: 'アプリケーション開発経験がある方',
        flag: true
      },
      { list_1: '[勤務地]', flag: false },
      { list_1: '東京', flag: true }
    ]
  }
])
</script>
<style lang=""></style>
