<template>
  <div
    id="PersonnelSystem"
    class="font-NotoSansJP relative h-auto flex justify-center px-[15px] text-white lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="bg-deep_blue absolute z-[-1] h-full w-[calc(100%-120px)] w-[calc(100%-60px)] lg:w-[calc(100%-120px)]"
    ></div>
    <div class="w-full">
      <ThePageMinTitle2 data-aos="fade-up">人事制度</ThePageMinTitle2>
      <div
        v-for="(item, index) in ListData"
        :key="index"
        data-aos="fade-up"
        class="px-[30px] lg:px-[90px]"
        :class="index == 0 ? 'mt-[60px]' : 'mt-[30px]'"
      >
        <TheIconList :type="2">
          <p class="text-white">{{ item.list }}</p>
        </TheIconList>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

interface ListType {
  list: string
}

const ListData = ref<ListType[]>([
  { list: '年齢や性別、国籍を問わず人材の多様性を重視しています。' },
  { list: 'チャレンジ精神を持ち、自ら学ぶ姿勢を重視します。' },
  {
    list: 'プログラミングやネットワークなどに関する各種技術研修を用意しています。'
  },
  {
    list: 'チームワークを重視し、管理職研修やコミュニケーション研修を実施しています。'
  },
  { list: '外国籍の方には、日本語を学べる環境があります。' }
])
</script>
<style lang=""></style>
