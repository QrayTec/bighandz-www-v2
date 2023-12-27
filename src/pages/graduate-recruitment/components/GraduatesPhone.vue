<template>
  <div class="font-NotoSansJP w-full">
    <div
      v-for="(item, index) in GraduatesPhoneData"
      :key="index"
      :class="item.ClassName"
      class="relative w-full bg-[#183F7A] p-[20px]"
    >
      <img
        class="absolute left-0 top-[-5px]"
        :src="item.ImageLeft"
      />
      <img
        class="absolute right-0 top-[-5px]"
        :src="item.ImageRight"
      />
      <div>
        {{ item.Content }}
        <div v-if="item.Content === '株式会社ビッグハンズ'">
          <br />
          人事部<br />
          新卒採用担当者
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import GraduatesTop1 from '@/assets/images/graduate-recruitment/Graduates_top_3_1.svg'
import GraduatesTop2 from '@/assets/images/graduate-recruitment/Graduates_top_3_2.svg'
import GraduatesTop3 from '@/assets/images/graduate-recruitment/Graduates_top_4_1.svg'
import GraduatesTop4 from '@/assets/images/graduate-recruitment/Graduates_top_4_2.svg'
import GraduatesTop5 from '@/assets/images/graduate-recruitment/Graduates_top_5_1.svg'
import GraduatesTop6 from '@/assets/images/graduate-recruitment/Graduates_top_5_2.svg'

interface GraduatesPhone {
  ClassName: string
  ImageLeft?: string
  ImageRight?: string
  Content: string
}
const GraduatesPhoneData = ref<GraduatesPhone[]>([
  {
    ClassName: 'bg-[#4F6ECC] font-[1rem] font-[700]',
    ImageLeft: GraduatesTop1,
    ImageRight: GraduatesTop2,
    Content: '皆さんにとってシステム開発とはどんなイメージでしょうか。'
  },
  {
    ClassName: 'bg-[#ED8E3E] text-[.875rem] font-[400]',
    Content:
      '私たちの会社がスタートしたのは約25年前ですが、 PCやスマホの普及とIT技術の進歩とともにシステム開発の分野は急速に進化し、企業だけでなく、官公庁、自治体、学校、病院、各家庭に浸透しています。'
  },
  {
    ClassName: 'bg-[#289DC7] text-[1rem] font-[400] ',
    Content:
      'クラウドやネットワークは水道やガスと同様止めることのできない社会インフラとしての不可欠な存在となり、 皆さんもご家庭で利用して、様々なコンテンツやサービスを楽しんでいることと思います。'
  },
  {
    ClassName: 'bg-[#F8416D] text-[1rem] font-[700] mt-[30px]',
    ImageLeft: GraduatesTop3,
    ImageRight: GraduatesTop4,
    Content:
      'ビッグハンズは、日本と中国でシステムを同時開発ができる会社として設立しました。'
  },
  {
    ClassName: 'bg-[#384879] text-[.875rem] font-[400]',
    Content:
      '全てのユーザーが容易に、かつ安心して開発したシステムを利用できるようになることを目標として、成長を続けてきた会社です。'
  },
  {
    ClassName: 'bg-[#945EFC] text-[.875rem] font-[400]',
    Content:
      'そんな私たちビッグハンズの考えに共感し、一緒に仕事をしてみたい、スピードの速い時代の中で知識やスキルを吸収し、 変化や競争を楽しんでみたいと思われた方は、私達といっしょに仕事をしてみませんか。'
  },
  {
    ClassName: 'bg-[#67C1BC] text-[1rem] font-[700] mt-[30px]',
    ImageLeft: GraduatesTop5,
    ImageRight: GraduatesTop6,
    Content:
      'もっと私達のビッグハンズを知ってください。そして、是非ビッグハンズを訪問して会社の雰囲気に触れてみてください。気になること、質問等がありましたらメール、電話でもかまいません。お待ちしています。'
  },
  {
    ClassName: 'bg-[#4A47DB] text-[1rem] font-[700]',
    Content: '皆さんにお会いできる日を心待ちに楽しみにしています。'
  },
  {
    ClassName: 'bg-[#597BE5] text-[1rem] font-[700]',
    Content: '株式会社ビッグハンズ'
  }
])
</script>
<style lang=""></style>
