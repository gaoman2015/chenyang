<template>
  <div class="container">
     <div class="header">
       <div class="left">
         <div class="logo">
           <img src="../assets/jx.png" class="logo-img">
           <span class="logo-span">CYJX</span>
          </div>
         <span>河北宸洋机械零部件加工有限公司</span>
        </div>
       <div class="center">
         <!-- 我们拥有先进的数控设备，高素质的技术工人，专注各种精密零部件的加工 -->
         <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                 <div class="first-slide">
                    <img src="../assets/slider3.jpg" class="first-slide-img">
                    <div class="first-slide-div">
                      <div style="padding-top: 10px;">我们成立于2018年，服务过一汽解放等知名企业</div>
                      <div style="margin-top: 14px">
                        <span class="tag-first">成立3年+</span>
                        <span class="tag-second">一汽解放</span>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="swiper-slide">
                 <div class="second-slide">
                    <img src="../assets/slider2.jpg" class="second-slide-img">
                    <div class="second-slide-div">
                      <div style="padding-top: 10px;">我们拥有先进的数控设备，高素质的技术工人，专注各种精密零部件的加工</div>
                      <div style="margin-top: 14px">
                        <span class="tag-first">斜轨数控车床</span>
                        <span class="tag-first">车铣复合机床</span>
                        <span class="tag-first">台加工中心</span>
                        <span class="tag-second">10年+经验技术人员</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
       </div>
      </div>
      <div class="aside">
        <div class="aside-left">
          <div class="our-machine">我们的设备</div>
          <div class="our-machine-item">斜轨数控车床</div>
          <div class="our-machine-item">车铣复合机床</div>
          <div class="our-machine-item">立式加工中心</div>
          <div class="our-product">我们的产品</div>
          <div class="our-product-item">旋转轴</div>
          <div class="our-product-item">支架</div>
          <div class="our-product-item">导块</div>
          <div class="our-product-item">互锁板</div>
          <div class="our-product-item">...</div>
          <div class="contact-us">联系我们</div>
          <div class="contact-us-item">联系人：高经理</div>
          <div class="contact-us-item">手机：17366547879</div>
          <div class="contact-us-item">邮箱：cyjx@ssnor.com</div>
          <div class="contact-us-item">地址：河北省保定市博野县杜各庄村</div>
          <div class="yyzz">营业执照</div>
          <div class="yyzz-div">
            <img class="yyzz-img" src="../assets/yyzz.png" preview="1" preview-text="营业执照">
          </div>
        </div>
        <div class="aside-right">
          <!-- <div class="machine-title">设备</div> -->
          <el-menu
            :default-active="activeIndex"
            class="el-menu"
            mode="horizontal"
            @select="handleSelect"
            text-color="#000"
            active-text-color="#0d4975">
            <el-menu-item index="0">设备</el-menu-item>
            <el-menu-item index="1">产品</el-menu-item>
          </el-menu>
          <div class="machine-body">
            <div v-if="activeIndex === '0'">
              <el-row>
                <el-col :span="7">
                  <el-card :body-style="{ padding: '10px' }">
                    <img src="../assets/machine2.png" preview="2" preview-text="斜轨数控车床">
                    <div style="padding: 14px;">
                      <span>斜轨数控车床</span>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-card :body-style="{ padding: '10px' }">
                    <img src="../assets/machine7.png" preview="3" class="image">
                    <div style="padding: 14px;">
                      <span>斜轨数控车床</span>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-card :body-style="{ padding: '10px' }">
                    <img src="../assets/machine9.png" preview="4" preview-text="立式加工中心">
                    <div style="padding: 14px;">
                      <span>斜轨数控车床</span>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <el-row class="machine-body-mt">
                <el-col :span="7">
                  <el-card :body-style="{ padding: '10px' }">
                    <img src="../assets/machine3.png" preview="5" preview-text="立式加工中心">
                    <div style="padding: 14px;">
                      <span>立式加工中心</span>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-card :body-style="{ padding: '10px' }">
                    <img src="../assets/machine6.png" preview="6" preview-text="立式加工中心">
                    <div style="padding: 14px;">
                      <span>立式加工中心</span>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-card :body-style="{ padding: '10px' }">
                    <img src="../assets/machine8.png" preview="7" preview-text="立式加工中心">
                    <div style="padding: 14px;">
                      <span>车铣复合机床</span>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
            <div v-else>
             <el-row>
                <el-col :span="7">
                  <el-card :body-style="{ padding: '10px' }">
                    <img src="../assets/product1.png" preview="8" preview-text="旋转轴">
                    <div style="padding: 14px;">
                      <span>旋转轴</span>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-card :body-style="{ padding: '10px' }">
                    <img src="../assets/product2.png" preview="9" class="image" preview-text="支架">
                    <div style="padding: 14px;">
                      <span>支架</span>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-card :body-style="{ padding: '10px' }">
                    <img src="../assets/product3.png" preview="10" preview-text="导块">
                    <div style="padding: 14px;">
                      <span>导块</span>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <el-row class="machine-body-mt">
                <el-col :span="7">
                  <el-card :body-style="{ padding: '10px' }">
                    <img src="../assets/product4.png" preview="11" preview-text="导块">
                    <div style="padding: 14px;">
                      <span>导块</span>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-card :body-style="{ padding: '10px' }">
                    <img src="../assets/product5.png" preview="12" preview-text="导块">
                    <div style="padding: 14px;">
                      <span>导块</span>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-card :body-style="{ padding: '10px' }">
                    <img src="../assets/product6.png" preview="13" preview-text="互锁板">
                    <div style="padding: 14px;">
                      <span>互锁板</span>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        Copyright © 2022 北京宸洋机械零部件加工有限公司. All Rights Reserved
      </div>
  </div>
</template>
<script>
/* eslint-disable */
import Swiper from 'swiper'
import SwiperCore, { Autoplay, FreeMode, Scrollbar, Mousewheel } from 'swiper'
SwiperCore.use([Autoplay, FreeMode, Scrollbar, Mousewheel])

export default {
  name: 'Index',
  data () {
    return {
      activeIndex: '0'
    }
  },
  methods: {
    handleSelect (key) {
      this.activeIndex = key
    }
  },
  mounted () {
    const a = new Swiper('.swiper', {
      direction: 'horizontal',
      autoplay: {
        delay: 3000,
        loop: true
      },
      observeParents: false,
      observer: true
    })
    console.log(a)
  }
}
</script>
<style>
.container {
  background-color: #f2f2f2;
}
.header {
  background-color: #46aade;
  height: 80px;
  padding: 10px 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.left {
  font-size: 26px;
  color: #fff;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.logo {
  width: 80px;
  height: 40px;
  position: relative;
  right: 5px;
}
.logo-img {
  width: 80px;
  height: 40px;
  border-radius: 10px;
}
.logo-span {
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
}
.center {
  font-weight: 600;
  font-size: 16px;
  width: 50%;
  margin-left: 100px;
}
.aside {
  padding: 20px 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.aside-left {
  width: 320px;
}
.our-machine {
  width: 100%;
  height: 40px;
  background: #0d4975;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 40px;
  padding: 8px 0;
}
.our-machine-item {
  width: 100%;
  height: 30px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 5px;
  color: gray;
  font-size: 14px;
  line-height: 30px;
  padding: 8px 0;
  margin-top: 5px;
}
.our-product {
  margin-top: 10px;
  width: 100%;
  height: 40px;
  background: #0d4975;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 40px;
  padding: 8px 0;
}
.our-product-item {
  width: 100%;
  height: 30px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 5px;
  color: gray;
  font-size: 14px;
  line-height: 30px;
  padding: 8px 0;
  margin-top: 5px;
}
.contact-us {
  margin-top: 10px;
  width: 100%;
  height: 40px;
  background: #0d4975;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 40px;
  padding: 8px 0;
}
.contact-us-item {
   width: 100%;
  height: 30px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 5px;
  color: gray;
  font-size: 14px;
  line-height: 30px;
  padding: 8px 0;
  margin-top: 5px;

}
.yyzz {
  margin-top: 10px;
  width: 100%;
  height: 40px;
  background: #0d4975;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 40px;
  padding: 8px 0;
}
.yyzz-div {
  border: 1px solid #b4b4b4;
  margin-top: 10px;
  height: 180px;
}
.yyzz-img {
  width: 220px;
  height: 160px;
  margin-top: 10px;
}
.aside-right {
  width: 100%;
  margin-left: 50px;
  padding: 15px 50px 8px;
  background: #fff;
}
img {
  width: 95%;
  height: 390px;
  cursor: pointer;
}
.machine-title {
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  height: 40px;
  position: relative;
  border-bottom: 1px solid #b4b4b4;
}
.machine-title::after {
  position: absolute;
  left: -25px;
  width: 100px;
  height: 3px;
  content: "";
  background: #000;
  top: 39px;
}
.el-menu {
  font-size: 20px;
  font-weight: 600;
}
.el-menu-item {
  font-size: 18px;
}
.is-active {
  font-size: 22px;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 3px solid #409EFF;
}
.machine-body {
  margin-top: 30px;
}
.machine-body-mt {
  margin-top: 20px;
}
.swiper {
  width: 100%;
  height: 90px;
}
.first-slide {
  /* background-image: url('../assets/slider3.jpg');
  background-repeat: no-repeat;
  background-size: cover; */
  height: 90px;
  border-radius: 5px;
  color: #0d4975;
  font-size: 16px;
}
.first-slide-img {
  height: 90px;
  width: 100%;
  border-radius: 10px;
}
.first-slide-div {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
.second-slide {
  /* background-image: url('../assets/slider2.jpg');
  background-repeat: no-repeat;
  background-size: cover; */
  height: 90px;
  border-radius: 5px;
  color: #0d4975;
  font-size: 16px;
}
.second-slide-img {
  height: 90px;
  width: 100%;
  border-radius: 10px;
}
.second-slide-div {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
.tag-first {
  background: #ffa50036;
  border-radius: 5px;
  padding: 8px 5px;
  font-size: 20px;
  margin-right: 10px;
}
.tag-second {
  background: #ffa50036;
  border-radius: 5px;
  padding: 8px 5px;
  font-size: 20px;
  margin-left: 10px;
}
.footer {
  height: 60px;
  line-height: 60px;
  margin: 20px 0 0;
  background-color:#46aade;
  font-size: 16px;
  color: #fff;
  font-weight: 700px;
}
</style>
