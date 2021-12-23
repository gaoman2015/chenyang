<template>
  <div class="container">
     <div class="header">
       <div class="left">
         <span class="logo">CYJX</span>
         <span>河北宸洋机械零部件有限公司</span>
        </div>
       <div class="center">我们拥有先进的车床设备，高素质的技术工人，专注各种精密零部件的加工</div>
       <div class="right"></div>
      </div>
      <div class="aside">
        <div class="aside-left">
          <div class="our-machine">我们的设备</div>
          <div class="our-machine-item">立式加工中心</div>
          <div class="our-machine-item">车铣中心</div>
          <div class="our-machine-item">斜轨车床</div>
          <div class="our-product">我们的产品</div>
          <div class="our-product-item">螺丝帽</div>
          <div class="our-product-item">车部件</div>
          <div class="our-product-item">螺旋钉</div>
        </div>
        <div class="aside-right">
          <div class="machine-title">设备</div>
          <div class="machine-body">
             <div>
              <img src="../assets/machine1.png">
            </div>
            <div>
              <img src="../assets/machine1.png">
            </div>
            <div>
              <img src="../assets/machine1.png">
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {}
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: #f2f2f2;
}
.header {
  background-color: #46aade;
  height: 80px;
  padding: 10px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.left {
  font-size: 26px;
  color: #fff;
  font-weight: 700;;
}
.logo {
  background-color: #000;
  background-image: url('../assets/jx.png');
  background-repeat: no-repeat;
  background-origin: content-box;
  background-position: center;
  width: 20px;
  height: 20px;
  font-weight: 700;
  padding: 10px;
  border-radius: 10px;
}
.center {
  font-weight: 600;
  font-size: 16px;
}
.aside {
  padding: 20px 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.aside-left {
  width: 300px;
  height: 500px;
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
.aside-right {
  width: 100%;
  margin-left: 50px;
  background: #fff;
}
img {
  width: 30%;
  height: 400px;
}
.machine-title {
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  padding: 15px 0 15px 50px;
  position: relative;
}
.machine-title::after {
  position: absolute;
  left: 3px;
  width: 90%;
  height: 2px;
  content: "";
  background: #ddd;
  top: 50px;
}
</style>
