<template>
  <div
    id="LogisticsChallenges"
    data-aos="fade-in"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="max-w-[480px] flex justify-center bg-[#6785C1] px-[42px] py-[17px] text-[36px] font-[500] text-white"
    >
      物流業界が直面する課題
    </div>
    <div
      v-for="(item, index) in ChallengesData"
      :key="index"
      class="mt-[60px] min-h-[360px] w-full flex justify-between"
    >
      <div
        :class="index % 2 != 0 ? 'order-1' : ''"
        class="w-[calc(50%-15px)] flex flex-col justify-center"
      >
        <ul class="w-full">
          <li
            v-for="(items, i) in item.content"
            :key="i"
            :class="i == 0 ? '' : 'mt-[30px]'"
            class="w-full flex px-[30px]"
          >
            <div class="mt-[5px] h-full min-w-[16px]">
              <img
                class="h-16px w-[16px]"
                src="@/assets/images/company_profile/rhombic.svg"
                alt=""
              />
            </div>
            <p class="ml-[10px]">{{ items.list }}</p>
          </li>
        </ul>
      </div>
      <div class="w-[calc(50%-15px)]">
        <div class="h-full w-full">
          <img
            class="h-full w-full"
            :src="item.Image"
            alt=""
          />
        </div>
      </div>
    </div>
    <div
      class="font-NotoSansJP mt-[30px] text-[20px] font-[700] text-[#071027]"
    >
      これらの課題を解決するには、物流DXの導入が重要となっています。
    </div>
    <div
      class="font-NotoSansJP mt-[30px] text-[16px] leading-[32px] font-[400] text-[#071027]"
    >
      物流業界では、企業が基幹システムのDX導入・投資を優先している。<br />
      物流システムにおける新技術の導入やデジタル化は遅々として進まず、物流サービスや物流レ<br />
      ベルの向上が進んでいる<br />
      業務効率、配送効率、透明性が欠けていると言われました。
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { ChallengesType } from '../types/index'
import Change1 from '@/assets/images/logistics-business/change_1.jpg'

const ChallengesData = ref<ChallengesType[]>([
  {
    Image: Change1,
    content: [
      {
        list: '物流業界は、トラック運転手や倉庫作業員の人手不足、高齢化、非正規雇用の増加などの課題を抱えている。その結果、残業代の給与上限などの規制が生まれ、人件費の増加につながっています。'
      },
      {
        list: '物流アクセスには地域差があり、物流サービスが不足している地域や企業もあ​​ります。'
      },
      {
        list: 'また、物流業界は二酸化炭素の主要な排出源であり、環境への影響も懸念されています。持続可能な物流システムを確立する必要がある'
      }
    ]
  }
])
</script>
<style lang=""></style>
