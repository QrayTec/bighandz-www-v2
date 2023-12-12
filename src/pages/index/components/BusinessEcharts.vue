<template>
  <div
    class="relative w-full flex justify-center bg-[#111f4e] pb-[120px] text-white"
  >
    <div class="text-[36px] leading-normal">事業内容・グループ企業</div>
    <div
      class="font-NotoSansJP relative mt-[60px] flex justify-center"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <div
        class="z-1 flex justify-center"
        @mouseenter="isScrolling = false"
        @mouseleave="isScrolling = true"
      >
        <svg
          :width="width"
          :height="height"
          @mousemove="isScrolling && listener($event)"
        >
          <text
            v-for="tag in tags"
            :key="tag.text"
            :x="tag.x"
            :y="tag.y"
            :font-size="tag.size"
            :fill-opacity="(200 + tag.z) / 100"
            :fill="tag.color"
          >
            {{ tag.text }}
          </text>
        </svg>
      </div>
    </div>
    <div class="absolute h-full w-[1800px] flex justify-between">
      <transition
        enter-active-class="animate__animated animate__fadeInLeft custom-enter"
        leave-active-class="animate__animated animate__fadeOutLeft custom-leave"
      >
        <div
          v-show="!isScrolling"
          class="relative h-full w-[50%]"
        >
          <div
            class="absolute top-[20%] z-2 w-[500px] bg-[#B22222] px-[40px] py-[20px] text-[1rem] leading-[2rem] font-[400]"
          >
            <div class="text-[1.75rem] font-[700]">
              青岛大手新华锦康复有限公司
            </div>
            <p class="mt-[20px] leading-[32px] font-[400]">
              ヘルスケア（２０１7年） リハビリステーション
              老人ホーム管理システム Intelligent Community
            </p>
          </div>
          <div
            class="absolute top-[50%] z-2 w-[500px] bg-[#6495ED] px-[40px] py-[20px] text-[1rem] leading-[2rem] font-[400]"
          >
            <div class="text-[1.75rem] font-[700]">
              青島大手商業諮詢有限公司
            </div>
            <p class="mt-[20px] leading-[32px] font-[400]">
              コンサルティング（２０１５） スマートシティ・スマート農業
              中国マーケット調査 日本の技術移転・投資
            </p>
          </div>
          <div
            class="absolute top-[70%] z-2 w-[500px] translate-y-[50%] bg-[#2E8B57] px-[40px] py-[20px] text-[1rem] leading-[2rem] font-[400]"
          >
            <div class="text-[1.75rem] font-[700]">サイフ株式会社</div>
            <p class="mt-[20px] leading-[32px] font-[400]">
              商品企画・販売（２０２０年） インバウンド商品・越境EC
              デジタルマーケティング ライブコンマス・SNS
            </p>
          </div>
        </div>
      </transition>
      <transition
        enter-active-class="animate__animated animate__fadeInRight custom-enter"
        leave-active-class="animate__animated animate__fadeOutRight custom-leave"
      >
        <div
          v-show="!isScrolling"
          class="relative w-[50%]"
        >
          <div
            class="absolute right-0 top-[20%] z-2 w-[500px] bg-[#483D8B] px-[40px] py-[20px] text-[1rem] leading-[2rem] font-[400]"
          >
            <div class="text-[1.75rem] font-[700]">
              大連大手経緯信息技術有限公司
            </div>
            <p class="mt-[20px] leading-[32px] font-[400]">
              オフショア開発センター（２０２１年） POSシステム開発
            </p>
          </div>
          <div
            class="absolute right-0 top-[50%] z-2 w-[500px] bg-[#2371AD] px-[40px] py-[20px] text-[1rem] leading-[2rem] font-[400]"
          >
            <div class="text-[1.75rem] font-[700]">
              北京大手計算機技術有限公司
            </div>
            <p class="mt-[20px] leading-[32px] font-[400]">
              オフショア開発センター（２００２年） システム開発：流通
              パッケージ現地化
            </p>
          </div>
          <div
            class="absolute right-0 top-[70%] z-2 z-2 w-[500px] translate-y-[50%] bg-[#2d71e5] px-[40px] py-[20px] text-[1rem] leading-[2rem] font-[400]"
          >
            <div class="text-[1.75rem] font-[700]">
              青島大手海恩信息技術有限公司
            </div>
            <p class="mt-[20px] leading-[32px] font-[400]">
              オフショア開発センター（２００６年）
              システム開発：証券・公共・医療 運用・BPO イノベーションセンター
            </p>
          </div>
        </div>
      </transition>
      <transition
        enter-active-class="animate__animated animate__fadeInDown custom-enter"
        leave-active-class="animate__animated animate__fadeOutUp custom-leave"
      >
        <div
          v-show="!isScrolling"
          class="absolute w-full"
        >
          <div
            class="absolute left-[50%] z-2 w-[500px] translate-x-[-50%] bg-[#3498db] px-[40px] py-[20px] text-[1rem] leading-[2rem] font-[400]"
          >
            <div class="text-[1.75rem] font-[700]">株式会社ビッグハンズ</div>
            <p class="mt-[20px] leading-[32px] font-[400]">
              オフショア開発センター（２００２年） システム開発：流通
              パッケージ現地化
            </p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

const width = ref(1000)
const height = ref(800)
const RADIUS = ref(300)
const speedX = ref(Math.PI / 360)
const speedY = ref(Math.PI / 360)
const tags = ref([
  '証券/金融',
  '官庁/公共',
  '製造/流通',
  '医療/製薬/養老',
  'ビッグデータ',
  'DX（AI/データ分析）',
  'SalesForce',
  'リハビリステーション',
  '老人ホーム管理システム',
  'Intelligent Community',
  '知恵点',
  'IPS',
  'スマト物流',
  'スマートウォッチ',
  '自動券売機',
  '無人店舗',
  'インバウンド商品',
  'デジタルマーケティング',
  'SNS＆EC',
  '日中間の新規ビジネス開拓',
  '人材紹介',
  '顧客紹介'
])

const tags2 = ref([
  '青島大手海恩信息技術有限公司',
  '大連大手経緯信息技術有限公司',
  '新華錦大手康復産業管理公司',
  '北京大手計算機技術有限公司',
  '株式会社SEI',
  'サイフ株式会社',
  '青島大手商業諮詢有限公司'
])
const tags3 = ref([
  'ITシステム開発・流通',
  '千手運用パッケージ開発',
  'イノベーションセンター',
  '日本向けオフショア開発',
  'AI・データ分析',
  'インフラ',
  'ライブコンマス',
  '高齢者総合機能評価',
  '介護・リハビリステーション',
  'スマートシティ・スマート農業',
  '医療・メディカル',
  '中国マーケット調査',
  '日本の技術移転・投資',
  '越境EC'
])
const CX = width.value / 3
const CY = height.value / 2
const isScrolling = ref(true)
const rotateX = (angleX: number) => {
  const cos = Math.cos(angleX)
  const sin = Math.sin(angleX)
  for (const tag of tags.value) {
    const y1 = (tag.y - CY) * cos - tag.z * sin + CY
    const z1 = tag.z * cos + (tag.y - CY) * sin
    tag.y = y1
    tag.z = z1
  }
}

const rotateY = (angleY: number) => {
  const cos = Math.cos(angleY)
  const sin = Math.sin(angleY)
  for (const tag of tags.value) {
    const x1 = (tag.x - CX) * cos - tag.z * sin + CX
    const z1 = tag.z * cos + (tag.x - CX) * sin
    tag.x = x1
    tag.z = z1
  }
}

const listener = (event: MouseEvent) => {
  const x = event.clientX - CX
  const y = event.clientY - CY
  speedX.value =
    x * 0.0001 > 0
      ? Math.min(RADIUS.value * 0.00002, x * 0.0001)
      : Math.max(-RADIUS.value * 0.00002, x * 0.0001)
  speedY.value =
    y * 0.0001 > 0
      ? Math.min(RADIUS.value * 0.00002, y * 0.0001)
      : Math.max(-RADIUS.value * 0.00002, y * 0.0001)
}

onMounted(() => {
  const intervalId = setInterval(() => {
    // eslint-disable-next-line no-unused-expressions
    isScrolling.value && rotateX(speedX.value)
    // eslint-disable-next-line no-unused-expressions
    isScrolling.value && rotateY(speedY.value)
  }, 17)

  onBeforeUnmount(() => {
    clearInterval(intervalId)
  })
})

onMounted(() => {
  const tagsArray = []

  for (let i = 0; i < tags.value.length; i++) {
    const tag = {}
    const k = -1 + (2 * (i + 1) - 1) / tags.value.length
    const a = Math.acos(k)
    const b = a * Math.sqrt(tags.value.length * Math.PI)
    tag.text = tags.value[i]
    tag.size = '24'
    tag.color = '#fff' // 设置默认颜色为白色
    tag.x = CX + RADIUS.value * Math.sin(a) * Math.cos(b)
    tag.y = CY + RADIUS.value * Math.sin(a) * Math.sin(b)
    tag.z = RADIUS.value * Math.cos(a)
    tagsArray.push(tag)
  }

  for (let i = 0; i < tags2.value.length; i++) {
    const tag = {}
    const k = -1 + (2 * (i + 1) - 1) / tags2.value.length
    const a = Math.acos(k)
    const b = a * Math.sqrt(tags2.value.length * Math.PI)
    tag.text = tags2.value[i]
    tag.color = '#ED8E3E'
    tag.size = '36'
    tag.x = CX + RADIUS.value * Math.sin(a) * Math.cos(b)
    tag.y = CY + RADIUS.value * Math.sin(a) * Math.sin(b)
    tag.z = RADIUS.value * Math.cos(a)
    tagsArray.push(tag)
  }

  for (let i = 0; i < tags3.value.length; i++) {
    const tag = {}
    const k = -1 + (2 * (i + 1) - 1) / tags3.value.length
    const a = Math.acos(k)
    const b = a * Math.sqrt(tags3.value.length * Math.PI)
    tag.text = tags3.value[i]
    tag.color = '#67C1BC'
    tag.size = '28'

    tag.x = CX + RADIUS.value * Math.sin(a) * Math.cos(b)
    tag.y = CY + RADIUS.value * Math.sin(a) * Math.sin(b)
    tag.z = RADIUS.value * Math.cos(a)
    tagsArray.push(tag)
  }

  tags.value = tagsArray
})
</script>
<style lang=""></style>
