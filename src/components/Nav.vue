/**
 * Created by Jimmy on 2018/6/5.
 */
<template>
  <div class="bar">
    <div class="content">
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
