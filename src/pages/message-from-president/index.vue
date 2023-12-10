<template>
  <div class="w-full">
    <div class="message_from_president_main">
      <sub-page-title :data="SubPageTitleData" />
    </div>
    <div class="message_content">
      <div class="message_content_main">
        <div class="message_content_text">
          <div class="message_content_title">社長メッセージ</div>
          <div class="message_content_text_main">
            <p
              v-for="(item, index) in ListData"
              :key="index"
            >
              {{ item.list }} <br /><br />
            </p>
          </div>
          <div class="message_content_text_main m_top_30">敬具</div>

          <div class="m_top_30 pic_Representative">
            <div class="message_content_text_main m_top_30">代表取締役</div>
          </div>
          <div class="pic_president_sign">
            <img
              class="h-[80px] w-[200px]"
              src="/src/assets/images/MessageFromPresident/pic_president_sign.png"
              alt="pic_president"
            />
          </div>
        </div>
        <!-- <div class="message_content_images">
          <div class="pic_president h-[600px] bg-[#2266ff]">
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
        </div> -->
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
  TitleCn_2: '挨拶',
  TitleEn: 'MESSAGE FROM THE PRESIDENT',
  ImgSrc: MessagePresident
})

interface ListType {
  list: string
}
const ListData = ref<ListType[]>([
  {
    list: '私たちの会社は、この度、設立25周年を迎えることができました。これもひとえに、お客様、パートナー企業様、そして私たちの社員の日々の努力の賜物です。心より感謝申し上げます。'
  },
  {
    list: '当社は設立当初より、グローバル化の流れに乗り、多様性を重視したオフショア開発により成長を遂げてきました。そして、多様な文化や価値観を取り入れることで、ダイバシティを重視し、より広い視野を持つ企業へと成長してきました。'
  },
  {
    list: '現在、当社は生成AIやクラウドなど最新のIT技術に力を入れ、金融・物流・ヘルスケアなどの分野でソリューションベンダーに変貌しようとしています。私たちの使命は、価値創造を通じて、社会に貢献することです。'
  },
  {
    list: 'また、当社はESG（環境、社会、ガバナンス）社会への取り組みも強化しています。持続可能な未来社会の実現に向け、環境への配慮、透明な経営、社会的責任の果たし方を常に考え、行動しています。'
  },
  {
    list: '未来に向けて、私たちは技術とイノベーションの力を信じ、常に先進性を追求し、未来創造し続けます。私たちの目指すは、ただ技術を進化させることではなく、人々の生活を豊かにし、社会全体に価値をもたらすことです。'
  },
  {
    list: '25年の歴史は、新たな始まりに過ぎません。未来社会への扉を共に開くために、引き続き皆様のご支援とご協力をお願い申し上げます。'
  }
])
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
  width: 100%;
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
  font-size: 20px;
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
