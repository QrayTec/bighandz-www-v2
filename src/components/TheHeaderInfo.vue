<template>
  <div
    class="z-8 h-[240px] w-full flex justify-center bg-[#071027] bg-opacity-90 backdrop-blur-[2px]"
  >
    <div
      class="h-full text-[#ffffff]"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <div
        v-for="(item, index) in MenuDataTitle"
        v-show="index === MenuIndex"
        :key="item.title"
        class="mt-[40px] h-[40px] w-[146px] flex items-center"
      >
        <img
          :src="item.src"
          alt=""
        />
        <div
          class="font-NotoSansJP ml-[10px] text-[24px] leading-[30px] font-[500] text-[#fff]"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="mt-[10px] flex flex-wrap px-[50px]">
        <div
          v-for="item in menudata"
          :key="item.id"
          class="mt-[20px] h-[32px] w-[33.33%]"
          :style="'  text-align: ' + item.align"
        >
          <!-- Bind ClickTitle method to router-link click event -->
          <router-link
            :to="item.href"
            class="opacity-60 transition-all duration-800 hover:opacity-100"
            @click="clickTitle"
            >{{ item.title }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, toRefs } from 'vue'
import Information from '@/assets/images/menu/information.svg'
import Outline from '@/assets/images/menu/outline.svg'
import Recruit from '@/assets/images/menu/recruit.svg'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

interface Menu_Items {
  id: number
  title: string
  href: string
  align: string
}
interface MenuTitle {
  id: number
  title: string
  src: string
}

const props = defineProps<{
  menudata: Menu_Items[]
  menuindex: number
  clickTitle: (index: number) => void // Add clickTitle prop definition
}>()

const { menudata, menuindex, clickTitle } = toRefs(props)

const MenuDataTitle = ref<MenuTitle[]>([
  { id: 1, title: '企業情報', src: Information },
  { id: 2, title: '事業概要', src: Outline },
  { id: 3, title: '採用情報', src: Recruit }
])
const MenuIndex = menuindex
</script>
