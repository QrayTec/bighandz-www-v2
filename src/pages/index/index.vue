<template>
  <div class="index-page relative">
    <div class="index-bg">
      <div class="h-screen w-screen">
        <img
          v-if="MAIN_CONTENT_WIDTH < 1200"
          ref="image"
          class="h-full w-full object-cover"
          src="@/assets/images/video.png"
          alt=""
        />
        <video
          v-if="MAIN_CONTENT_WIDTH == 1200"
          v-show="!Loading"
          ref="video"
          class="h-screen w-screen object-cover"
          :src="videoFile"
          autoplay
          loop
          muted
        ></video>
      </div>
    </div>

    <main>
      <div class="index_main flex flex-col items-center justify-center">
        <First />
        <Business />
        <BusinessCompanies v-if="MAIN_CONTENT_WIDTH < 1200" />
        <BusinessCompanies2 v-if="MAIN_CONTENT_WIDTH === 1200" />
      </div>
    </main>
    <TheBackTop />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import First from './components/First.vue'
import Business from './components/Business.vue'
import BusinessCompanies2 from './components/Business-Companies2.vue'
import BusinessCompanies from './components/Business-Companies.vue'
import videoFile from '@/assets/video/main_video.mp4'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

const video = ref<HTMLVideoElement>()
const image = ref<HTMLImageElement>()
const Loading = ref<boolean>(true)
onMounted(() => {
  watchEffect(() => {
    const videoElement = video.value
    const imageElement = image.value

    if (videoElement) {
      videoElement.addEventListener('loadedmetadata', () => {
        // 在事件回调中检查 readyState
        if (videoElement.readyState === 1) {
          // 视频加载完成
          Loading.value = false
        }
      })
    }
    if (imageElement) {
      Loading.value = false
    }
  })
})

defineOptions({
  name: 'IndexPage'
})
</script>
<style scoped>
.index-page {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.index-bg {
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: -1; /* 将z-index调整为较低值，使其在index_main的下面 */
  position: fixed;
  fill: url(<path-to-image>), lightgray 50% / cover no-repeat;
  background-blend-mode: luminosity;
}
.Header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
}
.index_main {
  width: 100%;
  height: auto;
  background-color: transparent;
}
</style>
