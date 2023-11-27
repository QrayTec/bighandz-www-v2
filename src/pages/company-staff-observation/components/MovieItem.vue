<template>
  <div class="Movie_item">
    <div
      v-for="item in MovieData"
      :key="item.id"
      :class="{ m_t_60: item.id >= 3 }"
      class="Movie_item_box"
    >
      <div class="Video_Main">
        <div class="Video_Box">
          <img
            class="Video_Box_bg"
            :src="item.BgImgSrc"
            alt=""
          />
          <div class="Video_Box_play">
            <img
              class="play_img"
              src="/src/assets/images/company-staff-observation/play.svg"
              alt=""
            />
            <p class="m_t_30 Video_Box_text">Play Movie</p>
          </div>
        </div>
        <div class="m_t_20">
          <div class="Talk">{{ item.talk }}</div>
          <div class="Movie_Title">{{ item.title }}</div>
          <div class="m_t_20 Movie_content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Video from '@/assets/images/company-staff-observation/video.png'

interface MovieType {
  id: number
  BgImgSrc: string
  talk: string
  title: string
  content: string
}

const MovieData = ref<MovieType[]>([
  {
    id: 1,
    BgImgSrc: Video,
    talk: 'Cross Talk',
    title: '「女性エンジニア対談」',
    content:
      '文系出身・新卒入社の女性エンジニアと、同じく文系出身でベースに転職された女性エンジニアの2人に、女性ならではの視点で、ベースの働きやすさについて聞いてみました。'
  },
  {
    id: 2,
    BgImgSrc: Video,
    talk: 'Cross Talk',
    title: '「女性エンジニア対談」',
    content:
      '文系出身・新卒入社の女性エンジニアと、同じく文系出身でベースに転職された女性エンジニアの2人に、女性ならではの視点で、ベースの働きやすさについて聞いてみました。'
  },
  {
    id: 3,
    BgImgSrc: Video,
    talk: 'Cross Talk',
    title: '「女性エンジニア対談」',
    content:
      '文系出身・新卒入社の女性エンジニアと、同じく文系出身でベースに転職された女性エンジニアの2人に、女性ならではの視点で、ベースの働きやすさについて聞いてみました。'
  },
  {
    id: 4,
    BgImgSrc: Video,
    talk: 'Cross Talk',
    title: '「女性エンジニア対談」',
    content:
      '文系出身・新卒入社の女性エンジニアと、同じく文系出身でベースに転職された女性エンジニアの2人に、女性ならではの視点で、ベースの働きやすさについて聞いてみました。'
  },
  {
    id: 5,
    BgImgSrc: Video,
    talk: 'Cross Talk',
    title: '「女性エンジニア対談」',
    content:
      '文系出身・新卒入社の女性エンジニアと、同じく文系出身でベースに転職された女性エンジニアの2人に、女性ならではの視点で、ベースの働きやすさについて聞いてみました。'
  },
  {
    id: 6,
    BgImgSrc: Video,
    talk: 'Cross Talk',
    title: '「女性エンジニア対談」',
    content:
      '文系出身・新卒入社の女性エンジニアと、同じく文系出身でベースに転職された女性エンジニアの2人に、女性ならではの視点で、ベースの働きやすさについて聞いてみました。'
  }
])
</script>

<style scoped>
.Movie_item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.Movie_item_box {
  width: 585px;
}
.Video_Main {
  position: relative;
}
.Video_Box {
  width: 100%;
  height: 100%;
  position: relative;
}
.Video_Box_bg {
  z-index: 1;
}
.Video_Box_play {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
}
.play_img {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.Video_Box_text {
  color: #fff;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Noto Sans JP;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 12px;
  text-transform: uppercase;
  position: absolute;
  top: calc(50% + 50px); /* 将 top 属性修改为这行 */
  left: 50%;
  transform: translate(-50%, 0%);
}
.Talk {
  color: #6785c1;
  font-feature-settings: 'clig' off, 'liga' off;

  /* 正文加粗 */
  font-family: Noto Sans JP;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.Movie_Title {
  color: #0e1b47;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Noto Sans JP;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.Movie_content {
  color: #0e1b47;
  font-feature-settings: 'clig' off, 'liga' off;

  /* 正文段落 */
  font-family: Noto Sans JP;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}
/* 大于等于1024px宽度的屏幕 */
@media (min-width: 1024px) and (max-width: 1299px) {
  .Movie_item {
    justify-content: center;
  }
  .Movie_item_box {
    margin-top: 60px;
  }
  .Movie_item_box:first-child {
    margin-top: 0;
  }
}

/* 大于等于768px宽度，小于1024px宽度的屏幕 */
@media (min-width: 768px) and (max-width: 1023px) {
  .Movie_item {
    justify-content: center;
  }
  .Movie_item_box {
    margin-top: 60px;
  }
  .Movie_item_box:first-child {
    margin-top: 0;
  }
}

/* 小于768px宽度的屏幕 */
@media (max-width: 767px) {
  .Movie_item {
    justify-content: center;
  }
  .Movie_item_box {
    margin-top: 60px;
    width: 100%;
  }
  .Movie_item_box:first-child {
    margin-top: 0;
  }
  .play_img {
    width: 75px;
    height: 75px;
  }
  .Video_Box_text {
    margin-top: 15px;
    letter-spacing: 6px;
  }
}
</style>
