<template>
  <div
    id="InexperiencedPerson"
    class="font-NotoSansJP text-deep_blue relative h-auto flex justify-center px-[15px] lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="absolute z-[-1] h-full w-[calc(100%-60px)] bg-white lg:w-[calc(100%-120px)]"
    ></div>
    <div class="w-full">
      <ThePageMinTitle2 data-aos="fade-up">未経験者</ThePageMinTitle2>
      <div
        class="px-[30px] lg:px-[90px]"
        data-aos="fade-up"
      >
        <div class="mt-[60px] text-[1rem] leading-[2rem] font-[400]">
          <p>
            エンジニアの希望を最優先に考える会社です。社員が皆明るく、働きやすい職場を目指しています。
          </p>
          <p class="mt-[2.25rem]">
            当社では、人材は大切な財産だと考えております。本人の希望に沿ったプロジェクトにアサインしたり、バックアップなどにより、長く働いていたいと思える職場環境を整える
            ため、常に努力を行っております。
          </p>
        </div>
        <div
          class="mt-[60px] w-full flex flex-col leading-[2rem] lg:flex-row lg:justify-between"
        >
          <div
            class="order-1 mt-[30px] w-full lg:order-0 lg:mt-0 lg:w-[calc(100%-400px)]"
            data-aos="fade-up"
          >
            <TheIconList
              v-for="(item, index) in ListData"
              :key="index"
              :class="index === 0 ? '' : 'mt-[30px]'"
            >
              {{ item.list }}
            </TheIconList>
          </div>
          <div
            class="relative order-0 mt-[30px] h-[410px] w-full flex justify-center lg:order-1 lg:mt-0 lg:w-[370px]"
          >
            <div
              data-aos="fade-up"
              class="relative w-[250px] flex justify-center bg-[#DFE4F2] lg:h-[410px] lg:w-[310px] md:h-[410px] md:w-[300px]"
            >
              <img
                class="absolute top-[50px] h-[160px] w-[160px]"
                src="@/assets/images/social-recruitment/logo_social.svg"
                alt=""
              />
            </div>
            <div
              data-aos="fade-up"
              class="absolute bottom-[30px] h-[144px] w-full flex flex-col items-center justify-center bg-[#6785C1] p-[20px] text-[1rem] leading-normal font-[700] text-[#fff] md:w-[380px] lg:text-[1.25rem]"
            >
              <p>意欲のある方であれば、</p>
              <p>是非ともご応募ください。</p>
              <p class="mt-[2rem]">お待ちしております。</p>
            </div>
          </div>
        </div>
        <div
          v-if="MAIN_CONTENT_WIDTH === 1200"
          data-aos="fade-up"
          class="text-deep_blue mt-[60px] w-full text-[1rem] leading-[2rem] font-[400]"
        >
          <table>
            <tbody>
              <tr
                v-for="(item, index) in TableData"
                :key="index"
              >
                <th
                  class="bg-[#DFE4F2] p-[10px] text-left font-[400] lg:px-[30px] lg:py-[12px]"
                >
                  <div class="h-full w-full flex">
                    {{ item.title }}
                  </div>
                </th>
                <td class="p-[10px] lg:px-[30px] lg:py-[12px]">
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
        <SocialTablePhone
          v-else
          :data="TableData"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { List, TableType } from '../types/index'
import SocialTablePhone from './SocialTablePhone.vue'

const ListData = ref<List[]>([
  {
    list: 'ビッグハンズは、日本と中国でシステムを同時開発ができる会社として設立しました。'
  },
  {
    list: '全てのユーザーが容易に、かつ安心して開発したシステムを利用できるようになることを目標として、成長を続けてきた会社です。'
  },
  {
    list: '即戦力はもちろん必要ですが、その候補となる人材も同時に募集いたします。選考にあたり、システム開発経験はあまり重視いたしません。'
  },
  {
    list: '技術力に自信のない方には、個人のレベルに合わせた教育研修制度をご用意しております。 ＯＪＴはもちろん、 新たな技術やツールなどの教育をマンツーマンに近い状態であなたの成長をサポートして行きますので、 無理なく確実にスキルアップすることが可能です。'
  }
])

const TableData = ref<TableType[]>([
  {
    title: '【業務内容】',
    content: [
      { list: '顧客のシステム構築に対する提案業務・設計・製造・テスト' },
      { list: '顧客またはSIベンダー等への技術支援、導入後のサポート業務' }
    ]
  },
  {
    title: '【要件】',
    content: [
      {
        list: 'UNIX、Windowsを理解し、システム設計および開発提案経験があること。スキルを有すること。'
      },
      { list: 'MS Office スキル' },
      { list: 'JAVA、C、C++、.Netを使ったアプリケーションの開発経験' },
      { list: '社会人3年以上の経験を有すること（相応の能力があれば可）' }
    ]
  },
  {
    title: '【望ましい要件】',
    content: [
      {
        title: 'SE経験',
        list: 'システム提案、設計経験を持つこと'
      },
      {
        list: 'SIベンダー等でシステム構築や設計の経験をお持ちの方は歓迎します'
      },
      { title: 'プログラマ経験', list: '詳細設計、製造経験を持つこと' },
      { list: 'SIベンダー等でシステム開発や製造の経験をお持ちの方は歓迎します' }
    ]
  }
])
</script>
<style scoped>
th,
td {
  border: 1px solid #6785c1;
}
</style>
