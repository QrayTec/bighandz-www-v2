<template>
  <div
    class="font-NotoSansJP px-[15px] lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      v-for="(item, index) in ItemsData"
      :id="item.id"
      :key="index"
      class="text-deep_blue mt-[60px] w-full text-[1rem] leading-[2rem] font-[400] lg:mt-[120px]"
    >
      <ThePageMinTitle>{{ item.title }}</ThePageMinTitle>

      <div
        class="mt-[60px] w-full flex flex-col lg:flex-row lg:justify-between"
      >
        <div
          data-aos="fade-up"
          class="mt-[30px] w-full flex items-end lg:mt-0 lg:w-[calc(50%-30px)]"
          :class="
            index % 2 === 0 ? ' order-1 lg:order-0' : ' order-1 lg:order-1'
          "
        >
          <p>{{ item.content }}</p>
        </div>
        <div
          data-aos="fade-up"
          class="w-full flex justify-center overflow-hidden lg:w-[50%] lg:justify-start"
        >
          <img
            class="transition-all duration-800 ease-in-out hover:transform-scale-[1.2] hover:duration-800"
            :src="item.ImgSrc"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Image1 from '@/assets/images/healthcare-business/image_1.png'
import Image2 from '@/assets/images/healthcare-business/image_2.jpg'
import Image3 from '@/assets/images/healthcare-business/image_3.png'
import Image4 from '@/assets/images/healthcare-business/image_4.png'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

interface ItemsType {
  id: string
  title: string
  content: string
  ImgSrc: string
}

const ItemsData = ref<ItemsType[]>([
  {
    id: 'Technology',
    title: '介護施設の運営とコンサルティング事業',
    content:
      '2016年に、中国における高齢者向けの介護問題解決を目指し、国際医療福祉大学大学院の竹内孝仁先生が提唱する“自立支援介護”の理念と、日本の教育・医療・介護福祉分野の多くの施設とのパートナーシップを築き上げました。そして、2017年に山東省青島市にある上場企業の山東新華錦グループと共同で国家衛生局の認可を受け、リハビリ医療センターを開設しました。日本の自立支援介護とリハビリ技術を中国青島に「仙手」というブランド名で導入しました。これは、日本式の医療看護介護の連携専門チームによる現地の急性期回復期の患者に対するリハビリサービスを提供し、高い評価を受けました。さらに、青島市政府から2023年に地域向けのリハビリ型デイサービス施設の運営を委託され、訪問リハビリと介護の運営も開始しました。今後は仙手のノウハウを中国で普及します。運営指導、機器販売、スタッフのトレーニングなどパッケージして販売する。',
    ImgSrc: Image1
  },
  {
    id: 'Management',
    title: '介護看護人材育成と紹介事業',
    content:
      'グローバルな医療・介護人材の育成事業として、私たちは日本国内において、介護看護人材の確保を図るために外国人介護人材の受け入れに在留資格「介護」、特定技能1号、インターンシップ制度を活用する取り組みを進めつつ、日本人と外国人を差別せずに育成することを目指しています。そして、今後高齢化が進む世界各国の介護医療機関との架け橋となり、中国現地の職業専門学校から大学まで多くの教育機関と連携し、看護・介護・リハビリなど広範な専門人材の育成を行い、医療・介護領域における労働力不足の問題を解消するお手伝いをしてまいります。',
    ImgSrc: Image4
  },
  {
    id: 'Plans&Equipment',
    title: '介護、リハビリ機器の開発・販売事業',
    content:
      '中国や東南アジアなどの国々に対して、日本の介護およびリハビリ機器を輸出しています。同時に、日本の介護医療メーカーとの戦略的なパートナーシップを構築し、先進的な介護とリハビリ機器の開発を共同で推進しています。日本と中国の大学と連携し、AIやデータサイエンス、人間工学、IoT、ロボット工学などを活用して、日中の介護現場のニーズを分析し、商品開発に取り組んでいます。',
    ImgSrc: Image2
  },
  {
    id: 'Nursing',
    title: '医療ツーリズム事業',
    content:
      '日本の医療は世界的な注目を集めており、医療ツーリズムの成長には十分な可能性があります。外国人に対して、人間ドックを含む日本の優れた医療技術とサービスを提供することは自然な流れです。同時に、訪日外国人が日本の医療機関で高度な健康診断や治療を受けるための手続き、健康診断・治療の代金受領代行、医療通訳の手配など、治療受け入れまでの包括的なサポートや医療滞在ビザの保証などを行うため、医療通訳者や医療コーディネーターを自社で育成することで、より充実したサービスを提供し、顧客を引きつける力になると考えています。',
    ImgSrc: Image3
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6785c1;
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
  font-size: 20px;
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
