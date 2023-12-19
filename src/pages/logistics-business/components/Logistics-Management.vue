<template>
  <div
    id="LogisticsManagement"
    class="font-NotoSansJP"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle>物流全般管理</ThePageMinTitle>
    <div class="text-deep_blue mt-[30px] text-[1rem] leading-[2rem] font-[400]">
      <p>
        vTradExは物流マネージメントに必要な機能をすべて網羅できる構成となっています。
        vTradExはグローバル的に各業種に向け3,000社以上の導入実績がある総合的な物流パッケージです。ビッグハンズ社はvTradExに日本販売代理店となっております。日本の顧客様が安心でvTradExを利用できるため、ビッグハンズ社は日本でのvTradExを販売するとともに現地でのパッケージ導入・カスタマイズなどの技術サポートもしております。
      </p>
    </div>

    <div class="mt-[60px] w-full flex justify-center">
      <div class="w-full flex flex-col items-center justify-center">
        <div
          class="relative h-[732px] w-full flex flex-col items-center justify-center"
        >
          <div
            class="text-deep_blue relative z-1 mt-[6px] h-[500px] w-[500px] text-[1.25rem] font-[700]"
          >
            <div
              class="group absolute left-[calc(50%-92.5px)] top-[0px] h-[162.px] w-[185px] flex items-center justify-center"
              @mouseenter="TMS = true"
              @mouseleave="TMS = false"
            >
              <img
                src="@/assets/images/logistics-business/tms.svg"
                alt=""
              />
              <div class="absolute">TMS</div>
            </div>
            <div
              class="group absolute bottom-[0px] left-[calc(50%-92.5px)] h-[162.px] w-[185px] flex items-center justify-center"
              @mouseenter="EHUB = true"
              @mouseleave="EHUB = false"
            >
              <img
                src="@/assets/images/logistics-business/ehub.svg"
                alt=""
              />
              <div class="absolute translate-x-[-15px] text-white">EHUB</div>
            </div>
            <div
              class="absolute right-[21px] top-[21px] h-[189px] w-[189px] flex items-center justify-center"
              @mouseenter="WMS = true"
              @mouseleave="WMS = false"
            >
              <img
                src="@/assets/images/logistics-business/wms.svg"
                alt=""
              />
              <div class="absolute">WMS</div>
            </div>
            <div
              class="absolute left-[21px] top-[21px] h-[189px] w-[189px] flex items-center justify-center"
              @mouseenter="OMS = true"
              @mouseleave="OMS = false"
            >
              <img
                src="@/assets/images/logistics-business/oms.svg"
                alt=""
              />
              <div class="absolute">OMS</div>
            </div>
            <div
              class="absolute right-[0px] top-[calc(50%-92.5px)] h-[185px] w-[162px] flex items-center justify-center"
              @mouseenter="BMS = true"
              @mouseleave="BMS = false"
            >
              <img
                src="@/assets/images/logistics-business/bms.svg"
                alt=""
              />
              <div class="absolute">BMS</div>
            </div>
            <div
              class="absolute left-[0px] top-[calc(50%-92.5px)] h-[185px] w-[162px] flex items-center justify-center"
              @mouseenter="WES = true"
              @mouseleave="WES = false"
            >
              <img
                src="@/assets/images/logistics-business/wes.svg"
                alt=""
              />
              <div class="absolute text-white">WES</div>
            </div>
            <div
              class="absolute bottom-[21px] right-[21px] h-[189px] w-[189px] flex items-center justify-center"
              @mouseenter="ROS = true"
              @mouseleave="ROS = false"
            >
              <img
                src="@/assets/images/logistics-business/ros.svg"
                alt=""
              />
              <div class="absolute text-white">ROS</div>
            </div>
            <div
              class="absolute bottom-[21px] left-[21px] h-[189px] w-[189px] flex items-center justify-center"
              @mouseenter="Cloud = true"
              @mouseleave="Cloud = false"
            >
              <img
                src="@/assets/images/logistics-business/cloud.svg"
                alt=""
              />
              <div class="absolute translate-y-[-15px] text-white">
                クラウド
              </div>
            </div>
            <div
              class="absolute left-[calc(50%-110px)] top-[calc(50%-110px)] h-[220px] w-[220px] flex items-center justify-center"
            >
              <img
                class="absolute z-1 h-full w-full"
                src="@/assets/images/logistics-business/logo.svg"
                alt=""
              />
            </div>
          </div>

          <div class="absolute left-0 top-0 z-0 h-full w-full">
            <transition
              name="fade"
              enter-active-class="animate__animated animate__fadeInDown"
              leave-active-class="animate__animated animate__fadeOutUp"
            >
              <div
                v-show="TMS"
                class="absolute left-[calc(50%-250px)] top-[0px] w-[500px]"
              >
                <div
                  class="text-deep_blue bg-[#DCECC9] px-[20px] py-[12px] text-[1rem] font-[400]"
                >
                  <p class="font-[700]">輸配送管理システム（TMS）</p>
                  <p class="mt-[10px]">
                    集荷、幹線、小口貨物、配車、積替え、配送など輸計画の最適化とモニタリングを行う
                  </p>
                </div>
                <div
                  class="absolute left-[244px] h-[6px] w-[12px] border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#DCECC9] divide-solid"
                ></div>
              </div>
            </transition>
            <transition
              name="fade"
              enter-active-class="animate__animated animate__fadeInDown"
              leave-active-class="animate__animated animate__fadeOutUp"
            >
              <div
                v-show="OMS"
                class="absolute left-[0] top-[128px] w-[370px]"
              >
                <div
                  class="text-deep_blue bg-[#85CBCF] px-[20px] py-[12px] text-[1rem] font-[400]"
                >
                  <p class="font-[700]">オーダー管理システム（OMS）</p>
                  <p class="mt-[10px]">
                    オーダーコントロール、倉庫・配送会社割当、在庫一元管理、トレーサビリティ、KPI分析を可能とする
                  </p>
                </div>
                <div
                  class="absolute right-[-9px] top-[calc(50%-6px)] h-[6px] w-[12px] transform-rotate-[270deg] border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#85CBCF] divide-solid"
                ></div>
              </div>
            </transition>
            <transition
              name="fade"
              enter-active-class="animate__animated animate__fadeInDown"
              leave-active-class="animate__animated animate__fadeOutUp"
            >
              <div
                v-show="WMS"
                class="absolute right-[0] top-[128px] w-[370px]"
              >
                <div
                  class="text-deep_blue bg-[#AFDCCC] px-[20px] py-[12px] text-[1rem] font-[400]"
                >
                  <p class="font-[700]">倉庫管理システム（WMS）</p>
                  <p class="mt-[10px]">
                    倉庫内のオペレーションを高品質・効率的に管理。入荷から在庫、出荷、返品、棚卸といった一連の倉庫業務をサポート
                  </p>
                </div>
                <div
                  class="absolute left-[-9px] top-[calc(50%-6px)] h-[6px] w-[12px] transform-rotate-[90deg] border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#AFDCCC] divide-solid"
                ></div>
              </div>
            </transition>
            <transition
              name="fade"
              enter-active-class="animate__animated animate__fadeInDown"
              leave-active-class="animate__animated animate__fadeOutUp"
            >
              <div
                v-show="WES"
                class="absolute left-[0] top-[296px] w-[338px]"
              >
                <div
                  class="bg-[#2371AD] px-[20px] py-[12px] text-[1rem] font-[400] text-[#fff]"
                >
                  <p class="font-[700]">倉庫運用管理システム（WES）</p>
                  <p class="mt-[10px]">
                    マテハンメーカーのWCSと連携し、リアルタイムにAGVやアームロボットなどのマテハン機械のコントロール及び監視を行う
                  </p>
                </div>
                <div
                  class="absolute right-[-9px] top-[calc(50%-6px)] h-[6px] w-[12px] transform-rotate-[270deg] border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#2371AD] divide-solid"
                ></div>
              </div>
            </transition>
            <transition
              name="fade"
              enter-active-class="animate__animated animate__fadeInDown"
              leave-active-class="animate__animated animate__fadeOutUp"
            >
              <div
                v-show="BMS"
                class="absolute right-[0] top-[296px] w-[338px]"
              >
                <div
                  class="text-deep_blue bg-[#78C6D0] px-[20px] py-[12px] text-[1rem] font-[400]"
                >
                  <p class="font-[700]">物流費管理システム（BMS）</p>
                  <p class="mt-[10px]">
                    費用率マスタ、課金ロジックエンジンにより、倉庫運営、運送関連費用の計算を行う
                  </p>
                </div>
                <div
                  class="absolute left-[-9px] top-[calc(50%-6px)] h-[6px] w-[12px] transform-rotate-[90deg] border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#78C6D0] divide-solid"
                ></div>
              </div>
            </transition>
            <transition
              name="fade"
              enter-active-class="animate__animated animate__fadeInDown"
              leave-active-class="animate__animated animate__fadeOutUp"
            >
              <div
                v-show="Cloud"
                class="absolute bottom-[131px] left-[0] w-[370px]"
              >
                <div
                  class="bg-[#183F7A] px-[20px] py-[12px] text-[1rem] font-[400] text-[#fff]"
                >
                  <p class="font-[700]">クラウドプラットフォーム</p>
                  <p class="mt-[10px]">
                    vTradExサブブランドとして、
                    クラウドにてWMS、TMS、ROSなどの機能をモバイルアプリにて利用可能
                  </p>
                </div>
                <div
                  class="absolute right-[-9px] top-[calc(50%-6px)] h-[6px] w-[12px] transform-rotate-[270deg] border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#183F7A] divide-solid"
                ></div>
              </div>
            </transition>
            <transition
              name="fade"
              enter-active-class="animate__animated animate__fadeInDown"
              leave-active-class="animate__animated animate__fadeOutUp"
            >
              <div
                v-show="ROS"
                class="absolute bottom-[131px] right-[0] w-[370px]"
              >
                <div
                  class="bg-[#289DC7] px-[20px] py-[12px] text-[1rem] font-[400] text-[#fff]"
                >
                  <p class="font-[700]">ルート管理システム（ROS）</p>
                  <p class="mt-[10px]">
                    AIを活用し、分単位での最適な配送計画を立案しコストダウンを可能とする
                  </p>
                </div>
                <div
                  class="absolute left-[-9px] top-[calc(50%-6px)] h-[6px] w-[12px] transform-rotate-[90deg] border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#289DC7] divide-solid"
                ></div>
              </div>
            </transition>
            <transition
              name="fade"
              enter-active-class="animate__animated animate__fadeInDown"
              leave-active-class="animate__animated animate__fadeOutUp"
            >
              <div
                v-show="EHUB"
                class="absolute bottom-[-20px] left-[calc(50%-250px)] w-[500px]"
              >
                <div
                  class="bg-deep_blue px-[20px] py-[12px] text-[1rem] font-[400] text-[#fff]"
                >
                  <p class="font-[700]">e-Hubインタフェースプラットフォーム</p>
                  <p class="mt-[10px]">
                    異るシステム間での連携を迅速に実現するためのクラウドベースのインターフェースプラットフォーム
                  </p>
                </div>
                <div
                  class="border-t-deep_blue absolute left-[244px] top-[-6px] h-[6px] w-[12px] transform-rotate-[180deg] border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent divide-solid"
                ></div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mt-[120px]"
      data-aos="fade-up"
    >
      <div
        class="text-deep_blue w-[654px] text-[1rem] leading-[2rem] font-[400]"
      >
        物流戦略の策定からシステム構築、保守・運用サービス、倉庫運営支援まで一気通貫でお客様にサービスを提供します。
      </div>
      <div
        class="mt-[60px] flex flex-col items-center justify-center bg-[#DFE4F2] px-[30px] pb-[15px]"
      >
        <div class="relative mt-[30px] h-[44px] w-full flex justify-center">
          <div class="relative h-full w-full flex items-center justify-center">
            <img
              src="@/assets/images/logistics-business/arrow_left.svg"
              alt="Arrow Left"
              class="absolute inset-0 h-full w-full"
            />
            <div class="relative z-1 text-[1rem] font-[700] text-[#FF0]">
              全工程ワンストップで推進
            </div>
          </div>
        </div>
        <div class="relative mt-[30px] h-[44px] w-full flex justify-center">
          <div class="relative h-full w-full flex items-center justify-center">
            <img
              src="@/assets/images/logistics-business/double-arrow.svg"
              alt="Arrow Left"
              class="absolute inset-0 h-full w-full"
            />
            <div class="relative z-1 text-[1rem] font-[700] text-[#FF0]">
              １ベンダ構築による期間短縮・トータルコスト削減
            </div>
          </div>
        </div>
        <div class="relative mt-[30px] h-[44px] w-full flex justify-end">
          <div
            class="relative h-full w-[655px] flex items-center justify-center"
          >
            <img
              src="@/assets/images/logistics-business/double-arrow-min.svg"
              alt="Arrow Left"
              class="absolute inset-0 h-full w-full"
            />
            <div
              class="relative z-1 flex items-center justify-center text-[1rem] font-[700] text-[#FF0]"
            >
              オフショア活用によるコスト低減・即時性
            </div>
          </div>
        </div>

        <div
          class="text-deep_blue mt-[10px] h-full w-full flex justify-between text-[1rem] font-[400]"
        >
          <div
            v-for="(item, index) in ManagementData"
            :key="index"
            :style="{ width: item.width }"
            class="h-full"
          >
            <div
              :style="{
                borderColor: item.borderColor,
                backgroundColor: item.color
              }"
              class="items-strat h-[63px] flex flex-col justify-center border-2 rounded-[5px] border-solid px-[20px] font-[700]"
            >
              {{ item.title }}<br />
              <p class="text-[12px]">{{ item.title_2 }}</p>
            </div>
            <div
              :style="{
                borderColor: item.borderColor
              }"
              class="mt-[10px] h-[312px] border-2 rounded-[5px] border-solid bg-[#fff] p-[10px]"
            >
              <TheIconList
                v-for="(items, i) in item.content"
                :key="i"
                class="text-[.875rem] leading-[2rem] font-[400]"
                >{{ items.list }}</TheIconList
              >
            </div>
          </div>
        </div>

        <div
          class="text-deep_blue mt-[15px] w-full bg-white py-[2px] text-center text-[1rem] leading-normal font-[400]"
        >
          ゴールを共有し、お客さまとのパートナーシップを大切にプロジェクトを遂行いたします
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

import { ManagementType } from '../types/index'

const ManagementData = ref<ManagementType[]>([
  {
    title: 'グランドデザイン',
    color: '#FCE9D9',
    borderColor: '#FC9742',
    width: '325px',
    content: [
      { list: '事業戦略の確認・検討' },
      { list: '業務、システム確認、課題抽出(AsIs)' },
      { list: '新業務、システム構想策定(ToBe)' },
      { list: 'vTradExドキュメント標準確認' },
      { list: 'vTradExの適用範囲の設定' },
      { list: 'システム方針策定' },
      { list: '投資効果' },
      { list: '業務、システム移行計画策定' }
    ]
  },
  {
    title: '設計・構築',
    title_2: '要件定義/基本設計/開発・単体/結合/システムテスト',
    color: '#E1FAE9',
    borderColor: '#59AE76',
    width: '470px',
    content: [
      { list: '要件定義' },
      { list: 'Fit＆Gap' },
      { list: 'パラメータ定義、アプリ・システムセットアップ' },
      {
        list: 'コンフィグ定義（ユーザ権限、ルールエンジン、ワークフローエンジン）'
      },
      { list: 'アドオン設計、開発、テスト' },
      { list: 'キーユーザトレーニング' },
      { list: 'マテハンベンダコントロール' },
      { list: 'vTradEx＋マテハンベンダ含めた運用テスト' }
    ]
  },
  {
    title: '保守・運用サービス',
    color: '#D9F1FA',
    width: '325px',
    borderColor: '#289DC7',
    content: [
      { list: '24H365対応可能、オフショア活用可能' },
      { list: '製品保守' },
      { list: 'VerUp対応、パッチ適用' },
      { list: '運用支援対応（倉庫オペレーションQA対応）' },
      { list: '機能改修、要望対応' },
      { list: '最先端の事例等フィードバック' }
    ]
  }
])

const TMS = ref<boolean>(false)
const WMS = ref<boolean>(false)
const BMS = ref<boolean>(false)
const ROS = ref<boolean>(false)
const EHUB = ref<boolean>(false)
const Cloud = ref<boolean>(false)
const WES = ref<boolean>(false)
const OMS = ref<boolean>(false)
</script>
<style lang=""></style>
