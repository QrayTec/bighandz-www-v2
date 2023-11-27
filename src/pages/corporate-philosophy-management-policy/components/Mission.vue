<template>
  <div class="Mission">
    <div class="Mission_Box">
      <div class="Mission_Box_main">
        <div class="Mission_text">
          <div class="Realization_title m_top_60">使命</div>
          <div class="Realization_min_text m_top_30 text-[20px]">
            私たちの使命は、顧客に優れた技術ソリューションとサービスを提供し、彼らがビジネス目標を達成し、信頼できるテクノロジーパートナーとなることを支援することです。
          </div>
        </div>
        <div class="Mission_image">
          <img
            src="/src/assets/images/corporate-philosophy-management-policy/pic-Misson.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.Mission {
  margin-top: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 348px;
}
.Mission_Box {
  width: 1920px;
  display: flex;
  justify-self: center;
  position: relative;
}
.Mission_Box_main {
  width: 1200px;
  margin: 0 auto; /* 使容器水平居中 */
  overflow: hidden; /* 清除浮动 */
  display: flex;
}
.Mission_text {
  width: 570px;
  padding-right: 30px;
}
.Mission_image {
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0px;
}
.Mission_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.Realization_title {
  color: #071027;
  /* 正文一级标题加粗 */
  font-family: Noto Sans JP;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.Realization_min_text {
  color: #071027;
  /* 正文一级标题加粗 */
  font-family: Noto Sans JP;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
}
</style>
