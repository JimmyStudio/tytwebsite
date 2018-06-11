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
        <div class="op">
          <div v-if="show">
            <font-awesome-icon class="fai" :icon="['fas','bars']" @click="operateMenu"></font-awesome-icon>
          </div>
          <div v-else>
            <font-awesome-icon class="fai" :icon="['fas','times']" @click="operateMenu"></font-awesome-icon>
          </div>
        </div>
        <div class="menus">
          <div class="menu" @click="showHome">首页</div>
          <div class="menu" @click="showFeatures">特性</div>
          <!--<div class="menu">ACTIVITY</div>-->
          <div class="menu" @click="showInfo">项目信息</div>
          <div class="menu" @click="team">关于我们</div>
          <div class="btn menu" @click="join">加入TYT社区</div>
          <div class="btn s menu" @click="lang">中文</div>

          <!--<div class="btn menu">SIGN IN</div>-->
          <!--<div class="btn menu">SIGN UP</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean
  },
  methods: {
    showHome () {
      this.$emit('showHome')
    },
    operateMenu () {
      this.$emit('operateMenu')
    },
    showFeatures () {
      this.$emit('showFeatures')
    },
    showInfo () {
      this.$emit('showInfo')
    },
    join () {
      this.$emit('join')
    },
    team () {
      this.$emit('team')
    },
    lang () {
      this.$emit('lang')
    }
  }
}
</script>

<style scoped>
  .fai{
    font-size: 20px;
    margin-top: 30px;
    margin-left: 40px;
    cursor: pointer;
  }
  .op{
    display: none;
    width: 100px;
    height: 79px;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    /*background: red;*/
  }
  .fai{
    color: #443f53;
  }
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
    width: 100px;
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
    width: 225px;
    height: 32px;
    border: 1px solid #dad9d9;
    margin: 21px 10px;
  }
  .s{
    margin: 26px 10px;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    width: 32px;
    color: #595667;
    font-weight: 700;
    border: 1px solid #4f4b5d;
  }
  @media all and (max-width: 767px) {
    .content{
      width: 100%;
    }
    .menus{
      display: none;
    }
    .op{
      display: block;
    }
    .tm{
      -webkit-transform-origin-x: 0;
      -webkit-transform: scale(0.80);
    }
  }
</style>
