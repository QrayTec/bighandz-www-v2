<template>
  <div class="main_bg relative h-[973px] w-full flex flex-col items-center">
    <div class="bg-deep_blue absolute z-[1] h-full w-full bg-opacity-60"></div>
    <div
      class="font-NotoSansJP relative z-2 h-full pt-[90px] text-white"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <div class="text-[2.25rem] leading-[3.375rem] font-[500]">
        事業内容・グループ企業
      </div>
      <div class="relative top-[80px] h-[624px] w-full">
        <div
          class="main_line absolute left-[277px] z-[-1] h-[624px] w-full"
        ></div>
        <div
          class="absolute left-[55px] top-[38px] flex-col cursor-pointer items-end text-[1rem] font-[700]"
        >
          <div
            class="w-full flex flex-col items-end"
            @mouseenter="Flag1 = true"
            @mouseleave="Flag1 = false"
          >
            <div class="flex items-center">
              <p class="text-[1.5rem] leading-[1.875rem] font-[700]">2021</p>
              <img
                class="absolute right-[-45.5px]"
                :src="Flag1 ? Bill2 : Bill1"
                alt=""
              />
            </div>
            <div>大連大手経緯信息技術有限公司</div>
          </div>
          <transition
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeOutDown"
          >
            <div
              v-show="Flag1"
              class="text-deep_blue absolute bottom-[-150%] right-[0] z-2 w-[280px]"
            >
              <div class="bg-[#FEE9D8] px-[20px] py-[12px] text-[16px]">
                <div class="font-[700]">オフショア開発センター</div>
                <div class="mt-[10px] font-[400]">POSシステム開発</div>
              </div>
            </div>
          </transition>
        </div>

        <div
          class="absolute left-[434px] top-[52px] w-[250px] flex flex-col cursor-pointer text-[1rem] font-[700]"
        >
          <div
            class="w-full"
            @mouseenter="Flag2 = true"
            @mouseleave="Flag2 = false"
          >
            <img
              class="absolute left-[-40px] top-[30px]"
              :src="Flag2 ? Bill2 : Bill1"
              alt=""
            />
            <div class="flex items-center">
              <p class="text-[1.5rem] leading-[1.875rem] font-[700]">2020</p>
            </div>
            <div>サイフ株式会社</div>
          </div>
          <transition
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeOutDown"
          >
            <div
              v-show="Flag2"
              class="text-deep_blue absolute bottom-[-250%] left-[0] z-2 w-[280px]"
            >
              <div class="bg-[#FEE9D8] px-[20px] py-[12px] text-[16px]">
                <div class="font-[700]">商品企画・販売</div>
                <div class="mt-[10px] font-[400]">
                  インバウンド商品・越境EC デジタルマーケティング
                  ライブコンマス・SNS
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div
          class="absolute left-[195px] top-[275px] flex flex-col cursor-pointer items-end text-[1rem] font-[700]"
        >
          <div
            class="w-full flex flex-col items-end"
            @mouseenter="Flag3 = true"
            @mouseleave="Flag3 = false"
          >
            <img
              class="absolute right-[-50px] top-[-8px]"
              :src="Flag3 ? Bill2 : Bill1"
              alt=""
            />
            <div class="flex items-center">
              <p class="text-[1.5rem] leading-[1.875rem] font-[700]">2017</p>
            </div>
            <div>青岛大手新华锦康复有限公司</div>
          </div>
          <transition
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeOutDown"
          >
            <div
              v-show="Flag3"
              class="text-deep_blue absolute bottom-[-200%] left-[0] z-2 w-[280px]"
            >
              <div class="bg-[#FEE9D8] px-[20px] py-[12px] text-[16px]">
                <div class="font-[700]">ヘルスケア</div>
                <div class="mt-[10px] font-[400]">
                  リハビリステーション 老人ホーム管理システム Intelligent
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div
          class="absolute left-[503px] top-[430px] flex flex-col cursor-pointer text-[1rem] font-[700]"
        >
          <div
            class="w-full"
            @mouseenter="Flag4 = true"
            @mouseleave="Flag4 = false"
          >
            <img
              class="absolute top-[-40px]"
              :src="Flag4 ? Bill2 : Bill1"
              alt=""
            />
            <div class="flex items-center">
              <p class="text-[1.5rem] leading-[1.875rem] font-[700]">2015</p>
            </div>
            <div>青島大手商業諮詢有限公司</div>
          </div>
          <transition
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeOutDown"
          >
            <div
              v-show="Flag4"
              class="text-deep_blue absolute bottom-[-250%] left-[0] z-2 w-[280px]"
            >
              <div class="bg-[#FEE9D8] px-[20px] py-[12px] text-[16px]">
                <div class="font-[700]">コンサルティング</div>
                <div class="mt-[10px] font-[400]">
                  スマートシティ・スマート農業 中国マーケット調査
                  日本の技術移転・投資
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div
          class="absolute right-[195px] top-[300px] flex flex-col cursor-pointer text-[1rem] font-[700]"
        >
          <div
            class="w-full"
            @mouseenter="Flag5 = true"
            @mouseleave="Flag5 = false"
          >
            <img
              class="absolute top-[45px]"
              :src="Flag5 ? Bill2 : Bill1"
              alt=""
            />
            <div class="flex items-center">
              <p class="text-[1.5rem] leading-[1.875rem] font-[700]">2006</p>
            </div>
            <div>青島大手海恩信息技術有限公司</div>
          </div>
          <transition
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeOutDown"
          >
            <div
              v-show="Flag5"
              class="text-deep_blue absolute bottom-[-250%] left-[0] z-2 w-[280px]"
            >
              <div class="bg-[#FEE9D8] px-[20px] py-[12px] text-[16px]">
                <div class="font-[700]">オフショア開発センター</div>
                <div class="mt-[10px] font-[400]">
                  システム開発：証券・公共・医療 運用・BPO
                  イノベーションセンター
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div
          class="absolute right-[135px] top-[593px] flex flex-col cursor-pointer text-[1rem] font-[700]"
        >
          <div
            class="w-full"
            @mouseenter="Flag6 = true"
            @mouseleave="Flag6 = false"
          >
            <img
              class="absolute top-[-37.5px]"
              :src="Flag6 ? Bill2 : Bill1"
              alt=""
            />
            <div class="flex items-center">
              <p class="text-[1.5rem] leading-[1.875rem] font-[700]">2002</p>
            </div>
            <div>北京大手計算機技術有限公司</div>
          </div>
          <transition
            enter-active-class="animate__animated animate__fadeInDown"
            leave-active-class="animate__animated animate__fadeOutUp"
          >
            <div
              v-show="Flag6"
              class="text-deep_blue absolute left-[0] top-[-200%] z-2 w-[280px]"
            >
              <div class="bg-[#FEE9D8] px-[20px] py-[12px] text-[16px]">
                <div class="font-[700]">オフショア開発センター</div>
                <div class="mt-[10px] font-[400]">
                  システム開発：流通 パッケージ現地化
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div
          class="absolute bottom-[-50px] right-[485px] flex flex-col cursor-pointer text-[1rem] font-[700]"
        >
          <div
            class="w-full"
            @mouseenter="Flag7 = true"
            @mouseleave="Flag7 = false"
          >
            <img
              class="absolute top-[-37.5px]"
              :src="Flag7 ? Bill2 : Bill1"
              alt=""
            />
            <div class="flex items-center">
              <p class="text-[1.5rem] leading-[1.875rem] font-[700]">1998</p>
            </div>
            <div>ビッグハンズ株式会社</div>
          </div>
          <transition
            enter-active-class="animate__animated animate__fadeInDown"
            leave-active-class="animate__animated animate__fadeOutUp"
          >
            <div
              v-show="Flag7"
              class="text-deep_blue absolute left-[0] top-[-280%] z-2 w-[280px]"
            >
              <div class="bg-[#FEE9D8] px-[20px] py-[12px] text-[16px]">
                <div class="font-[700]">ITシステム開発</div>
                <div class="mt-[10px] font-[400]">
                  証券/金融/官庁/公共<br />
                  製造/流通/医療/製薬/養老<br />
                  インフラの構築・運用<br />
                  DX（AI/データ分析/クラウド）
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import Bill1 from '@/assets/images/Business-Companies/ball.svg'
import Bill2 from '@/assets/images/Business-Companies/ball_hover.svg'
// 大连2021
const Flag1 = ref<boolean>(false)
// サイフ株式会社
const Flag2 = ref<boolean>(false)

// 青岛大手新华锦康复有限公司
const Flag3 = ref<boolean>(false)

// 青島大手商業諮詢有限公司
const Flag4 = ref<boolean>(false)

// 青島大手海恩信息技術有限公司
const Flag5 = ref<boolean>(false)

// 北京大手計算機技術有限公司
const Flag6 = ref<boolean>(false)

// ITシステム開発
const Flag7 = ref<boolean>(false)
</script>
<style scoped>
.main_bg {
  background-image: url(@/assets/images/Business-Companies/bg-3.png);
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
}
.main_line {
  background-image: url(@/assets/images/Business-Companies/line.png);
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
