<template>
  <div class="w-full flex items-center justify-center">
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
        <router-link to="/associated-company">
          <div
            class="bg-BusinessBall relative z-1 h-[64px] w-[64px] flex flex-col items-center justify-center rounded-[50px]"
          >
            <div class="z-1">
              <div class="text-[1rem] font-[500]">
                {{ ball.MiniTitle_1 }}
              </div>
            </div>

            <transition
              enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut"
            >
              <div
                v-show="hoveredBallIndex === index"
                class="bg-BusinessBall absolute z-3 h-[340px] w-[340px] flex flex-col justify-center rounded-full px-[36px]"
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
                <div class="w-full">
                  <ul
                    class="mt-[10px] w-full flex flex-col items-start justify-start text-[.875rem] leading-normal font-[400]"
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
        </router-link>
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
              :src="ball.Icon1"
              alt=""
            />
          </div>

          <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
          >
            <div
              v-show="hoveredBallIndex2 === index"
              class="balls_show absolute z-1 h-[340px] w-[340px] flex flex-col justify-center rounded-full px-[36px] pb-[46px]"
            >
              <div class="flex items-center justify-center">
                <img
                  class="h-[48px] w-[48px]"
                  :src="ball.Icon2"
                  alt=""
                />
              </div>
              <div
                class="mt-[10px] flex items-center justify-center text-[1rem] leading-normal font-[700]"
              >
                {{ ball.Title }}
              </div>

              <div class="w-full pl-[20px]">
                <ul
                  class="mt-[4px] w-full flex flex-col list-disc items-start justify-start text-[.875rem] leading-normal font-[400]"
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
          {{ ball.Title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import { CompaniesData1, CompaniesData2 } from '../data/index'

const AnimationFlag = ref<boolean>(true)

const BollTime = ref<number>(20 / CompaniesData1.value.length)
const BollTime2 = ref<number>(20 / CompaniesData2.value.length)

const ballStyles = (index: number) => ({
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

  animationPlayState: AnimationFlag.value ? 'running' : 'paused',
  willChange: 'left,top,opacity'
})

const ballStylesHover = (index: number) => ({
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

  animationPlayState: AnimationFlag.value ? 'running' : 'paused',
  zIndex: 10,
  willChange: 'left,top,opacity,cubic-bezier'
})

const ballStyles2 = (index: number) => ({
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

  willChange: 'left,top,opacity',
  animationPlayState: AnimationFlag.value ? 'running' : 'paused'
})

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
    top: 10px;
  }

  100% {
    top: 160px;
  }
}
@keyframes scale {
  0% {
    transform: scale(0.7);
    opacity: 0.1;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
  60% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(0.7);
    opacity: 0.1;
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
    top: -80px;
  }

  100% {
    top: 300px;
  }
}
@keyframes scale2 {
  0% {
    transform: scale(0.7);
    opacity: 0.3;
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
    opacity: 0.3;

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
