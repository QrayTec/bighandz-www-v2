<template>
  <div class="bg-deep_blue w-full flex justify-center py-[120px]">
    <div
      class="font-NotoSansJP flex justify-center"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <div
        ref="cardContainer"
        class="relative h-[400px] w-[600px] flex justify-between"
        @mouseenter="stopAnimation"
        @mouseleave="startAnimation"
      >
        <div
          id="lopp"
          class="flex items-center justify-center text-white"
        >
          <img
            src="@/assets/images/logo_icon.png"
            alt=""
          />
        </div>
        <div
          v-for="(ball, index) in balls"
          :key="index"
          class="ball text-[1.2rem]"
          :style="AnimationFlag ? ballStylesStop(index) : ballStyles(index)"
          @mouseenter="setHoveredBall(index)"
          @mouseleave="clearHoveredBall"
        >
          <div
            :style="{ backgroundColor: ball.color }"
            class="relative z-1 h-full w-full flex flex-col items-center justify-center rounded-[50px]"
          >
            <div class="z-1">
              <img
                class="h-24px w-24px"
                :src="ball.icon"
                alt=""
                srcset=""
              />
            </div>
            <div class="text-[1.125rem] font-[500]">{{ ball.title }}</div>
            <transition
              enter-active-class="animate__animated animate__fadeInDown"
              leave-active-class="animate__animated animate__fadeOutUp"
            >
              <div
                v-show="hoveredBallIndex === index"
                :style="{ backgroundColor: ball.color }"
                class="absolute bottom-[105%] w-[250px] flex flex-col justify-center rounded-[5px] px-[30px] py-[12px] font-[400]"
              >
                <div
                  v-for="item in ball.content"
                  :key="item.list"
                >
                  {{ item.list }}
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import It from '@/assets/images/Business-Companies/it.svg'
import Health from '@/assets/images/Business-Companies/Health.svg'
import Consulting from '@/assets/images/Business-Companies/consulting.svg'
import Product from '@/assets/images/Business-Companies/Product.svg'
import Self from '@/assets/images/Business-Companies/self-service.svg'

const AnimationFlag = ref<boolean>(false)

const stopAnimation = () => {
  AnimationFlag.value = true
}

const startAnimation = () => {
  AnimationFlag.value = false
}
const cardContainer = ref()
interface ListType {
  list: string
}
interface ballType {
  title: string
  icon?: string
  color: string
  content: ListType[]
}
const balls = ref<ballType[]>([
  {
    title: 'ITシステム開発',
    icon: It,
    color: '#384879',
    content: [
      { list: '証券/金融' },
      { list: '官庁/公共' },
      { list: '製造/流通' },
      { list: '医療/製薬/養老' },
      { list: 'ビッグデータ' },
      { list: 'DX（AI/データ分析）' },
      { list: 'SalesForce' }
    ]
  },
  {
    title: 'ヘルスケア',
    icon: Health,
    color: '#4F6ECC',
    content: [
      { list: 'リハビリステーション' },
      { list: '老人ホーム管理システム' },
      { list: 'Intelligent　　' },
      { list: 'Community' }
    ]
  },
  {
    title: 'セルフサービス端末',
    icon: Self,
    color: '#ED8E3E',
    content: [
      { list: '知恵点' },
      { list: 'IPS' },
      { list: 'スマト物流' },
      { list: 'スマートウォッチ' },
      { list: '自動券売機' },
      { list: '自動販売機' },
      { list: '無人店舗' }
    ]
  },
  {
    title: '商品企画・販売',
    icon: Product,
    color: '#945EFC',
    content: [
      { list: 'インバウンド商品' },
      { list: 'デジタルマーケティング' },
      { list: 'SNS＆EC' }
    ]
  },
  {
    title: 'コンサルティング',
    icon: Consulting,
    color: '#67C1BC',
    content: [
      { list: '日中間の新規ビジネス開拓' },
      { list: '人材紹介' },
      { list: '顧客紹介' }
    ]
  }
])

const BollTime = ref<number>(4)

const ballStyles = (index: number) => {
  const spacing = 50 // Adjust the spacing between balls as needed
  const left = index * spacing
  const top = index * spacing

  return {
    animation:
      `animX 10s cubic-bezier(0.36, 0, 0.64, 1) -${
        index * BollTime.value + 5
      }s infinite alternate, ` +
      `animY 10s cubic-bezier(0.36, 0, 0.64, 1) -${
        index * BollTime.value + 0
      }s infinite alternate, ` +
      `scale 20s cubic-bezier(0.36, 0, 0.64, 1) -${
        index * BollTime.value + 0
      }s infinite alternate`,
    left: `${left}px`,
    top: `${top}px`
  }
}

const ballStylesStop = (index: number) => {
  const spacing = 50 // Adjust the spacing between balls as needed
  const left = index * spacing
  const top = index * spacing

  return {
    animation:
      `animX 10s cubic-bezier(0.36, 0, 0.64, 1) -${
        index * BollTime.value + 5
      }s infinite alternate paused, ` +
      `animY 10s cubic-bezier(0.36, 0, 0.64, 1) -${
        index * BollTime.value + 0
      }s infinite alternate paused, ` +
      `scale 20s cubic-bezier(0.36, 0, 0.64, 1) -${
        index * BollTime.value + 0
      }s infinite alternate paused`,
    left: `${left}px`,
    top: `${top}px`
  }
}
const hoveredBallIndex = ref<number | null>()
const setHoveredBall = (index: number) => {
  hoveredBallIndex.value = index
}

const clearHoveredBall = () => {
  hoveredBallIndex.value = null
}
</script>

<style>
@keyframes animX {
  0% {
    left: 0px;
  }
  100% {
    left: 500px;
  }
}
@keyframes animY {
  0% {
    top: 0px;
  }

  100% {
    top: 300px;
  }
}
@keyframes scale {
  0% {
    transform: scale(0.7);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.7);
    opacity: 0.5;
  }
}

.ball {
  width: 200px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  color: #fff;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ball1 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
}

.ball2 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -8.428s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -3.428s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -3.428s infinite alternate;
}

.ball3 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -11.856s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -6.856s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -6.856s infinite alternate;
}

.ball4 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -15.284s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -10.284s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -10.284s infinite alternate;
}

.ball5 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -18.712s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -13.712s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -13.712s infinite alternate;
}

.ball6 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -22.14s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -17.14s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -17.14s infinite alternate;
}

.ball7 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -22.142s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -17.142s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -17.142s infinite alternate;
}

#lopp {
  width: 500px;
  height: 300px;
  border: 2px solid #999;
  border-radius: 50%;
  position: absolute;
  left: 50px;
  top: 100px;
}
</style>
