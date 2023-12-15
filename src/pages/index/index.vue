<template>
  <div class="index-page relative">
    <TheLoadng
      v-show="Loading"
      class="fixed left-0 top-0 z-999999 bg-white"
    />
    <div class="index-bg">
      <div class="h-screen w-screen">
        <!-- <img
          ref="image"
          class="h-full w-full"
          src="@/assets/images/video.png"
          alt=""
        /> -->
        <video
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
      <div class="index_main">
        <First />
        <Business />
        <BusinessCompanies2 />
        <!-- <BusinessCompanies />
        <BusinessBall /> -->
        <!-- <Businesscontent /> -->
        <!-- <BusinessEcharts /> -->
        <!-- <Field /> -->
        <!-- <IndexCustomers /> -->
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
// import Businesscontent from './components/Business-content.vue'
// import BusinessEcharts from './components/BusinessEcharts.vue'
// import BusinessCompanies from './components/Business-Companies.vue'
// import BusinessBall from './components/Business-Ball.vue'
import videoFile from '@/assets/video/main_video.mp4'

const video = ref<HTMLVideoElement>()
const Loading = ref<boolean>(true)
onMounted(() => {
  watchEffect(() => {
    const videoElement = video.value
    if (videoElement) {
      videoElement.addEventListener('loadedmetadata', () => {
        // 在事件回调中检查 readyState
        if (videoElement.readyState === 1) {
          // 视频加载完成
          Loading.value = false
        }
      })
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
