<template>
  <div class="index_Business">
    <div class="Business_Content">
      <div class="Business_Content_Title">主な業務</div>
      <div class="Business_Content_Items">
        <div class="Business_Items_vertical Business_bg Business_bg_1">
          <div class="Business_Items_Hover"></div>
          <div class="Business_Items_1">
            <img
              src="/src/assets/images/index_Business/title_icon_1.svg"
              alt=""
            />
            <div class="Business_Items_title">Siサービス事業</div>
          </div>
          <div class="Business_Items_content_Hover">
            <div class="Business_Items_content">
              主な業務経験は製造、流通関係です。<br />
              製造業、物流サービス、通信のソフトウェア開発を得意分野としております。
            </div>
            <div class="Business_Items_link_Hover">
              <router-link
                class="Business_Items_link"
                to="/"
                >詳細はこちら
                <img
                  src="/src/assets/images/index_Business/link.svg"
                  alt=""
              /></router-link>
            </div>
          </div>
        </div>
        <div class="Business_Items_Main_Box">
          <div class="Business_Items_Box">
            <div class="Business_bg Business_Items_square Business_bg_2">
              <div class="Business_Items_Hover"></div>
              <div class="Business_Items_1">
                <img
                  src="/src/assets/images/index_Business/title_icon_2.svg"
                  alt=""
                />
                <div class="Business_Items_title">インフラ基盤事業</div>
              </div>
              <div class="Business_Items_content_Hover_2">
                <div class="Business_Items_content_2">
                  主な業務経験は製造、流通関係です。<br />
                  製造業、物流サービス、通信のソフトウェア開発を得意分野としております。
                </div>
                <div class="Business_Items_link_Hover_2">
                  <router-link
                    class="Business_Items_link"
                    to="/"
                    >詳細はこちら
                    <img
                      src="/src/assets/images/index_Business/link.svg"
                      alt=""
                  /></router-link>
                </div>
              </div>
            </div>
            <div class="Business_bg Business_Items_horizontal Business_bg_3">
              <div class="Business_Items_Hover"></div>
              <div class="Business_Items_1">
                <img
                  src="/src/assets/images/index_Business/title_icon_3.svg"
                  alt=""
                />
                <div class="Business_Items_title">インフラ事業</div>
              </div>
              <div class="Business_Items_content_Hover">
                <div class="Business_Items_content">
                  主な業務経験は製造、流通関係です。<br />
                  製造業、物流サービス、通信のソフトウェア開発を得意分野としております。
                </div>
                <div class="Business_Items_link_Hover">
                  <router-link
                    class="Business_Items_link"
                    to="/"
                    >詳細はこちら
                    <img
                      src="/src/assets/images/index_Business/link.svg"
                      alt=""
                  /></router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="Business_Items_Box m-top-20">
            <div class="Business_Items_horizontal Business_bg Business_bg_4">
              <div class="Business_Items_Hover"></div>
              <div class="Business_Items_1">
                <img
                  src="/src/assets/images/index_Business/title_icon_4.svg"
                  alt=""
                />
                <div class="Business_Items_title">ヘルスケア事業</div>
              </div>
              <div class="Business_Items_content_Hover">
                <div class="Business_Items_content">
                  主な業務経験は製造、流通関係です。<br />
                  製造業、物流サービス、通信のソフトウェア開発を得意分野としております。
                </div>
                <div class="Business_Items_link_Hover">
                  <router-link
                    class="Business_Items_link"
                    to="/healthcare-business"
                    >詳細はこちら
                    <img
                      src="/src/assets/images/index_Business/link.svg"
                      alt=""
                  /></router-link>
                </div>
              </div>
            </div>

            <div class="Business_Items_square Business_bg Business_bg_5">
              <div
                class="Business_Items_Hover"
                style="opacity: 0.5"
              ></div>
              <div class="Business_Items_1">
                <img
                  src="/src/assets/images/index_Business/title_icon_5.svg"
                  alt=""
                />
                <div class="Business_Items_title">物流事業</div>
              </div>
              <div class="Business_Items_content_Hover_2">
                <div class="Business_Items_content_2">
                  主な業務経験は製造、流通関係です。<br />
                  製造業、物流サービス、通信のソフトウェア開発を得意分野としております。
                </div>
                <div class="Business_Items_link_Hover_2">
                  <router-link
                    class="Business_Items_link"
                    to="/"
                    >詳細はこちら
                    <img
                      src="/src/assets/images/index_Business/link.svg"
                      alt=""
                  /></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.index_Business {
  width: 100%;
  height: 1030px;
  display: flex;
  justify-content: center;
  background: linear-gradient(0deg, #111f4e 0%, #2e4a9e 100%);
}
.Business_Content {
  width: 1200px;
}
.Business_Content_Title {
  width: 144px;
  height: 54px;
  color: #fff;
  margin-top: 120px;
  /* 正文一级标题medium */
  font-family: Noto Sans JP;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 54px; /* 150% */
}
.Business_Content_Items {
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
}
.Business_Items_vertical {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 285px;
  height: 600px;
  padding: 0 50px;
  position: relative;
  overflow: hidden;
}
.Business_Items_Box {
  width: 890px;
  height: 290px;
  display: flex;
}
.Business_Items_square {
  width: 300px;
  height: 290px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 50px;
  position: relative;
}
.Business_Items_horizontal {
  width: 590px;
  height: 290px;
  margin-left: 20px;
  padding: 0px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.m-top-20 {
  margin-top: 20px;
}

.Business_Items_1 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 1;
  text-align: center;
}
.Business_Items_title {
  margin-top: 10px;
  width: 100%;
  color: #fff;
  font-family: Noto Sans JP;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
  display: flex;
  align-items: center;
  justify-content: center;
}
.Business_bg {
  background-repeat: no-repeat;
  background-size: cover;
}
.Business_Items_Hover {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #071027;
  opacity: 0;
  transition: opacity 0.3s; /* 添加过渡效果 */
  pointer-events: none; /* 防止遮挡鼠标事件 */
  z-index: 1;
}

.Business_bg_1 {
  background-image: url('/src/assets/images/index_Business/bg-1.png');
}
.Business_bg_2 {
  background-image: url('/src/assets/images/index_Business/bg-2.png');
}
.Business_bg_3 {
  background-image: url('/src/assets/images/index_Business/bg-3.png');
}
.Business_bg_4 {
  background-image: url('/src/assets/images/index_Business/bg-4.png');
}
.Business_bg_5 {
  background-image: url('/src/assets/images/index_Business/bg-5.png');
}
.Business_Items_content_Hover {
  color: #fff;
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
  z-index: 1;
  position: relative;
  display: none;
}
.Business_Items_link_Hover {
  margin-top: 30px;
}
.Business_Items_link {
  width: 120px;
  display: flex;
  justify-content: space-between;
}
.Business_Items_content {
  margin-top: 30px;
  /* 正文段落 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
}
.Business_Items_content_Hover_2 {
  color: #fff;
  margin-top: 15px;
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 200% */
  z-index: 1;
  position: relative;
  display: none;
}
.Business_Items_link_Hover_2 {
  margin-top: 15px;
}
.Business_Items_vertical:hover,
.Business_Items_square:hover,
.Business_Items_horizontal:hover {
  padding: 40px;
  display: block;
  position: relative;
  transition: opacity 0.8s; /* 添加过渡效果 */
}

.Business_Items_vertical:hover .Business_Items_Hover,
.Business_Items_square:hover .Business_Items_Hover,
.Business_Items_horizontal:hover .Business_Items_Hover {
  opacity: 0.8;
  transition: opacity 0.8s; /* 添加透明度过渡 */
}

.Business_Items_vertical:hover .Business_Items_1,
.Business_Items_square:hover .Business_Items_1,
.Business_Items_horizontal:hover .Business_Items_1 {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  text-align: left;
  animation: fadeIn 0.8s ease-in-out;
}

.Business_Items_vertical:hover .Business_Items_title,
.Business_Items_square:hover .Business_Items_title,
.Business_Items_horizontal:hover .Business_Items_title {
  margin-top: 0px;
  margin-left: 10px;
  justify-content: start;
  animation: fadeIn 0.8s ease-in-out;
}

/* 悬停时的通用样式 */
.Business_Items_vertical:hover .Business_Items_content_Hover,
.Business_Items_square:hover .Business_Items_content_Hover,
.Business_Items_horizontal:hover .Business_Items_content_Hover,
.Business_Items_vertical:hover .Business_Items_content_Hover_2,
.Business_Items_square:hover .Business_Items_content_Hover_2,
.Business_Items_horizontal:hover .Business_Items_content_Hover_2 {
  display: block;
  animation: fadeIn 0.8s ease-in-out; /* 使用名为 fadeIn 的动画，持续 2 秒 */
  transition: all 0.8s; /* 添加所有属性的过渡效果 */
}
.Business_Items_vertical:hover img,
.Business_Items_square:hover img,
.Business_Items_horizontal:hover img,
.Business_Items_vertical:hover img,
.Business_Items_square:hover img,
.Business_Items_horizontal:hover img {
  display: block;
  animation: fadeIn 0.8s ease-in-out; /* 使用名为 fadeIn 的动画，持续 2 秒 */
  transition: all 0.8s; /* 添加所有属性的过渡效果 */
}
@keyframes fadeIn {
  from {
    opacity: 0; /* 从完全透明开始 */
  }
  to {
    opacity: 1; /* 渐变到完全不透明 */
  }
}
@media (min-width: 1024px) and (max-width: 1299px) {
  .index_Business {
    height: auto;
  }
  .Business_Content {
    width: 80%;
  }
}

/* 大于等于768px宽度，小于1024px宽度的屏幕 */
@media (min-width: 768px) and (max-width: 1023px) {
  /* 在这里添加你想应用的样式 */
}

/* 小于768px宽度的屏幕 */
@media (max-width: 767px) {
  /* 在这里添加你想应用的样式 */
}
</style>
