/**
 * Created by Jimmy on 2018/6/5.
 */
<template>
  <div>
    <div class="gradient1">
      <div class="store"></div>
      <div class="logo">TYT</div>
      <div class="desc">The most powerful infrastructure for</div>
      <div class="desc desc2">decentralized applications</div>
      <div class="btns">
        <div class="btn">ANNOUNCEMENTS</div>
        <div class="btn">WHITE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PAPER</div>
      </div>
    </div>
    <div class="gradient2">
      <div class="module">FEATURES</div>
      <div class="title">Why Choose Us</div>
    </div>
    <div class="activity">
      <div class="module">ACTIVITY</div>
      <div class="title">In Progress</div>
      <div class="act-content">
        <div class="act-item">
          <div class="item-title">TYT Token Distribution</div>
          <div class="item-title subtitle">TYT - ETH(Stage No.1)</div>
          <div class="progress">
            <div class="progress-item bar">
              <div class="bar-inside"></div>
            </div>
            <div class="progress-item num">20.11%</div>
          </div>
          <div class="item-title subtitle">TARGET</div>
          <div class="item-title white">1,000,000,000 TYT</div>
          <div class="item-title subtitle">TIME REMAINING</div>
          <div class="item-title white">3DAY</div>
          <div class="item-title subtitle">SUPPORTERS</div>
          <div class="item-title white">779</div>
          <div class="btn disable">COMMING SOON</div>

          <!--<div class="dis">-->
            <!--<div class="dis-item"></div>-->
            <!--<div class="dis-item"></div>-->
          <!--</div>-->
        </div>
        <div class="act-item line"></div>
        <div class="act-item">
          <div class="item-title">Air Drop</div>
          <div class="act-item-right">
            <div class="item-title subtitle">TYT(Stage No.1)</div>
            <div class="progress">
              <div class="progress-item bar"></div>
              <div class="progress-item num">0%</div>
            </div>
            <div class="item-title subtitle">TARGET</div>
            <div class="item-title white">1,000,000,000 TYT</div>
            <div class="item-title subtitle">TIME REMAINING</div>
            <div class="item-title white">3DAY</div>
            <div class="item-title subtitle">SUPPORTERS</div>
            <div class="item-title white">779</div>
            <div class="btn disable">COMMING SOON</div>
          </div>
        </div>
      </div>
    </div>
    <div class="gradient2">
      <div class="module">PROJECT INFORMATION</div>
      <div class="title">Roadmap</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .bar-inside{
    width: 100px;
    height: 20px;
    border-radius: 10px;
    background: #fe7447;
  }
  .act-item-right{
    margin-left: 49px;
  }
  .disable:hover{
    cursor: not-allowed;
  }
  .num{
    width: 100px;
    text-align: center;
    line-height: 60px;
    color: #fe7447;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .bar{
    width: 500px;
    height: 20px;
    background: white;
    margin-top: 20px;
    border-radius: 10px;
  }
  .progress-item{
    float: left;
  }
  .progress{
    width: 600px;
    height: 60px;
    /*background: red;*/
  }
  /*.dis-item{*/
    /*float: left;*/
    /*width: 260px;*/
    /*height: 500px;*/
    /*background: yellow;*/
    /*margin-left: 20px;*/
    /*margin-right: 20px;*/
  /*}*/
  /*.dis{*/
    /*width: 600px;*/
    /*height: 500px;*/
    /*background: red;*/
    /*margin-top: 20px;*/
  /*}*/
  .store{
    position: absolute;
    z-index: 0;
    width: 400px;
    height: 700px;
    background: url("../assets/store.png") no-repeat;
    background-position: -140px 140px;
  }
  .module{
    width: 100%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    color: #737085;
  }
  .item-title{
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: #737085;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .subtitle{
    text-align: left;
  }
  .white{
    text-align: left;
    color: #fe7447;
    height: 60px;
    line-height: 60px;
    font-size: 30px;
    font-weight: 900;
  }
  .act-item{
    float: left;
    width: 619px;
    /*background: yellow;*/
    height: 600px;
    /*text-align: center;*/
    /*background-color: yellow;*/
  }
  .line{
    height: 400px;
    margin-top: 100px;
    width: 0;
    border-left: 1px solid #838186;
    /*background: #838186;*/
  }
  .act-content{
    width: 1240px;
    height: 600px;
    margin: 0 auto;
    /*display: flex;*/
    /*background: red;*/
  }
  .title{
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #393741;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .activity{
    width: 100%;
    height: 700px;
    background-color: #eaebef;
  }
  .btns{
    margin: 0 auto;
    width: 510px;
  }
  .btn:first-child{
    margin-right: 30px;
  }
  .btn{
    float: left;
    width: 240px;
    height: 45px;
    text-align: center;
    color: white;
    background-color: #443f53;
    line-height: 45px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  .btn:hover{
    background-color: #211c2c;
  }
  .desc{
    width: 100%;
    height: 40px;
    font-size: 30px;
    color: #737085;
    text-align: center;
    line-height: 30px;
  }
  .desc2{
    margin-bottom: 40px;
  }
  .logo{
    width: 100%;
    height: 200px;
    margin-top: 150px;
    line-height: 200px;
    font-size: 100px;
    font-weight: 700;
    color: #443f53;
    text-align: center;
    letter-spacing: 10px;
  }
  .gradient1{
    position: relative;
    overflow: hidden;
    height: 700px;
    width: 100%;
    background: #fefefe;
    /*background: -moz-linear-gradient(to left bottom,  #000000 0%, #ffffff 100%);*/
    /*background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#000000), color-stop(100%,#ffffff));*/
    /*background: -webkit-linear-gradient(top,  #000000 0%,#ffffff 100%);*/
    /*background: -o-linear-gradient(top,  #000000 0%,#ffffff 100%);*/
    /*background: -ms-linear-gradient(top,  #000000 0%,#ffffff 100%);*/
    background: linear-gradient(to right top,  #e6ebf3 0%,#fefefe 100%);
  }
  .gradient2{
    height: 500px;
    width: 100%;
    background: #ffffff;
    background: linear-gradient(top,  #fcfcfc 0%,#ffffff 100%);
  }

</style>
