<template>
  <div class="information_main">
    <div
      v-for="item in InformationData"
      :key="item.id"
      class="event_information_item m_t_120"
    >
      <div class="information_item_text">
        <div class="information_item_title">{{ item.title }}</div>
        <div class="information_item_text_content m_t_30">
          <p>{{ item.content_list_1 }}</p>
          <br /><br />
          <p>
            {{ item.content_list_2 }}
          </p>
          <br /><br />
          <p>{{ item.content_list_3 }}</p>
        </div>
      </div>
      <div class="m_t_60">
        <div class="information_item_main_Image">
          <div class="Image_item">1</div>
          <div class="Image_item">2</div>
        </div>
        <div class="information_item_main_Image m_t_30">
          <div class="Image_item">1</div>
          <div class="Image_item">2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface InformationType {
  id: number
  title: string
  content_list_1: string
  content_list_2: string
  content_list_3: string
  ImgSrc_1: string
  ImgSrc_2: string
  ImgSrc_3: string
  ImgSrc_4: string
}

const InformationData = ref<InformationType[]>([
  {
    id: 1,
    title: '社員花見大会',
    content_list_1: '以下是大会的一系列描述。',
    content_list_2: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx',
    content_list_3: '以下是大会的视频和照片展示。',
    ImgSrc_1: '1',
    ImgSrc_2: '1',
    ImgSrc_3: '1',
    ImgSrc_4: '1'
  },
  {
    id: 2,
    title: 'マラソン大会',
    content_list_1: '以下是大会的一系列描述。',
    content_list_2: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx',
    content_list_3: '以下是大会的视频和照片展示。',
    ImgSrc_1: '1',
    ImgSrc_2: '1',
    ImgSrc_3: '1',
    ImgSrc_4: '1'
  },
  {
    id: 3,
    title: '忘年会',
    content_list_1: '以下是大会的一系列描述。',
    content_list_2: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx',
    content_list_3: '以下是大会的视频和照片展示。',
    ImgSrc_1: '1',
    ImgSrc_2: '1',
    ImgSrc_3: '1',
    ImgSrc_4: '1'
  }
])
</script>

<style scoped>
.m_t_120 {
  margin-top: 120px;
}
.m_t_60 {
  margin-top: 60px;
}
.m_t_30 {
  margin-top: 30px;
}
.information_main {
  width: 100%;
}
.event_information_item {
  width: 100%;
}
.information_item_title {
  color: #071027;
  font-feature-settings: 'clig' off, 'liga' off;
  /* 正文一级标题加粗 */
  font-family: Noto Sans JP;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.information_item_text_content {
  width: 100%;
  color: #0e1b47;
  font-feature-settings: 'clig' off, 'liga' off;

  /* 正文段落 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}
.information_item_main_Image {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 205px;
  align-items: stretch;
}
.Image_item {
  width: 380px;
  height: 190px;
  background-color: #dfe4f2;
}
/* 大于等于1024px宽度的屏幕 */
@media (min-width: 1024px) and (max-width: 1299px) {
  .information_item_main_Image {
    padding: 0px;
  }
}

/* 大于等于768px宽度，小于1024px宽度的屏幕 */
@media (min-width: 768px) and (max-width: 1023px) {
  .information_item_main_Image {
    padding: 0px;
  }
  .Image_item {
    width: 100%;
    margin-top: 20px;
    height: auto;
    aspect-ratio: 2 / 1; /* 设置宽高比为 2:1 */
  }
}

/* 小于768px宽度的屏幕 */
@media (max-width: 767px) {
  .information_item_main_Image {
    padding: 0px;
  }
  .Image_item {
    width: 100%;
    margin-top: 20px;
    height: auto;
    aspect-ratio: 2 / 1; /* 设置宽高比为 2:1 */
  }
}
</style>
