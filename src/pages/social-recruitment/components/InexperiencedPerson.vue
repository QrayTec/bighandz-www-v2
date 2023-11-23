<template>
  <div
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="font-NotoSansJP flex text-[24px] font-[500]">未経験者</div>
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
    <!-- <div
      v-for="(item, index) in PositionsData"
      :key="index"
    >
      <div class="mt-[60px] min-h-[360px] w-full flex justify-between">
        <div
          :class="index % 2 != 0 ? 'order-1' : ''"
          class="w-[calc(50%-15px)] flex flex-col justify-between py-[30px]"
        >
          <div
            :class="index % 2 != 0 ? 'justify-start' : 'justify-end'"
            class="w-full flex"
          >
            <div
              :id="item.id"
              data-aos="fade-in"
              class="h-[78px] w-[360px] flex items-center justify-center bg-[#6785C1] text-[36px] font-[500] text-white"
            >
              {{ item.title }}
            </div>
          </div>
          <ul class="mt-[20px] w-full">
            <li
              v-for="(items, i) in item.content"
              :key="i"
              :class="i == 0 ? '' : 'mt-[30px]'"
              class="w-full flex px-[30px]"
            >
              <div class="mt-[5px] h-full min-w-[16px]">
                <img
                  class="h-16px w-[16px]"
                  src="@/assets/images/company_profile/rhombic.svg"
                  alt=""
                />
              </div>
              <p class="ml-[10px]">{{ items.list }}</p>
            </li>
          </ul>
        </div>
        <div class="w-[calc(50%-15px)]">
          <div class="h-full w-full">
            <img
              class="h-full w-full"
              :src="item.Image"
              alt=""
            />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
// import { PositionsType } from '../types/index'
// import Job1 from '@/assets/images/social-recruitment/job_1.jpg'

// const PositionsData = ref<PositionsType[]>([
//   {
//     id: 'OpenPositions',
//     title: '未経験者',
//     Image: Job1,
//     content: [
//       {
//         list: 'エンジニアの希望を最優先に考える会社です。社員が皆明るく、働きやすい職場を目指しています。'
//       },
//       {
//         list: '当社では、人材は大切な財産だと考えております。本人の希望に沿ったプロジェクトにアサインしたり、バックアップなどにより、長く働いていたいと思える職場環境を整える ため、常に努力を行っております。'
//       },
//       {
//         list: 'ビッグハンズは、日本と中国でシステムを同時開発ができる会社として設立しました。'
//       },
//       {
//         list: '全てのユーザーが容易に、かつ安心して開発したシステムを利用できるようになることを目標として、成長を続けてきた会社です。'
//       },
//       {
//         list: '即戦力はもちろん必要ですが、その候補となる人材も同時に募集いたします。選考にあたり、システム開発経験はあまり重視いたしません。'
//       },
//       {
//         list: '技術力に自信のない方には、個人のレベルに合わせた教育研修制度をご用意しております。 ＯＪＴはもちろん、 新たな技術やツールなどの教育をマンツーマンに近い状態であなたの成長をサポートして行きますので、 無理なく確実にスキルアップすることが可能です。 意欲のある方であれば、是非ともご応募ください。お待ちしております。'
//       }
//     ]
//   }
// ])
</script>
<style lang=""></style>
