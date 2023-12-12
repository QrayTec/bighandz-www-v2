<template>
  <div class="w-full flex justify-center bg-[#111f4e] text-white">
    <div
      class="font-NotoSansJP my-[120px]"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <div class="text-[36px] leading-normal">事業内容・グループ企業</div>
      <div class="relative mt-[60px] h-[650px] w-full">
        <div
          class="absolute left-[50%] top-[50%] h-[244px] w-[500px] flex translate-[-50%] justify-center"
        >
          <div class="relative h-[244px] w-full">
            <transition
              enter-active-class="animate__animated animate__fadeInDown custom-enter"
              leave-active-class="animate__animated animate__fadeOutUp custom-leave"
            >
              <div
                v-show="BigHandz"
                class="absolute top-0 w-[500px] bg-[#3498db] px-[40px] py-[20px] text-[1rem] leading-[2rem] font-[400]"
              >
                ITシステム開発（１９９８年） 証券/金融/官庁/公共
                製造/流通/医療/製薬/養老 インフラの構築・運用
                DX（AI/データ分析/クラウド）
              </div>
            </transition>
            <div
              class="absolute bottom-0 w-full flex flex-col cursor-pointer items-center justify-center"
              @mouseenter="BigHandz = true"
              @mouseleave="BigHandz = false"
            >
              <img
                class="w-[60px]"
                src="@/assets/images/logo_icon.png"
                alt=""
                srcset=""
              />
              <div class="mt-[10px] text-[1.8rem] leading-normal uppercase">
                BigHandz
              </div>
            </div>
          </div>
        </div>
        <div class="absolute h-[244px] w-[500px] flex justify-center">
          <div class="relative h-[244px] w-full flex justify-center">
            <transition
              enter-active-class="animate__animated animate__fadeInDown custom-enter"
              leave-active-class="animate__animated animate__fadeOutUp custom-leave"
            >
              <div
                v-show="QingDaoHaiEn"
                class="absolute top-0 w-[500px] bg-[#B22222] px-[40px] py-[20px] text-[1rem] leading-[2rem] font-[400]"
              >
                オフショア開発センター（２００６年）
                システム開発：証券・公共・医療 運用・BPO イノベーションセンター
              </div>
            </transition>
            <div
              class="absolute bottom-0 h-[120px] w-[120px] flex flex-col cursor-pointer items-center justify-center rounded-full bg-[#B22222] bg-opacity-70 px-[20px] py-[12px] text-center"
              @mouseenter="QingDaoHaiEn = true"
              @mouseleave="QingDaoHaiEn = false"
            >
              <div>青島大手海恩信息技術有限公司</div>
            </div>
          </div>
        </div>
        <div
          class="absolute right-0 top-0 h-[244px] w-[500px] flex justify-center"
        >
          <div class="relative h-[244px] w-full flex justify-center">
            <transition
              enter-active-class="animate__animated animate__fadeInDown custom-enter"
              leave-active-class="animate__animated animate__fadeOutUp custom-leave"
            >
              <div
                v-show="QingDaoXinHuaJin"
                class="absolute top-0 w-[500px] bg-[#6495ED] px-[40px] py-[20px] text-[1rem] leading-[2rem] font-[400]"
              >
                ヘルスケア（２０１7年） リハビリステーション
                老人ホーム管理システム Intelligent Community
              </div>
            </transition>
            <div
              class="absolute bottom-0 h-[120px] w-[120px] flex flex-col cursor-pointer items-center justify-center rounded-full bg-[#6495ED] bg-opacity-70 px-[20px] py-[12px] text-center"
              @mouseenter="QingDaoXinHuaJin = true"
              @mouseleave="QingDaoXinHuaJin = false"
            >
              <div>青岛大手新华锦康复有限公司</div>
            </div>
          </div>
        </div>
        <div
          class="absolute right-0 top-[50%] h-[244px] w-[500px] flex translate-y-[-50%] justify-center"
        >
          <div class="relative h-[244px] w-full flex justify-center">
            <transition
              enter-active-class="animate__animated animate__fadeInDown custom-enter"
              leave-active-class="animate__animated animate__fadeOutUp custom-leave"
            >
              <div
                v-show="QingDaoShangyeZhiXun"
                class="absolute top-0 w-[500px] bg-[#2E8B57] px-[40px] py-[20px] text-[1rem] leading-[2rem] font-[400]"
              >
                コンサルティング（２０１５） スマートシティ・スマート農業
                中国マーケット調査 日本の技術移転・投資
              </div>
            </transition>
            <div
              class="absolute bottom-0 h-[120px] w-[120px] flex flex-col cursor-pointer items-center justify-center rounded-full bg-[#2E8B57] bg-opacity-70 px-[20px] py-[12px] text-center"
              @mouseenter="QingDaoShangyeZhiXun = true"
              @mouseleave="QingDaoShangyeZhiXun = false"
            >
              <div>青島大手商業諮詢有限公司</div>
            </div>
          </div>
        </div>
        <div
          class="absolute left-0 top-[50%] h-[244px] w-[500px] flex translate-y-[-50%] justify-center"
        >
          <div class="relative h-[244px] w-full flex justify-center">
            <transition
              enter-active-class="animate__animated animate__fadeInDown custom-enter"
              leave-active-class="animate__animated animate__fadeOutUp custom-leave"
            >
              <div
                v-show="BeiJinJiSuanji"
                class="absolute top-0 w-[500px] bg-[#483D8B] px-[40px] py-[20px] text-[1rem] leading-[2rem] font-[400]"
              >
                オフショア開発センター（２００２年） システム開発：流通
                パッケージ現地化
              </div>
            </transition>
            <div
              class="absolute bottom-0 h-[120px] w-[120px] flex flex-col cursor-pointer items-center justify-center rounded-full bg-[#483D8B] bg-opacity-70 px-[20px] py-[12px] text-center"
              @mouseenter="BeiJinJiSuanji = true"
              @mouseleave="BeiJinJiSuanji = false"
            >
              <div>北京大手計算機技術有限公司</div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 h-[244px] w-[500px] flex justify-center">
          <div class="relative h-[244px] w-full flex justify-center">
            <transition
              enter-active-class="animate__animated animate__fadeInDown custom-enter"
              leave-active-class="animate__animated animate__fadeOutUp custom-leave"
            >
              <div
                v-show="DaLianJingji"
                class="absolute top-0 w-[500px] bg-[#2371AD] px-[40px] py-[20px] text-[1rem] leading-[2rem] font-[400]"
              >
                オフショア開発センター（２０２１年） POSシステム開発
              </div>
            </transition>
            <div
              class="absolute bottom-0 h-[120px] w-[120px] flex flex-col cursor-pointer items-center justify-center rounded-full bg-[#2371AD] bg-opacity-70 px-[20px] py-[12px] text-center"
              @mouseenter="DaLianJingji = true"
              @mouseleave="DaLianJingji = false"
            >
              <div>大連大手経緯信息技術有限公司</div>
            </div>
          </div>
        </div>
        <div
          class="absolute bottom-0 right-0 h-[244px] w-[500px] flex justify-center"
        >
          <div class="relative h-[244px] w-full flex justify-center">
            <transition
              enter-active-class="animate__animated animate__fadeInDown custom-enter"
              leave-active-class="animate__animated animate__fadeOutUp custom-leave"
            >
              <div
                v-show="Saif"
                class="absolute top-0 w-[500px] bg-[#2d71e5] px-[40px] py-[20px] text-[1rem] leading-[2rem] font-[400]"
              >
                商品企画・販売（２０２０年） インバウンド商品・越境EC
                デジタルマーケティング ライブコンマス・SNS
              </div>
            </transition>
            <div
              class="absolute bottom-0 h-[120px] w-[120px] flex flex-col cursor-pointer items-center justify-center rounded-full bg-[#2d71e5] bg-opacity-70 px-[20px] py-[12px] text-center"
              @mouseenter="Saif = true"
              @mouseleave="Saif = false"
            >
              <div>サイフ株式会社</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

const BigHandz = ref<boolean>(false)
const QingDaoHaiEn = ref<boolean>(false)
const QingDaoXinHuaJin = ref<boolean>(false)
const QingDaoShangyeZhiXun = ref<boolean>(false)
const BeiJinJiSuanji = ref<boolean>(false)
const DaLianJingji = ref<boolean>(false)
const Saif = ref<boolean>(false)
</script>
<style scoped></style>
