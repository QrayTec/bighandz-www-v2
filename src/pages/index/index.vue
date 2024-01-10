<template>
  <div class="index-page relative">
    <div class="index-bg">
      <div class="h-screen w-screen">
        <video
          v-if="MAIN_CONTENT_WIDTH == 1200"
          ref="video"
          class="h-screen w-screen object-cover"
          autoplay
          loop
          muted
          playsinline
        >
          <source src="https://myweb-aboutme.vercel.app/main_video.mp4" />
          <!-- <source src="/main_video.mp4" /> -->
        </video>
        <!-- <div
          v-if="MAIN_CONTENT_WIDTH == 1200"
          class="video-container"
        >
          <div class="video-foreground">
            <iframe
              class="h-screen w-screen object-cover"
              src="https://www.youtube.com/embed/7yTtd981dZI?autoplay=1&mute=1&controls=0&playsinline=0&version=3&loop=1&playlist=7yTtd981dZI&rel=0"
              frameborder="0"
              allowfullscreen
              allow="autoplay"
            ></iframe>
          </div>
        </div> -->

        <img
          v-else
          class="h-full w-full object-cover"
          src="@/assets/images/pic_banner.png"
        />
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
import First from './components/First.vue'
import Business from './components/Business.vue'
import BusinessCompanies2 from './components/Business-Companies2.vue'
import BusinessCompanies from './components/Business-Companies.vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

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
.video-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-container iframe {
  pointer-events: none;
}
.video-container iframe {
  position: absolute;
  top: -60px;
  left: 0;
  width: 100vw;
  height: calc(100% + 100px);
}
.video-foreground {
  pointer-events: none;
}
</style>
