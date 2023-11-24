<template>
  <div
    id="InexperiencedPerson"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      未経験者
    </div>
    <div class="font-NotoSansJP flex text-[24px] font-[500]"></div>
    <div class="font-NotoSansJP mt-[30px] indent-8">
      エンジニアの希望を最優先に考える会社です。社員が皆明るく、働きやすい職場を目指しています。
    </div>
    <div class="font-NotoSansJP mt-[30px] indent-8">
      当社では、人材は大切な財産だと考えております。本人の希望に沿ったプロジェクトにアサインしたり、バックアップなどにより、長く働いていたいと思える職場環境を整える
      ため、常に努力を行っております。
    </div>
    <div class="font-NotoSansJP mt-[30px] indent-8">
      ビッグハンズは、日本と中国でシステムを同時開発ができる会社として設立しました。
    </div>
    <div class="font-NotoSansJP mt-[30px] indent-8">
      全てのユーザーが容易に、かつ安心して開発したシステムを利用できるようになることを目標として、成長を続けてきた会社です。す。
    </div>
    <div class="font-NotoSansJP mt-[30px] indent-8">
      即戦力はもちろん必要ですが、その候補となる人材も同時に募集いたします。選考にあたり、システム開発経験はあまり重視いたしません。
    </div>
    <div class="font-NotoSansJP mt-[30px] indent-8">
      技術力に自信のない方には、個人のレベルに合わせた教育研修制度をご用意しております。
      ＯＪＴはもちろん、
      新たな技術やツールなどの教育をマンツーマンに近い状態であなたの成長をサポートして行きますので、
      無理なく確実にスキルアップすることが可能です。
      意欲のある方であれば、是非ともご応募ください。お待ちしております。
    </div>

    <div class="mt-[120px]">
      <div class="mt-[60px] min-h-[360px] w-full flex justify-between">
        <div class="w-full flex justify-between py-[30px]">
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
                  src="@/assets/images/company_profile/rhombic.svg"
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
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { SalaryType } from '../types/index'

const SalaryData = ref<SalaryType[]>([
  {
    content: [
      { list_1: '業務内容', flag: false },
      {
        list_1: ' 顧客のシステム構築に対する提案業務・設計・製造・テスト',
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
      { list_1: '要件', flag: false },
      {
        list_1:
          'UNIX、Windowsを理解し、システム設計および開発提案経験があること。スキルを有すること。',
        flag: true
      },
      { list_1: 'MS Office スキル', flag: true },
      {
        list_1: 'JAVA、C、C++、.Netを使ったアプリケーションの開発経験',
        flag: true
      },
      {
        list_1: ' 社会人3年以上の経験を有すること（相応の能力があれば可）',
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
        list_1:
          'SIベンダー等でシステム構築や設計の経験をお持ちの方は歓迎します',
        flag: true
      },
      { list_1: '[ﾌﾟﾛｸﾞﾗﾏ経験]', flag: false },
      { list_1: '詳細設計、製造経験を持つこと', flag: true },
      {
        list_1:
          'SIベンダー等でシステム開発や製造の経験をお持ちの方は歓迎します',
        flag: true
      }
    ]
  }
])
</script>
<style lang=""></style>
