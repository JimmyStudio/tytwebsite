/**
 * Created by Jimmy on 2018/6/5.
 */
<template>
  <div>
    <div class="gradient1">
      <div class="logo">TYT</div>
      <div class="desc">The most powerful infrastructure for</div>
      <div class="desc desc2">decentralized applications</div>
      <div class="btns">
        <div class="btn">ANNOUNCEMENTS</div>
        <div class="btn">WHITE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PAPER</div>
      </div>
    </div>
    <div class="gradient2">
      <div class="title">FEATURES</div>
    </div>
    <div class="activity">
      <div class="title">ACTIVITY</div>
      <div class="act-content">
        <div class="act-item">
          <div class="item-title">TYT Token Exchange</div>
        </div>
        <div class="act-item">
          <div class="item-title">Air Drop</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .item-title{
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: #737085;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .act-item{
    flex-grow: 1;
    flex-basis: 0;
    flex-shrink: 0;
    /*text-align: center;*/
    /*background-color: yellow;*/
  }
  .act-content{
    width: 1240px;
    height: 620px;
    margin: 0 auto;
    display: flex;
    /*background: red;*/
  }
  .title{
    width: 100%;
    height: 80px;
    line-height: 80px;
    color: #393741;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
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
    margin-top: 160px;
    line-height: 200px;
    font-size: 100px;
    font-weight: 700;
    color: #443f53;
    text-align: center;
    letter-spacing: 10px;
  }
  .gradient1{
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
