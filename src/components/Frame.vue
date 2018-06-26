/**
 * Created by Jimmy on 2018/6/5.
 */
<template>
  <div class="main">
    <div class="mask" v-bind:class="{showMask:!operateFlag}">
      <div class="menu" @click="home">首页</div>
      <div class="menu" @click="whitepaper">白皮书</div>
      <div class="menu" @click="cooperation">机构合作</div>
      <div class="menu" @click="news">新闻</div>
      <div class="menu" @click="team">团队</div>
    </div>
    <Nav :show="operateFlag" v-on:operateMenu="operateMenu"></Nav>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Nav,
    Footer
  },
  data () {
    return {
      operateFlag: true
    }
  },
  methods: {
    operateMenu () {
      this.operateFlag = !this.operateFlag
      scrollTo(0, 0)
    },
    home () {
      this.operateFlag = !this.operateFlag
      this.$router.push('/')
    },
    whitepaper () {
      this.operateFlag = !this.operateFlag
      window.open('https://tyt.io/static/TYT_whitepaper_zh-CN.pdf')
    },
    cooperation () {
      this.operateFlag = !this.operateFlag
      this.$router.push('/cooperation')
    },
    news () {
      this.operateFlag = !this.operateFlag
      this.$router.push('/news')
    },
    team () {
      this.operateFlag = !this.operateFlag
      this.$router.push('/team')
    }
  }
}
</script>

<style scoped>
  .menu{
    width: 100%;
    height: 40px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    color: transparent;
  }
  .main{
    position: relative;
  }
  .mask{
    width: 0;
    height: 0;
    background: white;
    position: absolute;
    left: 0;
    top: 100px;
    z-index:100;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  .showMask{
    width: 100%;
    height: 100%;
  }
  .showMask .menu{
    color: #00263f;
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
