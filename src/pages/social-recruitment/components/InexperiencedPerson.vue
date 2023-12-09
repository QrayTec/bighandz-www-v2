<template>
  <div
    class="font-NotoSansJP text-deep_blue relative h-auto flex justify-center"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="absolute z-[-1] h-full w-[calc(100%-120px)] bg-white"></div>
    <div class="w-full">
      <ThePageMinTitle2>未経験者</ThePageMinTitle2>
      <div class="px-[90px]">
        <div class="mt-[60px] text-[1rem] leading-[2rem] font-[400]">
          <p>
            エンジニアの希望を最優先に考える会社です。社員が皆明るく、働きやすい職場を目指しています。
          </p>
          <p class="mt-[2.25rem]">
            当社では、人材は大切な財産だと考えております。本人の希望に沿ったプロジェクトにアサインしたり、バックアップなどにより、長く働いていたいと思える職場環境を整える
            ため、常に努力を行っております。
          </p>
        </div>
        <div class="mt-[60px] w-full flex justify-between">
          <div class="w-[calc(100%-400px)]">
            <TheIconList
              v-for="(item, index) in ListData"
              :key="index"
              :class="index === 0 ? '' : 'mt-[30px]'"
            >
              {{ item.list }}
            </TheIconList>
          </div>
          <div class="relative h-[410px] w-[370px] flex justify-center">
            <div
              class="relative h-[410px] w-[310px] flex justify-center bg-[#DFE4F2]"
            >
              <img
                class="absolute top-[50px] h-[160px] w-[160px]"
                src="@/assets/images/social-recruitment/logo_social.svg"
                alt=""
              />
            </div>
            <div
              class="absolute bottom-[30px] h-[144px] w-full flex flex-col items-center justify-center bg-[#6785C1] p-[20px] text-[1.25rem] leading-normal font-[700] text-[#fff]"
            >
              <p>意欲のある方であれば、</p>
              <p>是非ともご応募ください。</p>
              <p class="mt-[2rem]">お待ちしております。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { List } from '../types/index'

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
</script>
<style lang=""></style>
