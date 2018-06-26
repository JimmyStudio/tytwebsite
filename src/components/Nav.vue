/**
 * Created by Jimmy on 2018/6/5.
 */
<template>
  <div>
    <div v-if="device">
      <div class="pc">
        <div class="content">
          <div class="top">
            <div class="t-i">
              <img class="t-i-i" src="../assets/logo_dark.svg"/>
            </div>
            <div class="t-i">
              <div class="logo">TYT</div>
              <div class="desc">基于区块链的泛文娱生态系统</div>
            </div>
            <div class="t-i tr">
              <font-awesome-icon class="fai" :icon="['fab','telegram']"></font-awesome-icon>
              <font-awesome-icon class="fai" :icon="['fab','discord']"></font-awesome-icon>
              <font-awesome-icon class="fai" :icon="['fab','facebook-f']"></font-awesome-icon>
              <font-awesome-icon class="fai" :icon="['fab','twitter']" @click="openTwitter"></font-awesome-icon>
            </div>
          </div>
          <div class="menus">
            <div class="menu" @click="home">首页</div>
            <div class="menu" @click="whitepaper">白皮书</div>
            <div class="menu" @click="cooperation">机构合作</div>
            <div class="menu" @click="news">新闻</div>
            <div class="menu" @click="team">团队</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="phone">
        <div class="left">
          <div class="logo-phone">TYT</div>
          <div class="desc-phone">基于区块链的泛文娱生态系统</div>
        </div>
        <div class="right">
          <div v-if="show">
            <font-awesome-icon class="fai" :icon="['fas','bars']" @click="operateMenu"></font-awesome-icon>
          </div>
          <div v-else>
            <font-awesome-icon class="fai" :icon="['fas','times']" @click="operateMenu"></font-awesome-icon>
          </div>
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
  data () {
    return {
      device: true
    }
  },
  methods: {
    operateMenu () {
      this.$emit('operateMenu')
    },
    home () {
      this.$router.push('/')
    },
    whitepaper () {
      window.open('https://tyt.io/static/TYT_whitepaper_zh-CN.pdf')
    },
    cooperation () {
      this.$router.push('/cooperation')
    },
    news () {
      this.$router.push('/news')
    },
    team () {
      this.$router.push('/team')
    },
    openTwitter () {
      window.open('https://twitter.com/tytchain')
    }
  },
  mounted () {
    if (document.documentElement.clientWidth > 768) {
      this.device = true
    } else {
      this.device = false
    }
    let that = this
    window.onresize = function () {
      if (document.documentElement.clientWidth > 768) {
        that.device = true
      } else {
        that.device = false
      }
    }
  }
}
</script>

<style scoped>
  .fai{
    margin-right: 15px;
    cursor: pointer;
  }
  .fai:hover{
    color: #00d8a4;
  }
  .right{
    float: right;
    height: 100px;
    line-height: 100px;
    font-size: 40px;
    color: #00d8a4;
  }
  .left{
    float: left;
  }
  .phone{
    width: 100%;
    height: 100px;
    background: #00263f;
    color: white;
  }
  .menu{
    float: left;
    height: 80px;
    width: 120px;
    line-height: 80px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  .menu:hover{
    color: #00d8a4;
  }
  .menus{
    height: 80px;
    width: 600px;
    margin: 0 auto;
  }
  .tr{
    text-align: right;
    line-height: 120px;
    font-size: 14px;
  }
  .logo{
    text-align: center;
    margin-top: 20px;
    height: 50px;
    line-height: 50px;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 4px;
  }
  .logo-phone{
    padding-top: 28px;
    height: 40px;
    line-height: 40px;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 4px;
    margin-left: 20px;
  }
  .desc{
    height: 20px;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
  }
  .desc-phone{
    height: 14px;
    font-size: 12px;
    line-height: 14px;
    margin-left: 20px;
  }
  .top{
    height: 120px;
    width: 100%;
    display: flex;
  }
  .t-i{
    flex-grow: 1;
    flex-basis: 0;
    flex-shrink: 0;
    /*background: red;*/
  }
  .content{
    width: 1200px;
    margin: 0 auto;
    color: white;
  }
  .pc{
    width: 100%;
    height: 200px;
    background: url("../assets/top_screen.jpg") ;
  }
  .t-i-i{
    width: 50px;
    height: 50px;
    /*margin-left: 20px;*/
    margin-top: 40px;
  }
</style>
