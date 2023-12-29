<template>
  <div
    class="font-NotoSansJP fixed left-[0px] top-[0px] z-9 h-auto w-full overflow-auto text-white"
  >
    <div
      :class="HeaderInfoFlag ? 'h-screen' : 'h-[70px]'"
      class="relative w-full"
    >
      <div
        class="bg-deep_blue fixed z-9 w-full flex items-center justify-center"
      >
        <div :style="{ width: MAIN_CONTENT_WIDTH + 'px' }">
          <div
            class="z-9 h-[70px] w-full flex items-center justify-between px-[15px]"
          >
            <router-link to="/">
              <img
                src="@/assets/images/Header-Mobile/logo.svg"
                alt="logo"
              />
            </router-link>
            <div @click="HeaderInfoFlag = !HeaderInfoFlag">
              <img
                src="@/assets/images/Header-Mobile/MenuButton.svg"
                alt="menu button"
              />
            </div>
          </div>
        </div>
      </div>
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <div
          v-show="HeaderInfoFlag"
          class="bg-cobalt_blue absolute left-0 top-[70px] z-8 min-h-[calc(100vh-70px)] w-full pb-[60px]"
          style="overflow-y: auto"
        >
          <div
            v-for="(item, index) in HeaderMobileInfo"
            :key="index"
            class="flex flex-col items-center justify-center"
          >
            <div
              class="h-[64px] w-full flex flex-col items-center justify-center border-b border-t border-[#6785C1] border-solid"
            >
              <div
                :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
                class="flex items-center justify-between px-[15px]"
              >
                <div>
                  <div class="text-[1.25rem] leading-normal font-[700]">
                    <div
                      v-if="index == 2 || index == 1"
                      @click="ShowInfo(index)"
                    >
                      {{ item.title }}
                    </div>
                    <router-link
                      v-if="index !== 2 && index !== 1"
                      :to="item.href"
                      @click="
                        item.href !== ''
                          ? (HeaderInfoFlag = !HeaderInfoFlag)
                          : (HeaderInfoFlag = HeaderInfoFlag)
                      "
                      >{{ item.title }}</router-link
                    >
                  </div>
                </div>
                <div
                  v-if="item.InfoFlag !== undefined"
                  class="relative max-h-[20px] max-w-[20px] min-h-[20px] min-w-[20px]"
                  @click="ShowInfo(index)"
                >
                  <div
                    class="absolute top-[50%] h-[2px] w-[20px] translate-y-[-50%] bg-white"
                  ></div>
                  <div
                    :class="item.InfoFlag ? 'rotate-[90deg]' : ' rotate-[0deg]'"
                    class="absolute left-[50%] h-[20px] w-[2px] translate-x-[-50%] bg-white transition-all duration-800"
                  ></div>
                </div>
              </div>
            </div>

            <div
              v-show="item.InfoFlag"
              class="w-full flex flex-col items-center justify-center"
            >
              <div
                v-for="(content, i) in item.contentinfo"
                :key="i"
                :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
                class="h-[64px] flex flex-col justify-center px-[30px] text-[1rem] font-[700]"
              >
                <router-link
                  :to="content.href"
                  @click="HeaderInfoFlag = !HeaderInfoFlag"
                >
                  {{ content.list }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

interface HeaderInfoList {
  list: string
  href: string
}
interface HeaderInfoType {
  title: string
  href: string
  InfoFlag?: boolean
  contentinfo?: HeaderInfoList[]
}

const HeaderInfoFlag = ref<boolean>(false)

const HeaderMobileInfo = ref<HeaderInfoType[]>([
  { title: 'ホーム', href: '/' },
  {
    title: '企業情報',
    href: '',
    InfoFlag: false,
    contentinfo: [
      {
        list: '企業理念経営方針',
        href: '/corporate-philosophy-management-policy'
      },
      { list: '社長挨拶', href: '/message-from-president' },
      { list: '会社概要', href: '/company-profile' },
      { list: '関連会社', href: '/associated-company' }
    ]
  },
  {
    title: '事業概要',
    href: '',
    InfoFlag: false,
    contentinfo: [
      { list: 'SIサービス事業', href: '/si-service-business' },
      { list: 'データソリューション', href: '/data-solution' },
      { list: 'インフラ事業', href: '/infrastructure-business' },
      { list: 'ヘルスケア事業', href: '/healthcare-business' },
      { list: '物流事業', href: '/logistics-business' }
    ]
  },
  {
    title: '採用情報',
    href: '/adoption-Intelligence',
    InfoFlag: false,
    contentinfo: [
      { list: '新卒採用', href: '/graduate-recruitment' },
      { list: 'キャリア採用', href: '/social-recruitment' },
      { list: '採用の流れ', href: '/recruitment-process' },
      { list: 'FAQよくあるご質問', href: '/FAQ' }
    ]
  },
  { title: 'アクセス', href: '/map' }
])

function ShowInfo(index: number) {
  HeaderMobileInfo.value[index].InfoFlag =
    !HeaderMobileInfo.value[index].InfoFlag
}
</script>
