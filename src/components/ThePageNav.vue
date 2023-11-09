<template>
  <div class="page_nav">
    <div
      v-if="StyleType.type === 2"
      class="occupy_nav"
    ></div>
    <div
      :class="StyleType.type === 2 ? 'page_nav_main_type_2' : 'page_nav_main'"
    >
      <a
        v-for="item in PageNavData"
        :key="item.id"
        v-smooth-scroll="{
          duration: 1000,
          offset: -250
        }"
        class="page_nav_main_link"
        :class="{ m_l_60: item.id != 1 }"
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
import { PageNavType, PageNavStyleType } from '@/data/pages_interface'

const props = defineProps<{
  pagenavdata: PageNavType
  pagenavstyletype: PageNavStyleType
}>()

const PageNavData = ref(props.pagenavdata)
const StyleType = ref(props.pagenavstyletype)
</script>

<style scoped>
.page_nav {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #0e1b47;
}
.occupy_nav {
  width: 504px;
  height: 100%;
  background: var(---, #dfe4f2);
}
.page_nav_main {
  width: 1200px;
  display: flex;
  align-items: center;
  color: #fff;
}
.page_nav_main_type_2 {
  width: calc(100% - 504px);
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0px 60px;
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
