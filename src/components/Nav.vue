/**
 * Created by Jimmy on 2018/6/5.
 */
<template>
  <div class="bar">
    <div class="content">
      <div class="left">
        <img class="logo" src="../assets/logo_dark.svg"/>
        <div class="tm smallsize-font">TM</div>
      </div>
      <div class="right">
        <div class="menu">HOME</div>
        <div class="menu">FEATURES</div>
        <div class="menu">ACTIVITY</div>
        <div class="menu">ABOUT</div>
        <div class="btn menu">SIGN IN</div>
        <div class="btn menu">SIGN UP</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .tm{
    float: left;
    color: #443f53;
    font-size: 12px;
    height: 10px;
    width: 20px;
    /*background: red;*/
    line-height: 10px;
    margin-top: 54px;
    -webkit-transform-origin-x: 0;
    -webkit-transform: scale(0.50);
  }
  .smallsize-font {
    font-size:6px;
  }
  .logo{
    float: left;
    width: 41px;
    height: 41px;
    margin: 19px 0 19px 20px;
  }
  .left{
    float: left;
  }
  .bar{
    width: 100%;
    height: 79px;
    background-color: #ffffff;
    border-bottom: 1px solid #d8d8d8;
  }
  .content{
    width: 1240px;
    height: 79px;
    /*background-color: red;*/
    margin: 0 auto;
    color: #838186;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
  }
  .right{
    float: right;
  }
  .btn:hover{
    border-color: #4f4b5d;
  }
  .menu {
    float: left;
    width: 80px;
    /*height: 32px;*/
    /*background-color: red;*/
    margin: 21px 10px;
    line-height: 32px;
    cursor: pointer;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  .menu:hover{
    color: #595667;
    font-weight: 700;
  }
  .btn{
    width: 125px;
    height: 32px;
    border: 1px solid #dad9d9;
    margin: 21px 10px;
  }
</style>
