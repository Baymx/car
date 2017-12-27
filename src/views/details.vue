<template>
<div>
  <header>
    <i class="iconfont icon-color icon-size">&#xe50b;</i>
    <ul>
      <li v-for="(item,index) in detailsList" :class="{clickActive:isActive == index}" @click="tabClick(index)">{{item}}</li>
    </ul>
    <span>
    <i class="iconfont icon-color icon-size ">&#xe606;</i>
    <i class="iconfont icon-color icon-size">&#xe62b;</i>
  </span>
  </header>
  <div class="main">
    <div class="box">
      <img src="../assets/img/logo.png" alt="">
      <mt-swipe :auto="4000" class="swipe-box">
        <mt-swipe-item ><img class="swipe-pic" src="../assets/img/1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item ><img class="swipe-pic"src="../assets/img/2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item ><img class="swipe-pic" src="../assets/img/3.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
      <div class="sub-Title sub-right">
        <span>双12爆款</span>
        <div class="sub-Title-En">人气车款</div>
      </div>
    </div>

    <vehicle></vehicle>
  </div>
  <footer>
    <div class="footer-box">
      <i class="iconfont icon-color">&#xe639;</i>
      <span>店铺</span>
    </div>
    <div class="footer-box">
      <i class="iconfont icon-color">&#xe607;</i>
      <span>客服</span>
    </div>
    <div class="footer-box">
      <i class="iconfont icon-color">&#xe6a8;</i>
      <span>收藏</span>
    </div>
    <div class="addCar">加入购物车</div>
    <div class="buy">前往购买</div>
  </footer>
</div>
</template>

<script>
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui'
  import vehicle from '@/components/vehicle'

  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
    export default {
      name: 'details',
      data () {
        return {
          detailsList: ['概要', '配置', '详情'],
          isActive: 0
        }
      },
      components: {
        vehicle
      },
      methods: {
        tabClick (i) {
          this.isActive = i
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  header{
    background:#414042;
    width:365px;
    height:44px;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header ul {
    list-style: none;
    width: 240px;
    display: flex;
    justify-content: space-around;
  }
  header ul li{
    width:80px;
    height:36px;
    font-family:NotoSansCJKsc-DemiLight;
    font-size:14px;
    color:#ffffff;
    letter-spacing:0;
    text-align:center;
    line-height: 36px;
  }
  header span {
    width: 50px;
    display: flex;
    justify-content: space-between;
  }
  .icon-color{
    color: #F2A72A;
  }
  .icon-size{
    font-size: 18px;
  }
  .clickActive{
    height: 40px;
    -webkit-transform:skew(-25deg);
    -moz-transform:skew(-25deg);
    -o-transform:skew(-25deg);
    -ms-transform:skew(-25deg);
    transform:skew(-25deg);
    background:#F2A72A;
  }
  .box{
    position: relative;
  }
  .sub-Title{
    height: 24px;
    width: 150px;
    -webkit-transform:skew(-25deg);
    -moz-transform:skew(-25deg);
    -o-transform:skew(-25deg);
    -ms-transform:skew(-25deg);
    transform:skew(-25deg);
    background:#e74c3c;
    display: flex;
    justify-content: space-between;
    line-height: 24px;
    font-family:Louis-Regular;
    font-size:12px;
    color:#ffffff;
    letter-spacing:-0.19px;
    text-align:center;
  }
  .sub-Title span{
    height: 24px;
    width: 75px;
  }
  .sub-Title-En{
    height: 24px;
    width: 74px;
    background: #f4bc01;
  }
  .sub-right{
    position: absolute;
    z-index: 10;
    right: 10px;
    top:0px;
  }
  .swipe-box{
    height: 200px;
    width: 375px;
  }
  .swipe-pic{
    margin-top: 33px;
    height: 132px;
    width: 262px;
  }

  footer{
    height: 64px;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    border: 1px #eeeeee solid;
    z-index: 15;
    background: #ffffff;
  }
  .footer-box{
    height: 64px;
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family:PingFangSC-Medium;
    font-size:10px;
    color:#3c3c3c;
    letter-spacing:0;
    border-left: 1px #eee solid ;
    padding: 5px;
    box-sizing: border-box;
  }
  .footer-box i{
    font-size: 25px;
  }
  .addCar{
    background:#e79f00;
    width:110px;
    height:64px;
    line-height: 64px;
    font-family:PingFangSC-Semibold;
    font-size:12px;
    color:#ffffff;
    letter-spacing:0;
  }
  .buy{
    width: 100px;
    height:64px;
    line-height: 64px;
    background: #F2A72A;
    color: #ffffff;
    font-family:PingFangSC-Semibold;
    font-size:12px;
    color:#ffffff;
    letter-spacing:0;
  }
</style>
