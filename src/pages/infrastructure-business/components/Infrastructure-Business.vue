<template>
  <div
    class="font-NotoSansJP"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="text-deep_blue text-[1rem] leading-[2rem] font-[400]">
      <p>
        当社のインフラ事業では、信頼性の高いITインフラストラクチャーソリューションを提供し、お客様のビジネスの成長と成功をサポートいたします。
      </p>
      <p class="mt-[1.5rem] text-[1.25rem] font-[700]">
        以下は、当社の主なインフラ事業内容の概要です。
      </p>
    </div>
    <div class="mt-[120px]">
      <div
        v-for="(item, index) in InfrastructureBusinessData"
        :key="index"
        :class="index === 0 ? '' : 'mt-[120px]'"
        class="flex justify-between"
      >
        <div
          class="w-[calc(50%-15px)] flex flex-col justify-between py-[30px]"
          :class="index % 2 === 0 ? 'order-0' : 'order-1'"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        >
          <div
            class="flex"
            :class="index % 2 === 0 ? 'justify-end' : 'justify-start'"
          >
            <ThePageMinTitle class="text-[20px] font-[700]">
              {{ item.title }}
            </ThePageMinTitle>
          </div>
          <div class="text-deep_blue text-[1rem] leading-[2rem] font-[400]">
            {{ item.content }}
          </div>
        </div>
        <div
          class="w-[calc(50%-15px)] overflow-hidden"
          :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'"
        >
          <img
            class="transition-all duration-800 ease-in-out hover:transform-scale-[1.2] hover:duration-800"
            :src="item.Image"
            alt=""
          />
        </div>
      </div>
    </div>
    <div
      class="text-deep_blue mt-[120px] text-[1rem] leading-[2rem] font-[400]"
    >
      <p>
        当社は常に最新のテクノロジーと専門知識を活用し、お客様のビジネスに最適なインフラストラクチャーソリューションを提供することをお約束いたします。
      </p>
      <p class="mt-[2.25rem]">
        お客様の成長と成功に貢献するために、真摯な姿勢でサービスを提供いたします。
      </p>
      <p class="mt-[2.25rem] text-[1.25rem] leading-none font-[700]">
        どうぞお気軽にお問い合わせください。
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { InfrastructureBusinessType } from '../types/index'

import InfrastructureBusiness1 from '@/assets/images/infrastructure-business/Infrastructure_Business_1.png'
import InfrastructureBusiness2 from '@/assets/images/infrastructure-business/Infrastructure_Business_2.png'
import InfrastructureBusiness3 from '@/assets/images/infrastructure-business/Infrastructure_Business_3.png'
import InfrastructureBusiness4 from '@/assets/images/infrastructure-business/Infrastructure_Business_4.png'
import InfrastructureBusiness5 from '@/assets/images/infrastructure-business/Infrastructure_Business_5.png'
import InfrastructureBusiness6 from '@/assets/images/infrastructure-business/Infrastructure_Business_6.png'

const InfrastructureBusinessData = ref<InfrastructureBusinessType[]>([
  {
    Image: InfrastructureBusiness1,
    title: 'クラウドサービスの導入と管理:',
    content:
      'クラウドコンピューティングの普及により、お客様のビジネスの柔軟性と効率性が向上します。当社では、お客様のニーズに合わせた適切なクラウドサービスの導入と管理を提供し、セキュリティの確保と最適なコスト削減を実現します。'
  },
  {
    Image: InfrastructureBusiness2,
    title: 'ネットワークインフラストラクチャーの構築:',
    content:
      'ネットワークは現代のビジネスにおいて不可欠な役割を果たしています。当社では、高性能で安全なネットワークインフラストラクチャーを設計・構築し、スケーラビリティと可用性に優れたネットワーク環境を提供します。'
  },
  {
    Image: InfrastructureBusiness3,
    title: 'セキュリティ対策:',
    content:
      'データの漏洩やサイバー攻撃は深刻な問題となっています。当社では、最新のセキュリティ対策を実施し、お客様の貴重な情報を保護します。ファイアウォールの設置、侵入検知システムの導入、セキュリティポリシーの策定など、包括的なセキュリティ対策を提供いたします。'
  },
  {
    Image: InfrastructureBusiness4,
    title: 'データストレージとバックアップ:',
    content:
      'ビジネスにおいて重要なデータを確実に保管し、定期的かつ効果的なバックアップを行うことは非常に重要です。当社は高性能かつ安全なデータストレージソリューションを提供し、データの損失やシステム障害からお客様のデータを守ります。'
  },
  {
    Image: InfrastructureBusiness5,
    title: '仮想化技術:',
    content:
      '仮想化技術は、ハードウェアリソースの最適活用やシステム管理の効率化を可能にします。当社では仮想化技術の導入と管理を行い、お客様のITインフラストラクチャーの最適化と運用コストの削減をサポートいたします。'
  },
  {
    Image: InfrastructureBusiness6,
    title: 'サポートと保守:',
    content:
      '当社のインフラ事業では、導入後もお客様のITシステムの安定稼働と継続的なサポートを提供します。障害対応、定期的なメンテナンス、システムアップデートなど、お客様のビジネスを円滑に運営するためのサポートを行います。'
  }
])
</script>
<style lang=""></style>
