/**
 * Created by Jimmy on 2018/6/5.
 */
<template>
  <div>
    <div class="header">
      <mynav></mynav>
    </div>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div class="bottom">
      <div class="bt-content">
        <div class="bt-item">
          <font-awesome-icon class="fai" :icon="['fab','github']"></font-awesome-icon>
          <font-awesome-icon class="fai" :icon="['fab','telegram']"></font-awesome-icon>
          <font-awesome-icon class="fai" :icon="['fab','discord']"></font-awesome-icon>
          <font-awesome-icon class="fai" :icon="['fab','twitter']"></font-awesome-icon>
          <font-awesome-icon class="fai" :icon="['fab','facebook-square']"></font-awesome-icon>
          <font-awesome-icon class="fai" :icon="['fab','reddit']"></font-awesome-icon>
          <font-awesome-icon class="fai" :icon="['fab','linkedin']"></font-awesome-icon>
        </div>
        <div class="bt-item">
          <div class="name-wrap">
            <div class="name-wrap-item logo">
              <img src="../assets/logo_white.svg"/>
            </div>
            <div class="name-wrap-item name">TYT.io</div>
          </div>
        </div>
        <div class="bt-item">
          <span class="an-item">support@tyt.io&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="an-item">Terms of Use&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="an-item">Privacy Policy</span>
        </div>
      </div>
      <div class="cp">Copyright © 2018 tyt.io | All rights reserved</div>
    </div>
  </div>
</template>

<script>
import mynav from '../components/Nav.vue'
export default {
  components: {
    mynav
  }
}
</script>

<style scoped>
  .logo{
    width: 60px;
    height: 60px;
    margin-top: 20px;
    margin-left: 80px;
    margin-right: 20px;
  }
  .name-wrap-item{
    float: left;
  }
  .cp{
    margin: 0 auto;
    width: 1240px;
    height: 40px;
    font-size: 12px;
    font-weight: 500;
    color: #908d98;
    text-align: right;
  }
  .bt-item:last-child{
    /*background: yellow;*/
    text-align: right;
  }
  .an-item{
    /*background: red;*/
    font-size: 12px;
    font-weight: 500;
    color: #908d98;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    cursor: pointer;
    /*margin-right: 10px;*/
    /*margin-left: 10px;*/
    /*border-right: 1px solid #908d98;*/
  }
  .name-wrap{
    width: 400px;
    height: 130px;
    margin: 0 auto;
    text-align: center;
  }
  .name{
    font-size: 40px;
    color: white;
    letter-spacing: 5px;
    font-weight: 700;
  }
  .fai{
    margin-right: 20px;
    font-size: 30px;
    color: #908d98;
    cursor: pointer;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  .fai:hover,.an-item:hover{
    color: #737085;
  }
  .bt-content{
    width: 1240px;
    height: 130px;
    margin: 0 auto;
    /*text-align: center;*/
    /*background-color: red;*/
    display: flex;
    line-height: 130px;
  }
  .bt-item{
    flex-grow: 1;
    flex-basis: 0;
    flex-shrink: 0;
    /*background-color: yellow;*/
  }
  .bottom{
    width: 100%;
    height: 160px;
    background-color: #443f53;
  }
  .header{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  .content{
    margin-top: 80px;
  }
</style>
