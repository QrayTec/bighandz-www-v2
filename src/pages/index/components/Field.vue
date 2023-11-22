<template>
  <div class="index_field">
    <div class="index_field_main">
      <div class="index_field_main_Nav">
        <div class="index_field_Title">業種領域</div>
        <div class="index_field_Nav">
          <div
            ref="NavLine"
            class="Nav_Box"
          >
            <div class="Nav_Line"></div>
            <div class="items_checked"></div>
          </div>
          <div
            v-for="(item, index) in NavData"
            :key="index"
            class="index_items items_uncheck"
            @click="selectNavItem(index)"
          >
            <div class="index_items_icon">
              <img
                :src="item.src"
                alt=""
              />
            </div>
            <div class="index_items_title">
              <p class="index_items_title_cn">{{ item.title_cn }}</p>
              <p class="index_items_title_en">{{ item.title_en }}</p>
            </div>
          </div>
          <div class="index_field_flip">
            <div
              class="flip_btn arrow_icon_hover"
              @click="shields(false)"
            >
              <img
                class="arrow_icon_l"
                src="/src/assets/images/index_field/arrow.svg"
                alt=""
              />
              <div class="shields"></div>
            </div>
            <div
              class="flip_btn arrow_icon_hover"
              @click="shields(true)"
            >
              <img
                src="/src/assets/images/index_field/arrow.svg"
                alt=""
              />
              <div class="shields"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="(item, index) in ContentData"
      v-show="selectedIndex === index"
      :key="index"
      class="animate__animated index_field_content animate__fadeIn"
    >
      <div class="index_field_images">
        <img
          class="field_bg"
          :src="item.BgSrc"
          alt=""
          srcset=""
        />
      </div>
      <div class="index_field_content_main">
        <div class="index_field_content_title">
          <img
            :src="item.src"
            alt=""
          />
          <div class="content_title">{{ item.title_cn }}</div>
        </div>
        <div class="index_field_content_text">
          <p>{{ item.title_1 }}</p>
          <br /><br />
          <p>
            {{ item.title_2 }}
          </p>
          <p>
            {{ item.title_3 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Icon1 from '@/assets/images/index_field/icon_1.svg'
import Icon2 from '@/assets/images/index_field/icon_2.svg'
import Icon3 from '@/assets/images/index_field/icon_3.svg'
import Icon4 from '@/assets/images/index_field/icon_4.svg'
import bg1 from '@//assets/images/index_field/bg1.png'
import bg2 from '@//assets/images/index_field/bg2.png'
import bg3 from '@//assets/images/index_field/bg3.png'
import bg4 from '@//assets/images/index_field/bg4.png'

interface NavDataType {
  id: number
  src: string
  title_cn: string
  title_en: string
}

interface COntentDataType {
  id: number
  BgSrc?: undefined | string
  src: string
  title_cn: string
  title_1: string
  title_2: string
  title_3: string
}

const selectedIndex = ref(0)
const NavLine = ref<HTMLElement>()
const NavData = ref<NavDataType[]>([
  { id: 0, src: Icon1, title_cn: '金融', title_en: 'FINANCE' },
  { id: 1, src: Icon2, title_cn: '政府', title_en: 'government' },
  { id: 2, src: Icon3, title_cn: '医療', title_en: 'MEDICAL TREATMENT' },
  { id: 3, src: Icon4, title_cn: '物流', title_en: 'MANUFACTURE' }
])

const ContentData = ref<COntentDataType[]>([
  {
    id: 0,
    src: Icon1,
    BgSrc: bg1,
    title_cn: '金融',
    title_1: '主な業務経験は製造、流通関係です。',
    title_2:
      '製造業、物流サービス、通信のソフトウェア開発を得意分野としております。',
    title_3:
      'システムの最適な開発を行なえる様努力すると伴に、高品質、高性能ソフトウェアプロダクトを提供出来る事を目指しています。'
  },
  {
    id: 1,
    src: Icon2,
    BgSrc: bg2,
    title_cn: '政府',
    title_1: '主な業務経験は製造、流通関係です。',
    title_2:
      '製造業、物流サービス、通信のソフトウェア開発を得意分野としております。',
    title_3:
      'システムの最適な開発を行なえる様努力すると伴に、高品質、高性能ソフトウェアプロダクトを提供出来る事を目指しています。'
  },
  {
    id: 2,
    src: Icon3,
    BgSrc: bg3,
    title_cn: '医療',
    title_1: '主な業務経験は製造、流通関係です。',
    title_2:
      '製造業、物流サービス、通信のソフトウェア開発を得意分野としております。',
    title_3:
      'システムの最適な開発を行なえる様努力すると伴に、高品質、高性能ソフトウェアプロダクトを提供出来る事を目指しています。'
  },
  {
    id: 3,
    src: Icon4,
    BgSrc: bg4,
    title_cn: '物流',
    title_1: '主な業務経験は製造、流通関係です。',
    title_2:
      '製造業、物流サービス、通信のソフトウェア開発を得意分野としております。',
    title_3:
      'システムの最適な開発を行なえる様努力すると伴に、高品質、高性能ソフトウェアプロダクトを提供出来る事を目指しています。'
  }
])

const selectNavItem = (index: number) => {
  NavLine.value!.style.left = `${250 * index}px`
  selectedIndex.value = index
}

const shields = (flag: boolean) => {
  if (flag) {
    selectedIndex.value = (selectedIndex.value + 1) % 4
  } else {
    selectedIndex.value = (selectedIndex.value - 1 + 4) % 4
  }
  selectNavItem(selectedIndex.value)
}
</script>

<style scoped>
.index_field {
  width: 100%;
  background-color: #111f4e;
}
.index_field_main {
  width: 100%;
  display: flex;
  justify-content: center;
}
.index_field_main_Nav {
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
  cursor: pointer;
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
  width: 250px;
  height: 104px;
  background-color: rgba(255, 255, 255, 0.0588);
}
.Nav_Box {
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.8s;
}
.Nav_Line {
  width: 250px;
  height: 4px;
  background-color: #597be5;
}
.index_field_flip {
  margin-left: 72px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flip_btn {
  width: 64px;
  height: 64px;
  background-color: #0e1b47;
  border: 1px solid #597be5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.arrow_icon_l {
  transform: rotate(180deg);
}
.shields {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* 遮罩颜色和透明度 */
  opacity: 0; /* 初始时不可见 */
  transition: opacity 0.3s ease;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
}
.flip_btn:hover {
  background-color: #0e1b47;
  border: 1px solid #31437c;
}
.flip_btn:hover .shields {
  opacity: 1;
}
.index_field_content {
  min-height: 580px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  animation-duration: 2.5s;
}
.index_field_images {
  width: 100%;
  position: relative;
  z-index: 1;
}

.index_field_content_main {
  width: 1200px;
  z-index: 2;
  position: absolute;
}
.index_field_content_title {
  margin-top: 90px;
  padding: 0px 22px;
  display: flex;
  align-items: center;
}
.content_title {
  color: #fff;
  margin-left: 14px;
  font-family: Noto Sans JP;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 54px; /* 150% */
}
.index_field_content_text {
  margin-top: 45px;
  padding: 0px 76px;
  color: #fff;
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}
.field_bg {
  width: 100%;
  height: 100%;
}
</style>
