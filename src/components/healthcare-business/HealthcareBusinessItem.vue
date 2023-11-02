<template>
  <div
    v-for="(item, index) in ItemsData"
    :id="item.id"
    :key="item.id"
    class="m_t_120 healthcare_business_item"
  >
    <div
      class="healthcare_business_item_text"
      :class="index % 2 != 0 ? 'p_l_30' : 'p_r_30'"
    >
      <div
        class="title_box animate__animated wow"
        :class="
          index % 2 != 0
            ? 'justify-content-start animate__fadeInRightBig'
            : 'justify-content-end animate__fadeInLeftBig'
        "
      >
        <div class="healthcare_business_item_title">{{ item.title }}</div>
      </div>
      <div class="healthcare_business_item_text_main">
        {{ item.content }}
      </div>
    </div>
    <div
      :class="index % 2 != 0 ? 'order_-1' : ''"
      class="Image_box"
    >
      <img
        :src="item.ImgSrc"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Image1 from '@/assets/images/healthcare-business/image_1.png'
import Image2 from '@/assets/images/healthcare-business/image_2.png'
import Image3 from '@/assets/images/healthcare-business/image_3.png'
import Image4 from '@/assets/images/healthcare-business/image_4.png'

interface ItemsType {
  id: string
  title: string
  content: string
  ImgSrc: string
}

const ItemsData = ref<ItemsType[]>([
  {
    id: 'Technology',
    title: 'リハビリテーション技術',
    content:
      '高度な日本のリハビリ技術を国内に紹介し、経験豊かな日本のリハビリ師を雇い治療させる。日本のリハビリテーションの技術を掌握したサービスチームを育成する。',
    ImgSrc: Image1
  },
  {
    id: 'Management',
    title: 'リハビリテーション管理',
    content:
      '日本の成功した管理モデルとビジネスプロセスを参考にリハビリ管理モジュールと介護管理モジュールを独自に開発、規模を拡大する際や管理業務を輸出する際に使用される。',
    ImgSrc: Image2
  },
  {
    id: 'Plans&Equipment',
    title: 'リハビリプランと器具',
    content:
      'さまざまな病気に対して、BOBATH等の技術に加えそれに対応するリハビリ機器とIT技術を組み合わせた仙手の一連の独自な解決案を形成、リハビリテーション治療製品を開発する。リハビリ設備を開発する能力としてFreegaitという製品を既に開発。トレーニング効果を80％向上させることができ、他の製品も次々に出品される予定。',
    ImgSrc: Image3
  },
  {
    id: 'Nursing',
    title: 'リハビリテーション看護',
    content:
      '看護は青島の高齢者に最先端のケアを提供するために、日本の国家の医療政策に含まれた自立支援介護の概念の導入',
    ImgSrc: Image4
  }
])
</script>

<style scoped>
.m_t_120 {
  margin-top: 120px;
}
.p_r_30 {
  padding-right: 30px;
}
.p_l_30 {
  padding-left: 30px;
}
.order_-1 {
  order: -1;
}
.justify-content-end {
  justify-content: end;
}
.justify-content-start {
  justify-content: start;
}

.healthcare_business_item {
  display: flex;
}

.healthcare_business_item_text {
  width: 50%;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title_box {
  width: 100%;
  display: flex;
}
.healthcare_business_item_title {
  width: 484px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6785c1;
  padding: 17px 0;
  color: #fff;
  font-feature-settings: 'clig' off, 'liga' off;
  /* 正文一级标题medium */
  font-family: Noto Sans JP;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 54px; /* 150% */
}
.healthcare_business_item_text_main {
  color: #0e1b47;
  font-feature-settings: 'clig' off, 'liga' off;
  /* 正文段落 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}
.Image_box {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1299px) and (min-width: 1024px) {
  .healthcare_business_item_title {
    width: 100%;
    font-size: 26px;
    padding: 5px 0;
  }
  .healthcare_business_item_text {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .healthcare_business_item_text_main {
    line-height: 24px;
  }
}

@media screen and (max-width: 1023px) {
  .order_-1 {
    order: 0;
  }
  .p_l_30 {
    padding: 0;
  }
  .p_r_30 {
    padding: 0;
  }
  .healthcare_business_item {
    flex-direction: column;
  }
  .healthcare_business_item_text {
    width: 100%;
  }
  .healthcare_business_item_title {
    width: 100%;
    font-size: 26px;
    padding: 5px 0;
  }
  .healthcare_business_item_text_main {
    margin-top: 30px;
  }
  .Image_box {
    width: 100%;
    margin-top: 30px;
  }
}
</style>
