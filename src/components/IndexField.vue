<template>
  <div class="index_field">
    <div class="index_field_main">
      <div class="index_field_Title">業種領域</div>
      <div class="index_field_Nav">
        <div
          ref="NavLine"
          class="Nav_Line"
        ></div>
        <div
          v-for="(item, index) in NavData"
          :key="index"
          class="index_items items_uncheck"
          :class="[
            'index_items',
            {
              items_checked: selectedIndex === index,
              items_uncheck: selectedIndex !== index
            }
          ]"
          @click="selectNavItem(index)"
        >
          <div class="index_items_icon">
            <img
              :src="'src/assets/images/index_field/' + item.src + '.svg'"
              alt=""
            />
          </div>
          <div class="index_items_title">
            <p class="index_items_title_cn">{{ item.title_cn }}</p>
            <p class="index_items_title_en">{{ item.title_en }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface NavDataType {
  id: number
  src: string
  title_cn: string
  title_en: string
}
const selectedIndex = ref(0)
const NavLine = ref<HTMLElement>()
const NavData = ref<NavDataType[]>([
  { id: 0, src: 'icon_1', title_cn: '金融', title_en: 'FINANCE' },
  { id: 1, src: 'icon_2', title_cn: '政府', title_en: 'government' },
  { id: 2, src: 'icon_3', title_cn: '医疗', title_en: 'MEDICAL TREATMENT' },
  { id: 3, src: 'icon_4', title_cn: '制造业', title_en: 'MANUFACTURE' }
])

const selectNavItem = (index: number) => {
  NavLine.value!.style.left = `${250 * index}px`
  selectedIndex.value = index
}
</script>

<style scoped>
.index_field {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #111f4e;
}
.index_field_main {
  width: 1200px;
}
.index_field_Title {
  color: #fff;
  /* 正文一级标题medium */
  font-family: Noto Sans JP;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 54px; /* 150% */
}
.index_field_Nav {
  margin-top: 71px;
  width: 100%;
  height: 104px;
  display: flex;
  position: relative;
}
.index_items {
  width: 250px;
  height: 100%;
  padding: 0 23px;
  display: flex;
  align-items: center;
}
.index_items_title {
  color: #fff;
  margin-left: 14px;
}
.index_items_title_cn {
  font-family: Noto Sans JP;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
}
.index_items_title_en {
  /* 辅助文字小 */
  font-family: Noto Sans JP;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}
.items_uncheck {
  background-color: #0e1b47;
}
.items_checked {
  background-color: rgba(255, 255, 255, 0.0588);
}
.Nav_Line {
  width: 250px;
  height: 4px;
  background-color: #597be5;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.8s;
}
</style>
