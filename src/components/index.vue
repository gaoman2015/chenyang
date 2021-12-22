<template>
  <div class="container">
     <div class="header">
       <div class="left">
         <span class="logo">CYJX</span>
         <span>河北宸洋机械</span>
        </div>
       <div class="center">1111</div>
       <div class="right">22222</div>
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
  height: 120px;
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
</style>
