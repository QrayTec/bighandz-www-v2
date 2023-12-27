<template>
  <div
    class="font-NotoSansJP mt-[30px] flex flex-wrap px-[15px] lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <photo-provider>
      <photo-consumer
        v-for="(item, index) in GartherCardPhoneData"
        :key="index"
        :intro="item.title"
        :src="item.Image"
        style="display: flex"
      >
        <img
          :src="item.Image"
          class="view-box h-[160px]"
        />
      </photo-consumer>
    </photo-provider>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import GartherCard1 from '@/assets/images/logistics-business/GartherCard_1.png'
import GartherCard2 from '@/assets/images/logistics-business/GartherCard_2.png'
import GartherCard3 from '@/assets/images/logistics-business/GartherCard_3.png'
import GartherCard4 from '@/assets/images/logistics-business/GartherCard_4.png'
import GartherCard5 from '@/assets/images/logistics-business/GartherCard_5.png'
import GartherCard6 from '@/assets/images/logistics-business/GartherCard_6.png'
import GartherCard7 from '@/assets/images/logistics-business/GartherCard_7.png'
import GartherCard8 from '@/assets/images/logistics-business/GartherCard_8.png'
import GartherCard9 from '@/assets/images/logistics-business/GartherCard_9.png'
import GartherCard10 from '@/assets/images/logistics-business/GartherCard_10.png'
import GartherCard11 from '@/assets/images/logistics-business/GartherCard_11.png'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { AiDeliverType } from '../types/index'

const GartherCardPhoneData = ref<AiDeliverType[]>([
  { title: '無人フォ—クリフト', Image: GartherCard1 },
  { title: 'パレット倉庫', Image: GartherCard2 },
  { title: '自動倉庫', Image: GartherCard3 },
  { title: 'AGV搬送ロボット', Image: GartherCard4 },
  { title: 'AI', Image: GartherCard5 },
  { title: '移動ラックピッキング', Image: GartherCard6 },
  { title: 'ロボットアームとAGVの連携', Image: GartherCard7 },
  { title: 'コンペア、AGVとの連携作業', Image: GartherCard8 },
  { title: 'スキャンニング、品質検査など', Image: GartherCard9 },
  { title: 'コンベア制御', Image: GartherCard10 },
  { title: '自動入庫', Image: GartherCard11 }
])
</script>
<style lang=""></style>
