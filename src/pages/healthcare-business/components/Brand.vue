<template>
  <div
    id="Brand"
    class="Brand m_t_120"
  >
    <div
      class="Brand_title"
      data-aos="fade-up"
    >
      ブランドの紹介
    </div>
    <div
      class="Brand_Content m_t_30"
      data-aos="fade-up"
    >
      仙手复健（康复医療中心）は、日本と韓国の高度なリハビリ技術とコンセプトを統合し、伝統的な中国医学を組み合わせて、青島市を始め、国際標準化された日本式のリハビリセンターを構築し、現代的なリハビリ医療サービスを提供する。
    </div>
    <div
      class="Brand_Image m_t_60"
      data-aos="fade-up"
      data-aos-anchor-target="self"
    >
      <img
        class="Image_bg"
        src="/src/assets/images/healthcare-business/image_5.png"
      />
      <img
        class="Brand_logo"
        src="/src/assets/images/healthcare-business/logo_1.png"
        alt=""
      />
    </div>
    <div class="m_t_60 Brand_list">
      <ul>
        <li
          v-for="item in BrandData"
          :key="item.id"
          data-aos="fade-up"
          class="Brand_Content Brand_list_text"
          :class="{ m_t_20: item.id !== 1 }"
        >
          <img
            v-if="item.id !== 1"
            src="/src/assets/images/listicon/icon_1.svg"
            alt=""
          />
          <p :class="{ m_l_10: item.id !== 1 }">
            {{ item.list_text }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface BrandListType {
  id: number
  list_text: string
}

const BrandData = ref<BrandListType[]>([
  {
    id: 1,
    list_text:
      '仙手复健银川西路旗舰店には、神経・疼痛リハビリテーションセンターおよび看護センターがある。'
  },
  {
    id: 2,
    list_text:
      '外来医療/リハビリテーション治療/リハビリテーション技術トレーニング/高齢者介護'
  },
  {
    id: 3,
    list_text: 'リハビリ機器補助具および関連製品の販売/高齢者住宅の改修サービス'
  }
])
</script>

<style scoped>
ul {
  list-style-type: none;
}

.Brand {
  width: 100%;
}
.Brand_title {
  color: #071027;
  font-feature-settings: 'clig' off, 'liga' off;
  /* 正文一级标题加粗 */
  font-family: Noto Sans JP;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.Brand_Content {
  color: #0e1b47;
  font-feature-settings: 'clig' off, 'liga' off;
  /* 正文段落 */
  font-family: Noto Sans JP;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}
.Brand_Image {
  width: 100%;
  position: relative;
}
.Image_bg {
  width: 100%;
  z-index: 1;
}
.Brand_logo {
  z-index: 2;
  position: absolute;
  top: 50%; /* 垂直居中 */
  left: 50%; /* 水平居中 */
  transform: translate(
    -50%,
    -50%
  ); /* 使用transform来调整位置，将图像的中心对齐到容器的中心 */
}
.Brand_list {
  width: 100%;
  padding: 0px 30px;
  margin-bottom: 30px;
}
.Brand_list_text {
  display: flex;
}
</style>
