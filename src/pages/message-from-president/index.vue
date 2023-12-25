<template>
  <div class="w-full">
    <div class="bg-deep_blue w-full flex justify-center">
      <sub-page-title-bg :data="SubPageTitleData" />
    </div>
    <div class="font-NotoSansJP w-full flex justify-center">
      <div
        class="my-[60px] px-[15px] lg:my-[120px] lg:px-0"
        :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
      >
        <div class="text-cobalt_blue text-[2.25rem] leading-normal font-[700]">
          社長メッセージ
        </div>
        <div
          class="text-cobalt_blue mt-[30px] text-[1rem] leading-[2rem] font-[400]"
        >
          <p
            v-for="(item, index) in ListData"
            :key="index"
          >
            {{ item.list }} <br /><br />
          </p>
        </div>
        <div
          class="text-cobalt_blue mt-[30px] text-[1rem] leading-[2rem] font-[400]"
        >
          敬具
        </div>

        <div
          class="text-cobalt_blue mt-[30px] text-right text-[1rem] leading-[2rem] font-[400]"
        >
          代表取締役
        </div>
        <div class="mt-[10px] flex justify-end">
          <img
            class="h-[80px] w-[200px]"
            src="/src/assets/images/MessageFromPresident/pic_president_sign.png"
            alt="pic_president"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { SubPageTitleType } from '@/data/pages_interface'

import MessagePresident from '@/assets/images/sub_page_title/MESSAGE_FROM_THE_PRESIDENT_banner_1.jpg'

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

<style scoped></style>
