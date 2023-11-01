<template>
  <div class="page_nav">
    <div class="page_nav_main">
      <a
        v-for="item in PageNavData"
        :key="item.id"
        v-smooth-scroll="{
          duration: 1000,
          offset: -330
        }"
        class="page_nav_main_link"
        :href="item.anchor"
        ><div class="page_nav_content">
          <div>{{ item.anchor_title }}</div>
          <div class="page_nav_image">
            <img
              src="/src/assets/images/page_nav.svg"
              alt=""
            />
          </div></div
      ></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface PageNavType {
  id: number
  anchor: string
  anchor_title: string
}

const props = defineProps<{ pagenavdata: PageNavType }>()

const PageNavData = ref(props.pagenavdata)
</script>

<style scoped>
.page_nav {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #0e1b47;
}
.page_nav_main {
  width: 1200px;
  padding: 60px 0px;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: space-between;
}
.page_nav_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-feature-settings: 'clig' off, 'liga' off;
  /* 正文加粗 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.page_nav_image {
  margin-left: 16px;
}
@media screen and (max-width: 1299px) and (min-width: 768px) {
  .page_nav_main {
    width: 80%;
    flex-wrap: wrap;
  }
  .page_nav_main_link {
    margin-top: 60px;
    width: 50%;
  }

  .page_nav_main_link:last-child {
    width: 100%;
  }
  .page_nav_content {
    justify-content: center;
  }
}
@media screen and (max-width: 767px) {
  .page_nav_main {
    width: 80%;
    flex-wrap: wrap;
  }
  .page_nav_main_link {
    margin-top: 60px;
    width: 100%;
  }
}
</style>
