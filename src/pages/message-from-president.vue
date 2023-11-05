<template>
  <div class="page">
    <TheHeader
      class="Header"
      :checked="1"
    />
    <div class="message_from_president_main">
      <sub-page-title :data="SubPageTitleData" />
    </div>
    <div class="message_content">
      <div class="message_content_main">
        <div class="message_content_text">
          <div class="message_content_title">中国と日本の橋渡し役に!</div>
          <div class="message_content_text_main">
            当社は『中国と日本の橋渡し役に』をスローガンに日中の情報システム開発に奉仕するため、１９９８年に設立されました。<br /><br />
            以来、アプリケーション、ソフトパッケージの提供、各種受託業務等の情報関連事業を進めてまいりました。<br /><br />
            ２００２年９月から北京ビッグハンズでは日本企業からのシステム開発の業務を積極的に行い
            R&D
            の役割を果たすオフショア開発のビジネスモデルを確立し、高品質な成果物を提供してまいりました。今後日本と中国をビジネスの舞台として、更なるサービス
            を提供するトータル・システム・プロバイダーとして誠心誠意で行っていく所存で御座います。<br /><br />

            私達が企業を経営する上で考えていることは、中国的な経営の良い部分と、日本的な経営の良い部分をきっちりと融合させ、新しい経営スタイルを作り出していくことです。<br /><br />
            日本での経営経験と中国経営のノウハウや文化・風土を熟知している強みを活用して日本企業が中国に進出する際のコンサルトと
            IT
            面からサポートしていく事業と技術の高い中国人を活用してのオフショア開発事業をさらに拡大しトータル・システム・プロバイダーとして邁進してまいりま
            す。これらを進めるベースとして単なるコストマネジメントに偏ることなく、『ビジネスは共に
            Win － Win でなければならない』と日頃から考えております。<br /><br />
            １９９８年に設立以来、お客様にも恵まれ、会社も安定期から更なる発展成長へと社員一丸となって進めております、お客様が満足できるサービスを提供し、かつ個
            人を尊重し人材の育成と技術を軸として、お客様に満足される関係を構築し独自の市場を創造出来る
            SI 企業を目指してまいります。<br /><br />
            今後は、ソフトウェアという枠にとらわれず日本企業が中国に進出する際のコンサルと
            IT
            面からサポートしていくトータル・ソリューション事業と教育事業を行ってまいります。<br /><br />
            これからもお客様に適した的確なサービスの提案を構築して参りますので皆様のご指導ご鞭撻を賜りますようお願い申し上げます。<br /><br />
          </div>
          <div class="message_content_text_main m_top_60">
            当社は、技術革新の波に乗って、常に新しい挑戦を続けてまいりました。このような環境の中で、私たちは常にお客様のニーズに応えるために、最新の技術やサービスを提供することに努めています。<br /><br />
            IT分野は常に進化し続けており、常に最新の情報にアクセスすることが必要です。私たちは、高度な専門知識を持ったエキスパートを採用し、お客様のビジネスの成長を支援しています。<br /><br />
            私たちは、お客様がビジネスで成功するために、最も高度なセキュリティ対策を講じ、データの保護と管理にも最大限の努力を払っています。お客様には、私たちが提供するサービスに対して完全な信頼をお寄せいただけるように、全力で取り組んでいきます。<br /><br />
            私たちは、お客様の成功を支援するために、常に最善を尽くします。今後も、IT分野の最新技術を取り入れながら、お客様のビジネスに貢献してまいります。引き続きご支援を賜りますよう、お願い申し上げます。<br /><br />
          </div>
          <div class="message_content_text_main m_top_30">敬具</div>
        </div>
        <div class="message_content_images">
          <div class="pic_president">
            <img
              src="/src/assets/images/MessageFromPresident/pic_president.png"
              alt="pic_president"
            />
          </div>
          <div class="m_top_30 pic_Representative">
            <img
              src="/src/assets/images/MessageFromPresident/pic_Representative.png"
              alt="pic_president"
            />
          </div>
          <div class="pic_president_sign">
            <img
              src="/src/assets/images/MessageFromPresident/pic_president_sign.png"
              alt="pic_president"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SubPageTitleType } from '@/data/pages_interface'

import MessagePresident from '@/assets/images/sub_page_title/MESSAGE_FROM_THE_PRESIDENT_banner.png'

const SubPageTitleData = ref<SubPageTitleType>({
  TitleCn_1: '社長',
  TitleCn_2: ' · 挨拶',
  TitleEn: 'MESSAGE FROM THE PRESIDENT',
  ImgSrc: MessagePresident,
  bold: 1
})
</script>

<style scoped>
.page {
  width: 100%;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.Header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
}
.message_from_president_main {
  width: 100%;
  height: auto;
  background: #0e1b47;
  display: flex;
  justify-content: center;
}
.message_content {
  width: 100%;
  display: flex;
  justify-content: center;
}
.message_content_main {
  width: 1200px;
  height: auto;
  display: flex;
  margin-top: 180px;
  margin-bottom: 180px;
}
.message_content_text {
  width: 680px;
  color: #0e1b47;
}
.message_content_title {
  font-family: Noto Sans JP;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.message_content_text_main {
  margin-top: 30px;
  /* 正文段落 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}
.m_top_60 {
  margin-top: 60px;
}
.m_top_30 {
  margin-top: 30px;
}
.message_content_images {
  margin-left: 40px;
  padding-top: 90px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /* 垂直排列子元素 */
  align-items: flex-end; /* 子元素在交叉轴上居右 */
}
.pic_president {
  width: 480px;
}
.pic_president_sign {
  margin-top: 10px;
}
@media screen and (max-width: 1300px) {
  .message_content_main {
    flex-wrap: wrap;
  }
  .message_content_text {
    width: 80%;
    margin: 0 auto; /* 水平居中 */
  }
  .message_content_images {
    width: 80%;
    margin: 0 auto; /* 水平居中 */
    align-items: center;
  }
}

/* 在屏幕小于 786px 时应用的样式 */
@media screen and (max-width: 786px) {
  .message_content_text {
    width: 80%;
    margin: 0 auto; /* 水平居中 */
  }
  .message_content_images {
    width: 80%;
    margin: 0 auto; /* 水平居中 */
    align-items: center;
  }
  .pic_president {
    width: auto;
  }
}
</style>
