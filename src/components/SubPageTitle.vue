<template>
  <div
    class="sub_page_main_box bg-center-35"
    :style="TitleBg"
  >
    <div class="sub_page_main">
      <div class="Bread_Crumbs">
        <the-breadcrumbs />
      </div>
      <div class="sub_page_Content">
        <div class="sub_page_Content_title">
          <div class="title_cn">
            <span
              :class="{ title_bold: SubPageTitleData.bold == 1 }"
              class="font-bold"
              >{{ SubPageTitleData.TitleCn_1 }}</span
            >
            <span
              :class="{ title_bold: SubPageTitleData.bold != 2 }"
              class="font-bold"
              >{{ SubPageTitleData.TitleCn_2 }}</span
            >
          </div>
          <div class="title_en">{{ SubPageTitleData.TitleEn }}</div>
          <div class="title_line"></div>
        </div>
        <div
          v-if="SubPageTitleData.type === 1"
          class="sub_page_Content_image"
        >
          <div class="sub_page_Content_image_bg">
            <img
              class="h-full w-full"
              :src="SubPageTitleData.ImgSrc"
              alt=""
            />
          </div>
          <!-- <div class="Image_line"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SubPageTitleType } from '@/data/pages_interface'
import SubBg from '@/assets/images/pic_innovation_bg.png'

const props = defineProps<{ data: SubPageTitleType }>()

const SubPageTitleData = ref<SubPageTitleType>(props.data)

const TitleBg = {
  background: ''
}

if (SubPageTitleData.value.type === 2) {
  TitleBg.background = `linear-gradient(
    90deg,
    #0e1b47 0%,
    rgba(14, 27, 71, 0.6) 58.33%,
    rgba(14, 27, 71, 0.6) 100%
  ), url('${SubPageTitleData.value.ImgSrc}') 50% / cover no-repeat`
} else if (SubPageTitleData.value.type === 1) {
  TitleBg.background = `url('${SubBg}') 50% / cover no-repeat,linear-gradient( 
    90deg,
    #0e1b47 0%,
    rgba(14, 27, 71, 1) 100%)`
}
</script>

<style scoped>
.sub_page_main_box {
  background-color: #0e1b47;
  width: 100%;
  display: flex;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.sub_page_main {
  width: 1200px;
  height: auto;
  position: relative;
}
.Bread_Crumbs {
  padding-top: 140px;
}
.sub_page_Content {
  display: flex;
  height: 390px;
  align-items: center;
  position: relative;
}
.title_cn {
  color: #fff;
  font-family: Noto Sans JP;
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: 80px;
}
.title_en {
  color: #fff;
  font-family: Noto Sans JP;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 10px;
  text-transform: uppercase;
  opacity: 0.4;
}
.title_line {
  width: 60px;
  height: 8px;
  background-color: #6785c1;
  margin-top: 40px;
}
.sub_page_Content_image {
  position: absolute;
  top: 0;
  right: -10%;
  height: 390px;
}
.sub_page_Content_image_bg {
  width: 390px;
  height: 390px;
  background: #000;
}
.Image_line {
  width: 379px;
  height: 37px;
  background-color: #6785c1;
  position: absolute;
  bottom: 14px;
  right: -33.8%;
}
.title_bold {
  font-weight: 700;
}
@media screen and (min-width: 1200px) {
  .sub_page_main {
    height: 600px;
  }
}
@media screen and (max-width: 1750px) {
  .sub_page_Content_image {
    right: 0%;
  }
  .Image_line {
    right: -10%;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1300px) {
  .sub_page_Content_image {
    right: 5%;
  }
  .Image_line {
    right: -10%;
  }
}
@media screen and (min-width: 788px) and (max-width: 1300px) {
  .sub_page_main {
    height: auto;
  }
  .sub_page_Content {
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .Bread_Crumbs {
    width: 80%;
    margin: 0 auto;
  }
  .sub_page_Content_title {
    width: 80%;
  }
  .sub_page_Content_image {
    display: flex;
    justify-content: center;
    width: 80%;
    height: auto;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .Image_line {
    position: absolute;
    right: 0%;
  }
}
/* 在屏幕小于 786px 时应用的样式 */
@media screen and (max-width: 786px) {
  .sub_page_main {
    height: auto;
  }
  .sub_page_Content {
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .Bread_Crumbs {
    width: 80%;
    margin: 0 auto;
  }
  .sub_page_Content_title {
    width: 80%;
  }
  .sub_page_Content_image {
    display: flex;
    justify-content: center;
    width: 80%;
    height: auto;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .sub_page_Content_image_bg {
    width: auto;
    aspect-ratio: 1 / 1; /* 设置宽高比为1:1，高度将等于宽度 */
    height: auto;
  }
  .Image_line {
    width: 75%;
    position: absolute;
    right: -5%;
  }
  .title_cn {
    font-size: 36px;
  }
  .title_en {
    font-size: 12px;
    letter-spacing: 2px;
  }
}
</style>
