<template>
  <div class="Nav_menu_info">
    <div class="Menu_Content">
      <div
        v-for="(item, index) in MenuDataTitle"
        v-show="index === MenuIndex"
        :key="item.title"
        class="Menu_title_Main"
      >
        <img
          :src="item.src"
          alt=""
        />
        <div class="Menu_title">{{ item.title }}</div>
      </div>
      <div class="Menu_Items">
        <div
          v-for="item in menudata"
          :key="item.id"
          class="Menu_Items_info"
          :style="'  text-align: ' + item.align"
        >
          <router-link :to="item.href">{{ item.title }}</router-link>
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
  menudata: Menu_Items
  menuindex: number
}>()

const { menudata, menuindex } = toRefs(props)

const MenuDataTitle = ref<MenuTitle[]>([
  { id: 1, title: '企業情報', src: Information },
  { id: 2, title: '事業概要', src: Outline },
  { id: 3, title: '採用情報', src: Recruit }
])
const MenuIndex = menuindex
</script>

<style>
.Nav_menu_info {
  width: 100%;
  height: 240px;
  background-color: rgba(7, 16, 39, 0.9);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  z-index: 8;
}
.Menu_Content {
  width: 1200px;
  height: 100%;
  color: #fff;
}
.Menu_title_Main {
  width: 146px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 40px;
}
.Menu_title {
  color: #fff;
  margin-left: 10px;
  /* 正文二级标题medium */
  font-family: Noto Sans JP;

  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
}
.Menu_Items {
  padding: 0px 50px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.Menu_Items_info {
  width: 33.3%;
  height: 32px;
  margin-top: 20px;
}
</style>
