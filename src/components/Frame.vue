/**
 * Created by Jimmy on 2018/6/5.
 */
<template>
  <div>
    <div class="header">
      <mynav :show="operateFlag" v-on:operateMenu="doOperateMenu" v-on:team="team" v-on:showFeatures="showFeatures" v-on:showInfo="showInfo" v-on:showHome="showHome" v-on:join="join"></mynav>
    </div>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view ref="rv"></router-view>
      </transition>
    </div>
    <div class="bottom">
      <div class="bt-content">
        <div class="bt-item">
          <div class="bti">
            <!--<font-awesome-icon class="fai" :icon="['fab','github']"></font-awesome-icon>-->
            <font-awesome-icon class="fai" :icon="['fab','telegram']"></font-awesome-icon>
            <font-awesome-icon class="fai" :icon="['fab','discord']"></font-awesome-icon>
            <font-awesome-icon class="fai" :icon="['fab','twitter']"></font-awesome-icon>
            <font-awesome-icon class="fai" :icon="['fab','facebook-square']"></font-awesome-icon>
            <font-awesome-icon class="fai" :icon="['fab','reddit']"></font-awesome-icon>
            <!--<font-awesome-icon class="fai" :icon="['fab','linkedin']"></font-awesome-icon>-->
          </div>
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
          <span class="an-item"><a href="mailto:support@tyt.io">support@TYT.io&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</a></span>
          <!--<span class="an-item">support@tyt.io&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>-->
          <span class="an-item" @click="tu">Terms of Use&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="an-item" @click="pp">Privacy Policy</span>
        </div>
      </div>
      <div class="cp">Copyright © 2018 tyt.io | All rights reserved</div>
    </div>
    <div class="mask" v-bind:class="{showMask:!operateFlag}">
      <div class="menus" v-bind:class="{showMenus:!operateFlag}">
        <div class="menu" @click="showHome">HOME</div>
        <div class="menu" @click="showFeatures">FEATURES</div>
        <!--<div class="menu">ACTIVITY</div>-->
        <div class="menu" @click="showInfoInDevice">INFORMATION</div>
        <div class="menu" @click="team">ABOUT US</div>
        <div class="menu">
          <div class="btn" @click="join">JOIN THE COMMUNITY</div>
        </div>
        <!--<div class="menu">-->
          <!--<div class="btn">SIGN IN</div>-->
        <!--</div>-->
        <!--<div class="menu">-->
          <!--<div class="btn">SIGN UP</div>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
import mynav from '../components/Nav.vue'
export default {
  components: {
    mynav
  },
  data () {
    return {
      operateFlag: true
    }
  },
  methods: {
    tu () {
      this.$router.push('/terms-of-use')
      scrollTo(0, 0)
    },
    pp () {
      this.$router.push('/privacy-policy')
      scrollTo(0, 0)
    },
    team () {
      this.operateFlag = true
      this.$router.push('/team')
      scrollTo(0, 0)
    },
    join () {
      this.operateFlag = true
      this.$router.push('/join')
      scrollTo(0, 0)
    },
    showHome () {
      this.operateFlag = true
      if (this.$router.currentRoute.name !== 'Home') {
        this.$router.push('/')
      }
      scrollTo(0, 0)
    },
    doOperateMenu () {
      this.operateFlag = !this.operateFlag
      scrollTo(0, 0)
    },
    showFeatures () {
      this.operateFlag = true
      if (this.$router.currentRoute.name !== 'Home') {
        this.$router.push('/')
      }
      scrollTo(0, 700)
    },
    showInfo () {
      this.operateFlag = true
      if (this.$router.currentRoute.name !== 'Home') {
        this.$router.push('/')
      }
      scrollTo(0, 1865)
    },
    showInfoInDevice () {
      this.operateFlag = true
      if (this.$router.currentRoute.name !== 'Home') {
        this.$router.push('/')
      }
      let sw = window.screen.width
      if (sw === 414) {
        scrollTo(0, 2970)
      } else if (sw === 375) {
        scrollTo(0, 3050)
      }
    }
  }
}
</script>

<style scoped>
  .menus{
    display: none;
  }
  .mask{
    position: absolute;
    top: 80px;
    left: 0;
    z-index: 100;
    width: 0;
    height: 4260px;
    background: white;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  .menu {
    height: 60px;
    color: #838186;
    width: 100%;
    text-align: center;
    /*height: 32px;*/
    /*background-color: red;*/
    line-height: 60px;
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
  .menu:last-child{
    height: 34px;
  }
  .btn{
    width: 225px;
    height: 32px;
    border: 1px solid #dad9d9;
    line-height: 32px;
    margin: 0 auto;
    /*margin: 21px 10px;*/
  }
  .showMenus{
    display: block;
  }
  .showMask{
    width: 100%;
  }
  .btn:hover{
    border-color: #4f4b5d;
  }
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
  .an-item a{
    font-size: 12px;
    font-weight: 500;
    color: #908d98;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    cursor: pointer;
  }
  .name-wrap{
    width: 400px;
    /*height: 130px;*/
    margin: 0 auto;
    text-align: center;
  }
  .name{
    font-size: 40px;
    color: white;
    letter-spacing: 5px;
    font-weight: 700;
  }
  .bti{
    width: 290px;
    /*background: red;*/
    margin: 0 auto;
  }
  .fai{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 40px;
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
    /*height: 130px;*/
    margin: 0 auto;
    /*text-align: center;*/
    /*background-color: red;*/
    display: flex;
    line-height: 130px;
  }
  .bt-item{
    flex-grow: 1;
    /*flex-basis: 0;*/
    /*flex-shrink: 0;*/
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
    z-index: 100;
  }
  .content{
    margin-top: 80px;
  }
  @media all and (max-width: 767px) {
    .bottom{
      height: 435px;
    }
    .bt-content{
      width: 100%;
      /*height: 450px;*/
      flex-direction: column;
    }
    .cp{
      width: 100%;
      text-align: center;
    }
    .name-wrap{
      /*width: 600px;*/
      width: 100%;
      margin: 0 auto;
    }
    .bt-item:last-child{
      /*background: yellow;*/
      text-align: center;
    }
    .bt-item{
      /*flex-basis: ;*/
      /*flex-shrink: 0;*/
      /*background-color: yellow;*/
    }
    .bti{
      /*width: 100%;*/
      margin: 0 auto;
    }
    /*.mask{*/
      /*width: 100%;*/
    /*}*/
    /*.menus{*/
      /*display: block;*/
    /*}*/
    /*.bt-item{*/
      /*width: 100%;*/
    /*}*/
  }
  .fade-enter {
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition:opacity .2s;
  }
  .fade-leave-active{
    opacity:0;
    transition:opacity .2s;
  }
</style>
