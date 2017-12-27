<template>
  <div class="veicle">
    <p class="title"><b>车型特点</b></p>
    <dl class="pic-text">
      <div class="sub-Title sub-right">
        <span>设计</span>
        <div class="sub-Title-En">Design</div>
      </div>
      <dt><img src="../assets/img/1.png" alt=""></dt>
      <dd>
        <div class="text-title">
          <img class="title-png-left"src="../assets/img/line.png"/>
          <h2>传承82年SUV灵魂，彰显美式力量</h2>
        </div>
        <div class="text-list">
          <ul>
            <li>标志性雪弗兰双格栅设计</li>
            <li>鹰眼式全自动LED大灯</li>
            <li>鹰翼式LED日间行车灯</li>
          </ul>
          <ul>
            <li>鹰羽型LED尾灯</li>
            <li>标志性飞翼式双座舱设计</li>
            <li>车顶75%超大全景天窗</li>
          </ul>
        </div>
      </dd>
    </dl>
    <dl class="pic-text">
      <div class="sub-Title sub-left">
        <span>空间</span>
        <div class="sub-Title-En">Space</div>
      </div>
      <dt><img src="../assets/img/2.png" alt=""></dt>
      <dd>
        <div class="text-title">
          <h2>2725mm 轴距同级领先的车内乘坐空间</h2>
          <img class =" title-png-right" src="../assets/img/line.png"/>
        </div>
        <div class="text-list">
          <ul>
            <li>标志性雪弗兰双格栅设计</li>
            <li>鹰眼式全自动LED大灯</li>
            <li>鹰翼式LED日间行车灯</li>
          </ul>
          <ul>
            <li>鹰羽型LED尾灯</li>
            <li>标志性飞翼式双座舱设计</li>
            <li>车顶75%超大全景天窗</li>
          </ul>
        </div>
      </dd>
    </dl>
    <dl class="pic-text">
      <div class="sub-Title sub-right">
        <span>驾控</span>
        <div class="sub-Title-En">Control</div>
      </div>
      <dt><img src="../assets/img/3.png" alt=""></dt>
      <dd>
        <div class="text-title">
          <img class="title-png-left"src="../assets/img/line.png"/>
          <h2>高性能版1.5T顶置直喷涡轮发动机</h2>
        </div>
        <div class="text-list">
          <ul>
            <li>标志性雪弗兰双格栅设计</li>
            <li>鹰眼式全自动LED大灯</li>
            <li>鹰翼式LED日间行车灯</li>
          </ul>
          <ul>
            <li>鹰羽型LED尾灯</li>
            <li>标志性飞翼式双座舱设计</li>
            <li>车顶75%超大全景天窗</li>
          </ul>
        </div>
      </dd>
    </dl>
    <dl class="pic-text">
      <div class="sub-Title sub-left">
        <span>科技</span>
        <div class="sub-Title-En">Technology</div>
      </div>
      <dt><img src="../assets/img/4.png" alt=""></dt>
      <dd>
        <div class="text-title">
          <h2>Apple CarPlay 车载互联系统</h2>
          <img class =" title-png-right" src="../assets/img/line.png"/>
        </div>
        <div class="text-list">
          <ul>
            <li>标志性雪弗兰双格栅设计</li>
            <li>鹰眼式全自动LED大灯</li>
            <li>鹰翼式LED日间行车灯</li>
          </ul>
          <ul>
            <li>鹰羽型LED尾灯</li>
            <li>标志性飞翼式双座舱设计</li>
            <li>车顶75%超大全景天窗</li>
          </ul>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
  export default{
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  font-family:PingFangSC-Medium;
}
.veicle{
  background: #000;
}
.title{
  font-size:12px;
  color:#3c3c3c;
  letter-spacing:0;
  text-align: left;
  margin-left: 15px;
  height: 30px;
  line-height: 30px;
  color: #ffffff;
}
.pic-text{
  position: relative;
  margin-bottom: 65px;
}
.sub-Title{
  height: 32px;
  width: 135px;
  -webkit-transform:skew(-25deg);
  -moz-transform:skew(-25deg);
  -o-transform:skew(-25deg);
  -ms-transform:skew(-25deg);
  transform:skew(-25deg);
  background:#F2A72A;
  display: flex;
  justify-content: space-between;
  line-height: 32px;
  font-family:Louis-Regular;
  font-size:12px;
  color:#ffffff;
  letter-spacing:-0.19px;
  text-align:center;
}
.sub-left{
  position: absolute;
  z-index: 10;
  left: 21px;
  top:-16px;
}
.sub-right{
  position: absolute;
  z-index: 10;
  right: 21px;
  top:-16px;
}
.sub-Title span{
  height: 32px;
  width: 52px;
}
.sub-Title-En{
  height: 32px;
  width: 84px;
  background: #f4bc01;
}
.pic-text dt img{
  width:375px;
  height: 203px;
}
.title-png-left{
  position:absolute;
  left:12px;
  top:194px;
}
.title-png-right{
  position:absolute;
  right:12px;
  top:194px;
}

.text-title h2{
  font-size:16px;
  color:#ffffff;
  letter-spacing:-0.26px;
  text-align: left;
  margin-left: 38px;
}
.text-list{
  display: flex;
  justify-content: space-around;
  padding-left: 38px;
  box-sizing: border-box;
  margin-top: 10px;
}
.text-list ul{
  font-size:11px;
  color:#ffffff;
  letter-spacing:0;
  text-align:left;
}
.text-list ul li{
  margin-bottom: 10px;
}
</style>
