<template>
  <div class="Practices_guidelines vision">
    <div class="Realization_of_Corporate_Philosophy">
      <div class="Realization_title">価値観</div>
      <div class="Realization_min_text m_top_30">
        私たちの価値観は、イノベーション、顧客志向、責任、チームワーク、成長です。<br />
        私たちは常にイノベーションを追求し、顧客を中心に行動し、責任を果たし、団結し、共通の目標を達成するために成長していきます。
      </div>
      <div class="m_top_60 values">
        <div
          v-for="item in ValuesData"
          :key="item.id"
          class="values_Items"
        >
          <div class="m_top_30 values_Items_Image">
            <img
              :src="item.ImgSrc"
              alt=""
            />
          </div>
          <div class="values_Items_Text">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PicIcon1 from '@/assets/images/corporate-philosophy-management-policy/pic_icon_1.svg'
import PicIcon2 from '@/assets/images/corporate-philosophy-management-policy/pic_icon_2.svg'
import PicIcon3 from '@/assets/images/corporate-philosophy-management-policy/pic_icon_3.svg'
import PicIcon4 from '@/assets/images/corporate-philosophy-management-policy/pic_icon_4.svg'
import PicIcon5 from '@/assets/images/corporate-philosophy-management-policy/pic_icon_5.svg'

interface ValuesType {
  id: number
  ImgSrc: string
  title: string
}
const ValuesData = ref<ValuesType[]>([
  { id: 1, ImgSrc: PicIcon1, title: 'イノベーション' },
  { id: 2, ImgSrc: PicIcon2, title: '顧客志向' },
  { id: 3, ImgSrc: PicIcon3, title: '責任' },
  { id: 4, ImgSrc: PicIcon4, title: 'チームワーク' },
  { id: 5, ImgSrc: PicIcon5, title: '成長です' }
])
</script>

<style scoped>
.values {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.values_Items {
  width: 216px;
  height: 216px;
}
.values_Items_Image {
  width: 120px;
  height: 120px;
  border: 1px solid #dfe4f2;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto 0;
}
.values_Items_Text {
  margin: 10px auto 0;
  color: #0e1b47;
  text-align: center;
  /* 正文二级标题medium */
  font-family: Noto Sans JP;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
}
</style>
