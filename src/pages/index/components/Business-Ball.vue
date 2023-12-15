<template>
  <div class="w-full flex justify-center">
    <div
      class="relative w-[1118px] flex items-center justify-center"
      @mouseenter="AnimationFlag = false"
      @mouseleave="AnimationFlag = true"
    >
      <div
        class="w-full flex items-center justify-center text-[2.25rem] font-[700] text-white"
      >
        <img
          class="w-full"
          src="@/assets/images/Business-Companies/Ball_bg_logo.png"
        />
      </div>
      <div
        v-for="(ball, index) in CompaniesData1"
        :key="index"
        class="absolute flex flex-col items-center justify-center text-[1.2rem]"
        :style="
          hoveredBallIndex === index
            ? ballStylesHover(index)
            : ballStyles(index)
        "
        @mouseenter="setHoveredBall(index)"
        @mouseleave="clearHoveredBall"
      >
        <div
          class="bg-BusinessBall relative z-1 h-[64px] w-[64px] flex flex-col items-center justify-center rounded-[50px]"
        >
          <div class="z-1">
            <div class="text-[1.125rem] font-[500]">
              {{ ball.MiniTitle_1 }}<br />
              {{ ball.MiniTitle_2 }}
            </div>
          </div>

          <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
          >
            <div
              v-show="hoveredBallIndex === index"
              class="bg-BusinessBall absolute z-9999999 h-[300px] w-[300px] flex flex-col justify-center rounded-full px-[36px]"
            >
              <div class="flex items-center justify-center">
                <img
                  :src="ball.icon"
                  alt=""
                />
              </div>
              <div class="mt-[30px] text-[1rem] leading-normal font-[700]">
                {{ ball.BigTitle }}
              </div>
              <div
                v-if="ball.BigTitle_2"
                class="mt-[10px] text-[1rem] leading-normal font-[700]"
              >
                {{ ball.BigTitle_2 }}
              </div>
              <div class="w-full pl-[20px]">
                <ul
                  class="mt-[10px] w-full flex flex-col list-disc items-start justify-start text-[.875rem] leading-normal font-[400]"
                >
                  <li
                    v-for="item in ball.content"
                    :key="item.list"
                  >
                    {{ item.list }}
                  </li>
                </ul>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <div
        v-for="(ball, index) in CompaniesData2"
        :key="index"
        class="absolute z-3 flex flex-col items-center justify-center text-[1.2rem]"
        :style="ballStyles2(index)"
        @mouseenter="setHoveredBall2(index)"
        @mouseleave="clearHoveredBall2"
      >
        <div
          class="balls relative z-1 h-[64px] w-[64px] flex flex-col items-center justify-center rounded-[50px]"
        >
          <div class="z-1">
            <img
              :src="ball.icon"
              alt=""
            />
          </div>

          <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
          >
            <div
              v-show="hoveredBallIndex2 === index"
              class="balls_show absolute z-1 h-[300px] w-[300px] flex flex-col justify-center rounded-full px-[36px]"
            >
              <div class="flex items-center justify-center">
                <img
                  class="h-[48px] w-[48px]"
                  :src="ball.icon2"
                  alt=""
                />
              </div>
              <div class="mt-[30px] text-[1rem] leading-normal font-[700]">
                {{ ball.BigTitle }}
              </div>
              <div
                v-if="ball.BigTitle_2"
                class="mt-[10px] text-[1rem] leading-normal font-[700]"
              >
                {{ ball.BigTitle_2 }}
              </div>
              <div class="w-full pl-[20px]">
                <ul
                  class="mt-[10px] w-full flex flex-col list-disc items-start justify-start text-[.875rem] leading-normal font-[400]"
                >
                  <li
                    v-for="item in ball.content"
                    :key="item.list"
                  >
                    {{ item.list }}
                  </li>
                </ul>
              </div>
            </div>
          </transition>
        </div>
        <div
          class="mt-[6px] w-[205px] text-center text-[1.125rem] leading-normal font-[700] text-[#597BE5]"
        >
          {{ ball.MiniTitle_1 }}<br />
          {{ ball.year }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import { CompaniesType, CompaniesType2 } from '../types/index'
import BeiJIn from '@/assets/images/Business-Companies/BeiJin.svg'
import QinDaoDaLian from '@/assets/images/Business-Companies/QinDaoDaLian.svg'
import SEI from '@/assets/images/Business-Companies/SEI.svg'
import Saif from '@/assets/images/Business-Companies/Saif.svg'
import XinHuaJin from '@/assets/images/Business-Companies/XinHuaJin.svg'
import Inquiry from '@/assets/images/Business-Companies/Inquiry.svg'
import Shopper1 from '@/assets/images/Business-Companies/shopper_1.svg'
import Shopper2 from '@/assets/images/Business-Companies/shopper_2.svg'

const CompaniesData1 = ref<CompaniesType[]>([
  {
    MiniTitle_1: '北京',
    BigTitle: '北京大手計算機技術有限公司',
    icon: BeiJIn,
    content: [
      { list: '千手運用パッケージ開発' },
      { list: 'ITシステム開発・流通' }
    ]
  },
  {
    MiniTitle_1: '青島',
    MiniTitle_2: '大連',
    BigTitle: '青島大手商業諮詢有限公司',
    BigTitle_2: '青島大手商業諮詢有限公司',
    icon: QinDaoDaLian,
    content: [
      { list: '日本向けオフショア開発' },
      { list: 'イノベーションセンター' }
    ]
  },
  {
    MiniTitle_1: 'SEI',
    BigTitle: '株式会社SEI',
    icon: SEI,
    content: [{ list: 'AI・データ分析' }, { list: 'インフラ' }]
  },
  {
    MiniTitle_1: 'サイフ',
    BigTitle: 'サイフ株式会社',
    icon: Saif,
    content: [{ list: '越境EC' }, { list: 'ライブコンマス' }]
  },
  {
    MiniTitle_1: '新華錦',
    BigTitle: '新華錦大手康復産業管理公司',
    icon: XinHuaJin,
    content: [
      { list: '高齢者総合機能評価' },
      { list: '介護・リハビリステーション' }
    ]
  },
  {
    MiniTitle_1: '諮詢',
    BigTitle: '青島大手商業諮詢有限公司',
    icon: Inquiry,
    content: [
      { list: 'スマートシティ・スマート農業' },
      { list: '医療・メディカル' },
      { list: '中国マーケット調査' },
      { list: '日本の技術移転・投資' }
    ]
  }
])

const CompaniesData2 = ref<CompaniesType2[]>([
  {
    MiniTitle_1: '商品企画・販売',
    year: '(2020)',
    icon: Shopper1,
    icon2: Shopper2,
    BigTitle: 'サイフ株式会社',
    BigTitle_2: '商品企画・販売（２０２０年）',
    content: [
      { list: 'インバウンド商品・越境EC' },
      { list: 'デジタルマーケティング' },
      { list: 'ライブコンマス・SNS' }
    ]
  },

  {
    MiniTitle_1: 'オフショア開発センター',
    year: '(2021)',
    icon: Shopper1,
    icon2: Shopper2,
    BigTitle: '大連大手経緯信息技術有限公司',
    BigTitle_2: 'オフショア開発センター（２０２１年）',
    content: [{ list: 'POSシステム開発' }]
  },
  {
    MiniTitle_1: 'ヘルスケア',
    year: '(2017)',
    icon: Shopper1,
    icon2: Shopper2,
    BigTitle: '青島大手新華錦康復有限公司',
    BigTitle_2: 'ヘルスケア（２０１7年）',
    content: [
      { list: 'リハビリステーション' },
      { list: '老人ホーム管理システム' },
      { list: 'Intelligent　Community' }
    ]
  },
  {
    MiniTitle_1: 'コンサルティング',
    year: '(2015)',
    icon: Shopper1,
    icon2: Shopper2,
    BigTitle: '青島大手商業諮詢有限公司',
    BigTitle_2: 'コンサルティング（２０１５）',
    content: [
      { list: 'スマートシティ・スマート農業' },
      { list: '中国マーケット調査' },
      { list: '日本の技術移転・投資' }
    ]
  },
  {
    MiniTitle_1: 'オフショア開発センター',
    year: '(2006)',
    icon: Shopper1,
    icon2: Shopper2,
    BigTitle: '青島大手海恩信息技術有限公司',
    BigTitle_2: 'オフショア開発センター（２００６年）',
    content: [
      { list: 'システム開発：証券・公共・医療' },
      { list: '運用・BPO' },
      { list: 'イノベーションセンター' }
    ]
  },
  {
    MiniTitle_1: 'オフショア開発センター',
    year: '(2002)',
    icon: Shopper1,
    icon2: Shopper2,
    BigTitle: '北京大手計算機技術有限公司',
    BigTitle_2: 'オフショア開発センター(2002)',
    content: [{ list: 'システム開発：流通パッケージ現地化' }]
  },
  {
    MiniTitle_1: 'ITシステム開発',
    year: '(1998)',
    icon: Shopper1,
    icon2: Shopper2,
    BigTitle: '',
    BigTitle_2: 'ITシステム開発(1998)',
    content: [
      { list: '証券/金融/官庁/公共' },
      { list: '製造/流通/医療/製薬/養老' },
      { list: 'インフラの構築・運用' },
      { list: 'DX（AI/データ分析/クラウド' }
    ]
  }
])

const AnimationFlag = ref<boolean>(true)

const BollTime = ref<number>(3.242)
const BollTime2 = ref<number>(2.8)

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
    top: `${top}px`,
    animationPlayState: AnimationFlag.value ? 'running' : 'paused'
  }
}

const ballStylesHover = (index: number) => {
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
    top: `${top}px`,
    animationPlayState: AnimationFlag.value ? 'running' : 'paused',
    zIndex: 10
  }
}

const ballStyles2 = (index: number) => {
  const spacing = 50 // Adjust the spacing between balls as needed
  const left = index * spacing
  const top = index * spacing

  return {
    animation:
      `animX2 10s cubic-bezier(0.36, 0, 0.64, 1) -${
        index * BollTime2.value + 5
      }s infinite alternate, ` +
      `animY2 10s cubic-bezier(0.36, 0, 0.64, 1) -${
        index * BollTime2.value + 0
      }s infinite alternate, ` +
      `scale2 20s cubic-bezier(0.36, 0, 0.64, 1) -${
        index * BollTime2.value + 0
      }s infinite alternate`,
    left: `${left}px`,
    top: `${top}px`,
    animationPlayState: AnimationFlag.value ? 'running' : 'paused'
  }
}

const hoveredBallIndex = ref<number | null>()
const hoveredBallIndex2 = ref<number | null>()
const setHoveredBall = (index: number) => {
  hoveredBallIndex.value = index
}

const clearHoveredBall = () => {
  hoveredBallIndex.value = null
}

const setHoveredBall2 = (index: number) => {
  hoveredBallIndex2.value = index
}

const clearHoveredBall2 = () => {
  hoveredBallIndex2.value = null
}
</script>

<style>
@keyframes animX {
  0% {
    left: 250px;
  }
  100% {
    left: 810px;
  }
}
@keyframes animY {
  0% {
    top: 30px;
  }

  100% {
    top: 180px;
  }
}
@keyframes scale {
  0% {
    transform: scale(0.7);
    opacity: 0;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  60% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.7);
    opacity: 0;
  }
}

@keyframes animX2 {
  0% {
    left: -100px;
  }
  100% {
    left: 1015px;
  }
}
@keyframes animY2 {
  0% {
    top: -50px;
  }

  100% {
    top: 245px;
  }
}
@keyframes scale2 {
  0% {
    transform: scale(0.7);
    opacity: 0;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  60% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.7);
    opacity: 0;
    z-index: 1;
  }
}

.balls {
  background-color: rgba(7, 16, 39, 0.5);
  border: 1px solid #597be5;
}
.balls_show {
  background-color: #071027;
  border: 1px solid #597be5;
}
.ball1 {
  animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
}
</style>
